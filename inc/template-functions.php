<?php
/**
 * Template Functions
 *
 * @package IESD\Theme
 */

namespace IESD\Theme;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Custom Walker for Primary Navigation
 */
class Walker_Nav_Menu_Primary extends \Walker_Nav_Menu
{
    
    function start_lvl(&$output, $depth = 0, $args = null)
    {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<div class=\"uk-navbar-dropdown\" role=\"menu\">\n$indent\t<ul class=\"uk-nav uk-navbar-dropdown-nav\">\n";
    }

    function end_lvl(&$output, $depth = 0, $args = null)
    {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent\t</ul>\n$indent</div>\n";
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $has_children = in_array('menu-item-has-children', $classes);
        $is_current = in_array('current-menu-item', $classes) || in_array('current-menu-parent', $classes);
        
        $li_class = $is_current ? 'uk-active' : '';
        
        $output .= $indent . '<li' . ($li_class ? ' class="' . $li_class . '"' : '') . ' role="none">';

        $attributes = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target)     ? ' target="' . esc_attr($item->target) .'"' : '';
        $attributes .= ! empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn) .'"' : '';
        $attributes .= ! empty($item->url)        ? ' href="'   . esc_attr($item->url) .'"' : '';
        $attributes .= ' role="menuitem"';
        
        if ($is_current) {
            $attributes .= ' aria-current="page"';
        }
        
        if ($has_children) {
            $attributes .= ' class="uk-navbar-parent-icon"';
        }

        $item_output = $args->before ?? '';
        $item_output .= '<a' . $attributes .'>';
        $item_output .= ($args->link_before ?? '') . apply_filters('the_title', $item->title, $item->ID) . ($args->link_after ?? '');
        $item_output .= '</a>';
        $item_output .= $args->after ?? '';

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }

    function end_el(&$output, $item, $depth = 0, $args = null)
    {
        $output .= "</li>\n";
    }
}

/**
 * Custom Walker for Mobile Navigation
 */
class Walker_Nav_Menu_Mobile extends \Walker_Nav_Menu
{
    
    function start_lvl(&$output, $depth = 0, $args = null)
    {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"uk-nav-sub\" role=\"menu\">\n";
    }

    function end_lvl(&$output, $depth = 0, $args = null)
    {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</ul>\n";
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $is_current = in_array('current-menu-item', $classes) || in_array('current-menu-parent', $classes);
        
        $li_class = $is_current ? 'uk-active' : '';
        
        $output .= $indent . '<li' . ($li_class ? ' class="' . $li_class . '"' : '') . ' role="none">';

        $attributes = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target)     ? ' target="' . esc_attr($item->target) .'"' : '';
        $attributes .= ! empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn) .'"' : '';
        $attributes .= ! empty($item->url)        ? ' href="'   . esc_attr($item->url) .'"' : '';
        $attributes .= ' role="menuitem"';
        
        if ($is_current) {
            $attributes .= ' aria-current="page"';
        }

        $item_output = $args->before ?? '';
        $item_output .= '<a' . $attributes .'>';
        $item_output .= ($args->link_before ?? '') . apply_filters('the_title', $item->title, $item->ID) . ($args->link_after ?? '');
        $item_output .= '</a>';
        $item_output .= $args->after ?? '';

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }

    function end_el(&$output, $item, $depth = 0, $args = null)
    {
        $output .= "</li>\n";
    }
}

/**
 * Custom Walker for Footer Navigation
 */
class Walker_Nav_Menu_Footer extends \Walker_Nav_Menu
{
    
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $is_current = in_array('current-menu-item', $classes) || in_array('current-menu-parent', $classes);
        
        $li_class = $is_current ? 'uk-active' : '';
        
        $output .= $indent . '<li' . ($li_class ? ' class="' . $li_class . '"' : '') . ' role="none">';

        $attributes = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target)     ? ' target="' . esc_attr($item->target) .'"' : '';
        $attributes .= ! empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn) .'"' : '';
        $attributes .= ! empty($item->url)        ? ' href="'   . esc_attr($item->url) .'"' : '';
        $attributes .= ' role="menuitem"';
        
        if ($is_current) {
            $attributes .= ' aria-current="page"';
        }

        $item_output = $args->before ?? '';
        $item_output .= '<a' . $attributes .'>';
        $item_output .= ($args->link_before ?? '') . apply_filters('the_title', $item->title, $item->ID) . ($args->link_after ?? '');
        $item_output .= '</a>';
        $item_output .= $args->after ?? '';

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }

    function end_el(&$output, $item, $depth = 0, $args = null)
    {
        $output .= "</li>\n";
    }
}
