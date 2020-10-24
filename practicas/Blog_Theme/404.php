<?php get_header(); ?>

<div class="container">
	<div class="row">
		<section class="main col-md-8">
			<section class="row single-post">
				<article class="col-sm-12 post">
					<div class="contenedor">
						<div class="info">
							<h2 class="titulo">Error 404</h2>
							<div class="texto">
								La página que buscas no se encuentra, por favor verifica que la URL sea correcta.
								<br>
								<a href="<?php bloginfo('url'); ?>">Regresar al Inicio</a>
							</div>
						</div>
					</div>
				</article>
			</section>
		
			<section class="row paginacion">
				<div class="col-md-12">
					<div class="pagination"><?php wp_pagenavi(); ?></div>
				</div>
			</section>
		</section>

		<?php get_sidebar(); ?>
	</div>
</div>

<?php get_footer(); ?>