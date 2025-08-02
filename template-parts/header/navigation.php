<nav class="uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar="">
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active">
                <a class="uk-logo" href="<?php echo get_site_url("/"); ?>"><img id="nav-logo" src="<?php echo get_template_directory_uri(); ?>/assets/logos/iesd-initials-white.svg" /></a>
            </li>
        </ul>
    </div>
    <div class="uk-navbar-right">
        <ul class="uk-navbar-nav uk-visible@m">
            <li class="close-canvas">
                <a uk-icon="plus" href="#" class="uk-icon" aria-expanded="false">
                    Organization
                </a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#about">About Us</a></li>
                        <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#mission">Mission</a></li>
                        <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#goals">Goals</a></li>
                        <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#community">Community</a></li>
                    </ul>
                </div>
            </li>
            <li class="close-canvas">
                <a uk-icon="plus" href="#" class="uk-icon" aria-expanded="false">
                    Information
                </a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>mentorship">Mentorships</a></li>
                        <li class="close-canvas"><a target="_blank" href="https://www.meetup.com/iesd-meetup/events/">Events</a></li>
                        <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>volunteer">Volunteering</a></li>
                        <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#operations">Operations</a></li>
                        <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#speakers">Past Speakers</a></li>
                        <li class="close-canvas"><a target="_blank" href="<?php echo get_site_url("/"); ?>forms/speak">Sign up to Speak</a></li>
                    </ul>
                </div>
            </li>
            <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#sponsors">Sponsors</a></li>
            <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#blog">Newsroom</a></li>
            <li class="close-canvas"><a target="_blank" href="https://www.meetup.com/iesd-meetup/">Join</a></li>
        </ul>
        <a id="nav-toggle" class="uk-navbar-toggle uk-hidden@m" href="#" uk-toggle="target: #offcanvas-nav">
            <span uk-navbar-toggle-icon="true" class="uk-icon uk-navbar-toggle-icon"> 
            </span>
        </a>
    </div>
</nav>
<div id="offcanvas-nav" uk-offcanvas="mode: push; flip: true" class="uk-offcanvas">
    <div class="uk-offcanvas-bar">
        <div class="nav-logo"><img id="canvas-logo" src="<?php echo get_template_directory_uri(); ?>/assets/logos/iesd-initials-white.svg" /></div>
        <ul class="uk-nav uk-nav-default">
            <li class="uk-parent uk-visible-toggle">
                <a uk-icon="plus" href="#" class="uk-icon">
                    Organization
                </a>
                <ul class="uk-nav-sub uk-invisible-hover">
                    <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#about">About Us</a></li>
                    <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#mission">Mission</a></li>
                    <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#goals">Goals</a></li>
                    <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#community">Community</a></li>
                </ul>
            </li>
            <li class="uk-parent uk-visible-toggle">
                <a uk-icon="plus" href="#" class="uk-icon">
                    Information
                </a>
                <ul class="uk-nav-sub uk-invisible-hover">
                    <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>mentorship">Mentorships</a></li>
                    <li class="close-canvas"><a target="_blank" href="https://www.meetup.com/iesd-meetup/events/">Events</a></li>
                    <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>volunteer">Volunteering</a></li>
                    <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#operations">Operations</a></li>
                    <li class="close-canvas"><a href="<?php echo get_site_url("/"); ?>#speakers">Past Speakers</a></li>
                    <li class="close-canvas"><a target="_blank" href="<?php echo get_site_url("/"); ?>forms/speak">Sign up to Speak</a></li>
                </ul>
            </li>
            <li class="close-canvas"><a uk-toggle="target: #offcanvas-nav" href="<?php echo get_site_url("/"); ?>#sponsors">Sponsors</a></li>
            <li class="close-canvas"><a uk-toggle="target: #offcanvas-nav" href="<?php echo get_site_url("/"); ?>#blog">Newsroom</a></li>
            <li class="close-canvas"><a target="_blank" uk-toggle="target: #offcanvas-nav" href="https://www.meetup.com/iesd-meetup/">Join</a></li>
        </ul>
    </div>
</div>
