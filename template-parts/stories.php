<?php 
$stories = get_field('stories', 'option'); 

function render_stories($arr) { 
    foreach ($arr as $index => $story) {
        $get_post = get_post($story); 
        $image = get_the_post_thumbnail_url($get_post->ID, 'full');
        $name = $get_post->post_title;
        $content = $get_post->post_content;
        $excerpt = substr($content, 0, 200) . "...";
        $title = get_field('position_title', $get_post->ID);
        
        $linkedin = get_field('linkedin', $get_post->ID) ?? '';

        if ($linkedin) {
            $linkedin = '<a href="' . $linkedin . '" target="_blank"><span uk-icon="icon: linkedin; ratio: 1" class="uk-icon"></span></a>';
        }

        $github = get_field('github', $get_post->ID) ?? '';

        if ($github) {
            $github = '<a href="' . $github . '" target="_blank"><span uk-icon="icon: github; ratio: 1" class="uk-icon"></span></a>';
        } 

        echo <<<STORY
        <li>
            <div id="story" class="uk-container">
                <div class="story-background-overlay uk-overlay-primary uk-position-cover"></div>
                <div class="story-background" style="background-image: url($image);"></div>
                <img class="story-image" src="$image" />
                <div class="story-content uk-position-relative">
                    <p class="heading">Success Story</p>
                    <p class="story-header"><span class="name">$name</span><span class="red"> - </span><span class="title">$title</span></p>
                    <p class="story-social">
                        $linkedin
                        $github
                    </p>
                    <p class="story-text">$excerpt</p>
                    <a class="button bg-red white button-half border-red border-size-1 hvr-ripple-out uk-align-left" target="_self" uk-toggle="target: #story-modal-$index" href="#">Read Story</a>
                </div>
            </div>

            <div id="story-modal-$index" uk-modal>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">$name</h2>
                    <p><strong>$title</strong></p>
                    <p>$content</p>
                    <span class="uk-modal-close" uk-icon="icon: close; ratio: 2"></span>
                </div>
            </div>
        </li>
        STORY;
    }
}
?>

<div id="story-container" class="container-full bg-black uk-margin-medium-top">
    <div id="story-slider" uk-slider="true">
        <ul class="uk-slider-items uk-child-width-1-1@l">
            <?php render_stories($stories); ?>
        </ul> 
    </div>
</div>
