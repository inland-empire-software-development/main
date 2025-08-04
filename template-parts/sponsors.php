<?php
$sponsors = get_field('sponsors', 'option'); // repeater field

function render_sponsors($arr) {
    foreach ($arr as $index => $sponsor) {
        $url = esc_url($sponsor['sponsor_url']);
        $image = esc_url($sponsor['sponsor_logo']['sizes']['medium']);
        $alt = esc_attr($sponsor['sponsor_logo']['alt']);

        echo <<<SPONSOR
        <div class="uk-first-column">
            <a href="$url">
                <img src="$image" title="$alt" />
            </a>
        </div>
        SPONSOR;
    }
}
?>

<div class="container-full sponsor-background">
    <div id="sponsors" class="uk-container">
        <p class="heading">Our Sponsors</p>
        <p>Our work is made possible by the following sponsors</p>
        <div class="uk-grid-small uk-child-width-1-3@s uk-child-width-1-4@m uk-flex-center uk-grid" uk-grid="true">
            <?php render_sponsors($sponsors); ?>
        </div>
    </div>
</div>
