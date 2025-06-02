<?php

/**
 * Template Name: Home
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Bootscore
 * @version 6.0.0
 */

// Exit if accessed directly
defined('ABSPATH') || exit;

get_header();
?>

  <div id="content" class="dmc-site-content dmc-page-home site-content">
    <div id="primary" class="content-area">

      <main id="main" class="site-main">

        <div class="dmc-hero">
            <div class="dmc-video-bg">
              <video autoplay muted loop id="myVideo">
                <source src="https://buildwithdmc.s3.ca-central-1.amazonaws.com/videos/home-video-1.mp4" type="video/mp4">
              </video>

              <div class="entry-content">
                <?php the_post(); ?>
                <?php the_content(); ?>
              </div>
            </div>
        </div>

        <div class="dmc-hpcn">
          <img src="https://buildwithdmc.s3.ca-central-1.amazonaws.com/marketing/dmc-hpcn-logo.png" alt />
          <h2>Proud member of the Home Performance Contractor Network</h2>
        </div>

        <div class="dmc-carousel">
          <?php echo do_shortcode('[foogallery id="269"]'); ?>
        </div>

      </main>

    </div>
  </div>

<?php
get_footer();