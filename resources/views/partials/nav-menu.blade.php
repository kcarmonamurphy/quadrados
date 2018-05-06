<div class="sidebar-section">
	<h4 class="description">portfolio &<br />curriculum vitae</h4>
</div>

<div class="sidebar-section">
	<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
	    <label>
	        <span class="screen-reader-text"><?php echo _x( 'Search for:', 'label' ) ?></span>
	        <input type="search" class="search-field"
	            placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder' ) ?>"
	            value="<?php echo get_search_query() ?>" name="s"
	            title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
	    </label>
	    <input type="submit" class="search-submit"
	        value="<?php echo esc_attr_x( '->', 'submit button' ) ?>" />
	</form>
</div>

@php( query_posts( 'category_name=articles&posts_per_page=3'))

<div class="sidebar-section">
	<a href="/category/articles"><h4><strong>articles</strong></h4></a>
    @while (have_posts()) @php(the_post())
  		<a href="{{ get_permalink() }}"><h4 class="truncate">{{ get_the_title() }}</h4></a>
	@endwhile
</div>

@php( query_posts( 'category_name=portfolio&posts_per_page=3'))

<div class="sidebar-section">
	<a href="/category/portfolio"><h4 ><strong>portfolio</strong></h4></a>
    @while (have_posts()) @php(the_post())
  		<a href="{{ get_permalink() }}"><h4 class="truncate">{{ get_the_title() }}</h4></a>
	@endwhile
</div>

<div class="sidebar-section">
	<a href="/my-blogs"><h4><strong>blogs</strong></h4></a>
	<a href="russia.kevincarmonamurphy.ca" target="_blank"><h4>russian blog</h4></a>
	<a href="wwoofing.kevincarmonamurphy.ca" target="_blank"><h4>wwoofing blog</h4></a>
</div>

<div class="sidebar-section">
	<a href="/cv"><h4><strong>resumé</strong></h4></a>
</div>

<div class="social-icons">
	<a href="https://www.facebook.com/kevcom2">
		<img src="@asset('images/icons8-facebook.png')">
	</a>
	<a href="https://stackexchange.com/users/10716557/kevin">
		<img src="@asset('images/icons8-stackoverflow.png')">
	</a>
	<a href="https://www.linkedin.com/in/kevincm/">
		<img src="@asset('images/icons8-linkedin.png')">
	</a>
	<a href="https://github.com/kevcom">
		<img src="@asset('images/icons8-github.png')">
	</a>
</div>