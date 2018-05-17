@extends('layouts.app')

@section('content')

  <!-- ABOUT ME -->
  
  @php( query_posts( 'pagename=about-me-abridged'))
  @include('partials.about-me-abridged')

  <!-- ARTICLES -->
 
  @php( query_posts( 'category_name=articles&posts_per_page=3'))

  <header class="section-header">
    <h1>articles</h1>
    <a href="/category/articles">See all</a>
  </header>

  <section class="tiles">
    @include('partials.tiles')
  </section>

  <!-- PORTFOLIO -->

  @php( query_posts( 'category_name=portfolio&posts_per_page=3'))

  <header class="section-header">
    <h1>portfolio</h1>
    <a href="/category/portfolio">See all</a>
  </header>

  <section class="tiles">
    @include('partials.tiles')
  </section>

@endsection
