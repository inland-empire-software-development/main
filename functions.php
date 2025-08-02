<?php

/**
 * IESD Main Theme Functions
 *
 * @package IESD\Theme
 */

namespace IESD\Theme;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// Define theme constants
define('IESD_THEME_VERSION', '1.0.0');
define('IESD_THEME_DIR', get_template_directory());
define('IESD_THEME_URL', get_template_directory_uri());
define('IESD_THEME_PATH', __FILE__);

// Composer autoloader
if (file_exists(IESD_THEME_DIR . '/vendor/autoload.php')) {
    require_once IESD_THEME_DIR . '/vendor/autoload.php';
}

/**
 * Theme Setup
 */
function theme_setup()
{
    // Load text domain
    load_theme_textdomain('iesd-main', IESD_THEME_DIR . '/languages');

    // Add theme support
    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    add_theme_support('responsive-embeds');

    // Navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'iesd-main'),
        'footer'  => esc_html__('Footer Menu', 'iesd-main'),
    ));

    // Custom image sizes
    add_image_size('featured-large', 1200, 600, true);
    add_image_size('featured-medium', 800, 400, true);
}
add_action('after_setup_theme', __NAMESPACE__ . '\\theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function enqueue_assets()
{
    // UIKit CSS from CDN
    wp_enqueue_style(
        'uikit-css',
        'https://cdn.jsdelivr.net/npm/uikit@3.20.0/dist/css/uikit.min.css',
        array(),
        '3.20.0'
    );

    // UIKit JavaScript from CDN
    wp_enqueue_script(
        'uikit-js',
        'https://cdn.jsdelivr.net/npm/uikit@3.20.0/dist/js/uikit.min.js',
        array(),
        '3.20.0',
        true
    );

    // UIKit Icons from CDN
    wp_enqueue_script(
        'uikit-icons',
        'https://cdn.jsdelivr.net/npm/uikit@3.20.0/dist/js/uikit-icons.min.js',
        array('uikit-js'),
        '3.20.0',
        true
    );

    // Your custom theme styles
    wp_enqueue_style(
        'iesd-main-style',
        IESD_THEME_URL . '/dist/style.css',
        array('uikit-css'), // Load after UIKit
        IESD_THEME_VERSION
    );

    // Your custom theme JavaScript
    wp_enqueue_script(
        'iesd-main-script',
        IESD_THEME_URL . '/dist/main.js',
        array('uikit-js', 'uikit-icons'), // Load after UIKit
        IESD_THEME_VERSION,
        true
    );

    // Localize script for AJAX
    wp_localize_script('iesd-main-script', 'iesd_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('iesd_nonce'),
    ));

    // Accessibility improvements
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_assets');

/**
 * Add async/defer to scripts
 */
function add_script_attributes($tag, $handle, $src)
{
    $async_scripts = array('iesd-main-script');

    if (in_array($handle, $async_scripts)) {
        return str_replace(' src', ' defer src', $tag);
    }

    return $tag;
}
add_filter('script_loader_tag', __NAMESPACE__ . '\\add_script_attributes', 10, 3);

/**
 * Widget Areas
 */
function widgets_init()
{
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'iesd-main'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'iesd-main'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer', 'iesd-main'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Footer widget area.', 'iesd-main'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="footer-widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', __NAMESPACE__ . '\\widgets_init');

/**
 * Accessibility improvements
 */
function accessibility_improvements()
{
    // Skip links
    echo '<a class="skip-link screen-reader-text" href="#main">' . esc_html__('Skip to content', 'iesd-main') . '</a>';
}
add_action('wp_body_open', __NAMESPACE__ . '\\accessibility_improvements');

/**
 * Load additional theme files
 */
$theme_includes = array(
    'inc/template-functions.php',
);

foreach ($theme_includes as $file) {
    $filepath = IESD_THEME_DIR . '/' . $file;
    if (file_exists($filepath)) {
        require_once $filepath;
    }
}

/**
 * Development helpers
 */
if (defined('WP_DEBUG') && WP_DEBUG) {
    // Add development helpers here
    add_action('wp_footer', function () {
        if (current_user_can('manage_options')) {
            echo '<div id="debug-info" style="position: fixed; bottom: 10px; right: 10px; background: #000; color: #fff; padding: 10px; font-size: 12px; z-index: 9999;">';
            echo 'Theme: ' . IESD_THEME_VERSION . ' | ';
            echo 'Queries: ' . get_num_queries() . ' | ';
            echo 'Memory: ' . size_format(memory_get_peak_usage());
            echo '</div>';
        }
    });
}
