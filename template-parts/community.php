<?php
$community = get_field('community_images', 'option');

function render_community($arr) {
    foreach ($arr as $index => $image) {
        $imageCard = esc_url($image['sizes']['large']);
        $imageModal = esc_url($image['url']);
        $alt = esc_attr($image['alt']); 

        echo <<<COMMUNITY
        <li>
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <div uk-toggle="target: #community-$index">
                        <img 
                            class="uk-width-1-1" 
                            src="$imageCard" 
                            alt="$alt"
                        />
                    </div>
                </div>
 
                <div id="community-$index" uk-modal>
                    <div class="community-dialog-box uk-modal-dialog uk-modal-body image-modal">
                        <span class="uk-modal-close uk-icon">close</span>
                        <img src="$imageModal" alt="$alt" />
                    </div>
                </div>
            </div>
        </li>
        COMMUNITY;
    }
}
?>

<div id="community-container" class="container-full" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/desktop/iesd-bg-light.jpg');">
    <div id="community" class="uk-container">
        <p class="memberlist-header heading">Community</p>
        
        <div uk-slider class="uk-slider uk-slider-container">
            <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@m uk-grid">
                <?php render_community($community); ?> 
            </ul>
             
            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
    </div>
</div>