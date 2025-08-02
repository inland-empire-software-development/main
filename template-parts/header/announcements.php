<?php
$announcement = get_field('announcement', 'option');
?>

<?php if ($announcement) : ?>
    <div id="announcement" class="container-full bg-yellow black">
        <section class="uk-container">
            <?php echo esc_html($announcement); ?>
        </section>
    </div>
<?php endif; ?>