<section id="hero">
    <video class="uk-visible@m" autoplay muted loop id="iesd-video">
        <source src="<?php echo get_template_directory_uri(); ?>/assets/video/main/hero-main.mp4" type="video/mp4" />
    </video>

    <div class="uk-overlay-primary uk-position-cover"></div>

    <div class="container-full">
        <div class="uk-container">
            <section>
                <?php include 'navigation.php';?>
            </section>

            <div class="hero-event-container-false">
                <div class="uk-height-medium uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top">
                    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                        <h1 uk-parallax="opacity: 1,0; y: 20, 20; scale: 2,2" class="hero-event-false">IESD</h1>
                        <h6 uk-parallax="opacity: 1,0; y: 50, 50; scale: 2,2" class="hero-event-false-slogan">
                            Building Communities<br /> around Technology
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
