<?php
$speakers = get_field('speakers', 'option');

function render_speakers($arr){
	foreach ($arr as $speaker) {
		$name = esc_attr($speaker['speaker_name']);
		$title = esc_attr($speaker['speaker_title']);
		$image = esc_url($speaker['speaker_image']['sizes']['medium']);
		$alt = esc_attr($speaker['speaker_image']['alt']);

		echo <<<SPEAKER
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img uk-image="true" src="$image" alt="$alt" />
                    </div>
                    <div class="uk-card-body">
                        <p class="uk-card-title">$name</p>
                        <p class="uk-card-small">$title</p>
                    </div>
                </div>
            </li>
        SPEAKER;
	}
}

if ($speakers) { ?>
	<div id="speakers" class="uk-margin-medium-bottom">
		<div class="container-full memberList-container">
			<div class="uk-container">
				<p class="memberlist-header heading">Past Speakers</p>
				<div uk-slider="true" class="uk-slider uk-slider-container">
					<ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-grid">
	                    <?php render_speakers($speakers); ?>
					</ul>
					<ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
				</div>
			</div>
		</div>
	</div>
<?php } ?>
