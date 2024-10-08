<?php
/**
 * Simple Client Dashboard Settings Api.
 *
 * @since   1.7.2
 * @package Simple_Client_Dashboard
 */

/**
 * Simple Client Dashboard Settings Api.
 *
 * @since 1.7.2
 */
class SCD_Settings_Api extends WP_REST_Controller {

	/**
	 * Parent plugin class
	 *
	 * @var   class
	 * @since 1.7.2
	 */
	protected $plugin = null;

	/**
	 * Constructor
	 *
	 * @since  1.7.2
	 * @param  object $plugin Main plugin object.
	 * @return void
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
		$this->hooks();
	}

	/**
	 * Initiate our hooks
	 *
	 * @since  1.7.2
	 * @return void
	 */
	public function hooks() {
		$this->register_routes();
	}


	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {
		$version   = '1';
		$namespace = 'scd/v' . $version;
		$base      = 'settings';
		register_rest_route(
			$namespace,
			'/' . $base,
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => array(),
				),
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'update_items' ),
					'permission_callback' => array( $this, 'create_item_permissions_check' ),
					'args'                => array(),
				),
			)
		);
		register_rest_route(
			$namespace,
			'/' . $base . '/(?P<id>[a-zA-Z0-9_-]+)',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
					'args'                => array(
						'context' => array(
							'default' => 'view',
						),
					),
				),
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_item' ),
					'permission_callback' => array( $this, 'update_item_permissions_check' ),
					'args'                => $this->get_endpoint_args_for_item_schema( false ),
				),
				array(
					'methods'             => WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_item' ),
					'permission_callback' => array( $this, 'delete_item_permissions_check' ),
					'args'                => array(
						'force' => array(
							'default' => false,
						),
					),
				),
			)
		);
		register_rest_route(
			$namespace,
			'/schema',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_sections_with_values' ),
				'permission_callback' => array( $this, 'get_item_permissions_check' ),
			)
		);
	}

	/**
	 * Get a collection of items
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {
		$settings = $this->plugin->settings->get();

		return array(
			'response_code' => 200,
			'error'         => '',
			'data'          => $settings,
		);
	}

	/**
	 * Get one item from the collection
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_item( $request ) {
		$settings = $this->plugin->settings->get();
		if ( empty( $settings[ $request['id'] ] ) ) {
			return array(
				'response_code' => 404,
				'error'         => 'section-missing',
				'data'          => array(),
			);
		}

		return array(
			'response_code' => 200,
			'error'         => '',
			'data'          => $settings[ $request['id'] ],
		);
	}

	/**
	 * Create one item from the collection
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Request
	 */
	public function update_items( $request ) {

		$params = $request->get_params();

		$updated = $this->plugin->settings->update( $params );
		return array(
			'response_code' => 200,
			'error'         => '',
			'data'          => $this->plugin->settings->get(),
		);
	}

	/**
	 * Update one item from the collection
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Request
	 */
	public function update_item( $request ) {
		$params = $request->get_params();
		unset( $params['id'] );

		$response = $this->plugin->settings->update_section( $request['id'], $params );
		if ( is_wp_error( $response ) ) {
			return $response;
		}
		return array(
			'response_code' => 200,
			'error'         => '',
			'data'          => $response,
		);
	}

	/**
	 * Delete one item from the collection
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Request
	 */
	public function delete_item( $request ) {
	}

	/**
	 * Get the structure, settings schema and config values for the UI
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_sections_with_values( $request ) {
		$sections_schema = $this->plugin->settings->get_sections_schema_with_values();

		$response = array(
			'sections_schema' => $sections_schema,
		);

		return array(
			'response_code' => 200,
			'error'         => '',
			'data'          => $response,
		);
	}

	/**
	 * Check if a given request has access to get items
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function get_items_permissions_check( $request ) {
		return SCD_Bootstrap::nonce_permissions_check( $request );
	}

	/**
	 * Check if a given request has access to get a specific item
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function get_item_permissions_check( $request ) {
		return SCD_Bootstrap::nonce_permissions_check( $request );
	}

	/**
	 * Check if a given request has access to create items
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function create_item_permissions_check( $request ) {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Check if a given request has access to update a specific item
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function update_item_permissions_check( $request ) {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Check if a given request has access to delete a specific item
	 *
	 * @param  WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function delete_item_permissions_check( $request ) {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Prepare the item for create or update operation
	 *
	 * @param  WP_REST_Request $request Request object
	 * @return WP_Error|object $prepared_item
	 */
	protected function prepare_item_for_database( $request ) {
		return array();
	}

	/**
	 * Prepare the item for the REST response
	 *
	 * @param  mixed           $item    WordPress representation of the item.
	 * @param  WP_REST_Request $request Request object.
	 * @return mixed
	 */
	public function prepare_item_for_response( $item, $request ) {
		return array();
	}

	/**
	 * Get the query params for collections
	 *
	 * @return array
	 */
	public function get_collection_params() {
		return array(
			'page'     => array(
				'description'       => 'Current page of the collection.',
				'type'              => 'integer',
				'default'           => 1,
				'sanitize_callback' => 'absint',
			),
			'per_page' => array(
				'description'       => 'Maximum number of items to be returned in result set.',
				'type'              => 'integer',
				'default'           => 10,
				'sanitize_callback' => 'absint',
			),
			'search'   => array(
				'description'       => 'Limit results to those matching a string.',
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
		);
	}
}
