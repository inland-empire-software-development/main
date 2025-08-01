<?php
/**
 * Single Post Template
 *
 * @package IESD\Theme
 */

get_header(); ?>

<div class="uk-container uk-container-large uk-margin-top">
    <?php while (have_posts()) :
        the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('single-post'); ?>>
            <?php if (has_post_thumbnail()) : ?>
                <div class="post-featured-image uk-margin-bottom">
                    <?php the_post_thumbnail('featured-large', array(
                        'class' => 'uk-width-1-1 uk-border-rounded'
                    )); ?>
                </div>
            <?php endif; ?>
            
            <header class="post-header uk-margin-large-bottom">
                <h1 class="post-title uk-article-title uk-margin-remove-bottom"><?php the_title(); ?></h1>
                
                <div class="post-meta uk-article-meta uk-margin-small-top">
                    <time datetime="<?php echo esc_attr(get_the_date('c')); ?>" class="post-date">
                        <?php echo esc_html(get_the_date('F j, Y')); ?>
                    </time>
                    
                    <?php $author_id = get_the_author_meta('ID'); ?>
                    <?php if ($author_id) : ?>
                        <span class="post-author">
                            <?php esc_html_e('by', 'iesd-main'); ?> 
                            <a href="<?php echo esc_url(get_author_posts_url($author_id)); ?>" rel="author">
                                <?php echo esc_html(get_the_author()); ?>
                            </a>
                        </span>
                    <?php endif; ?>
                    
                    <?php $categories = get_the_category(); ?>
                    <?php if (!empty($categories)) : ?>
                        <div class="post-categories uk-margin-small-top">
                            <?php foreach ($categories as $category) : ?>
                                <span class="uk-label uk-label-muted uk-margin-small-right">
                                    <a href="<?php echo esc_url(get_category_link($category->term_id)); ?>" class="uk-link-reset">
                                        <?php echo esc_html($category->name); ?>
                                    </a>
                                </span>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </header>
            
            <div class="post-content uk-article-content">
                <?php
                the_content(sprintf(
                    wp_kses(
                        __('Continue reading<span class="screen-reader-text"> "%s"</span>', 'iesd-main'),
                        array(
                            'span' => array(
                                'class' => array(),
                            ),
                        )
                    ),
                    wp_kses_post(get_the_title())
                ));

                wp_link_pages(array(
                    'before' => '<div class="page-links uk-margin-medium-top">' . esc_html__('Pages:', 'iesd-main'),
                    'after'  => '</div>',
                ));
                ?>
            </div>
            
            <?php $tags = get_the_tags(); ?>
            <?php if ($tags) : ?>
                <footer class="post-footer uk-margin-large-top uk-padding-small uk-background-muted uk-border-rounded">
                    <div class="post-tags">
                        <strong><?php esc_html_e('Tags:', 'iesd-main'); ?></strong>
                        <?php foreach ($tags as $tag) : ?>
                            <a href="<?php echo esc_url(get_tag_link($tag->term_id)); ?>" 
                               class="uk-button uk-button-text uk-button-small uk-margin-small-left">
                                #<?php echo esc_html($tag->name); ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </footer>
            <?php endif; ?>
        </article>
        
        <?php
        // Get related posts by category
        $categories = wp_get_post_categories(get_the_ID());
        if ($categories) {
            $related_posts = get_posts(array(
                'category__in'   => $categories,
                'numberposts'    => 3,
                'post__not_in'   => array(get_the_ID()),
                'orderby'        => 'rand'
            ));
            
            if ($related_posts) : ?>
                <section class="related-posts uk-margin-xlarge-top">
                    <h2 class="uk-h3 uk-margin-medium-bottom"><?php esc_html_e('Related Posts', 'iesd-main'); ?></h2>
                    <div class="uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>
                        <?php foreach ($related_posts as $related_post) : ?>
                            <div>
                                <article class="post-card uk-card uk-card-default uk-card-hover">
                                    <?php if (has_post_thumbnail($related_post->ID)) : ?>
                                        <div class="uk-card-media-top">
                                            <?php echo get_the_post_thumbnail($related_post->ID, 'featured-medium', array(
                                                'class' => 'uk-width-1-1'
                                            )); ?>
                                        </div>
                                    <?php endif; ?>
                                    
                                    <div class="uk-card-body">
                                        <h3 class="uk-card-title uk-margin-remove-bottom">
                                            <a href="<?php echo esc_url(get_permalink($related_post->ID)); ?>" class="uk-link-reset">
                                                <?php echo esc_html($related_post->post_title); ?>
                                            </a>
                                        </h3>
                                        
                                        <div class="post-meta uk-text-meta uk-margin-small-top">
                                            <time datetime="<?php echo esc_attr(get_the_date('c', $related_post->ID)); ?>">
                                                <?php echo esc_html(get_the_date('F j, Y', $related_post->ID)); ?>
                                            </time>
                                        </div>
                                        
                                        <?php if ($related_post->post_excerpt) : ?>
                                            <div class="post-excerpt uk-margin-small-top">
                                                <?php echo wp_kses_post($related_post->post_excerpt); ?>
                                            </div>
                                        <?php endif; ?>
                                        
                                        <div class="uk-margin-small-top">
                                            <a href="<?php echo esc_url(get_permalink($related_post->ID)); ?>" 
                                               class="uk-button uk-button-text">
                                                <?php esc_html_e('Read More', 'iesd-main'); ?>
                                                <span uk-icon="arrow-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </section>
            <?php endif;
            wp_reset_postdata();
        }
        ?>
        
        <?php
        // If comments are open or we have at least one comment, load up the comment template.
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;
        ?>
        
    <?php endwhile; ?>
</div>

<?php get_footer(); ?> 
