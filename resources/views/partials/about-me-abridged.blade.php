@while (have_posts()) @php(the_post())
  <header class="section-header">
    <h1>about me</h1>
    <a href="/about-me">More info</a>
  </header>

  <section class="about-me">
    {{ the_content() }}
  </section>
@endwhile