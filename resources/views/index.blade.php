@extends('layouts.app')

@section('content')

  @php( query_posts( 'category_name=articles&posts_per_page=3'))

  <header class="section-header">
    <h1>articles</h1>
    <a href="/category/articles">See all</a>
  </header>

  <div class="tiles">
    @include('partials.tiles')
  </div>

  @php( query_posts( 'category_name=portfolio&posts_per_page=3'))

  <header class="section-header">
    <h1>portfolio</h1>
    <a href="/category/portfolio">See all</a>
  </header>

  <div class="tiles">
    @include('partials.tiles')
  </div>

@endsection
