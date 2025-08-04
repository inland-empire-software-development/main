<?php
/**
 * The main template file
 *
 * @package IESD\Theme
 */

get_header();
 
get_template_part('template-parts/header/announcements');
get_template_part('template-parts/header/hero');
get_template_part('template-parts/community');
get_template_part('template-parts/stories');
get_template_part('template-parts/speakers');
get_template_part('template-parts/slogan');
get_template_part('template-parts/sponsors');
get_template_part('template-parts/join');
get_footer();
