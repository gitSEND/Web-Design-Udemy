<footer>
	<div class="ad container hidden-xs">
		<div class="row">
			<div class="col-md-12">
				<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Header') ) : endif; ?>
			</div>
		</div>
	</div>
	
	<nav class="menu">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<?php wp_nav_menu(array(
                        'container' => false,
                        'menu_class' => '',
                        'items_wrap' => '<ul class="col-md-12">%3$s</ul>',
                        'theme_location' => 'menu-footer'
					 ));    ?>
				</div>
			</div>
		</div>
	</nav>
	
	<div class="copyright">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<p>Sitio creado por Carlos Arturo - FalconMasters</p>
				</div>
			</div>
		</div>
	</div>

	<?php wp_footer(); ?>
</footer>

</body>
</html>