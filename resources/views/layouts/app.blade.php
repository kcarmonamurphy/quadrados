<!doctype html>
<html @php(language_attributes())>

  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,400i,700,700i&amp;subset=cyrillic" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet">
    
    @php(wp_head())
  </head>

  <body @php(body_class())>
    <!-- WP HEADER STUFF -->
    @php(do_action('get_header'))
    <!-- DONE WP HEADER -->

    <!-- mobile menu -->
    @include('partials.mobile-menu')
    <div class="wrap container" role="document">
      <aside class="sidebar">
        @include('partials.sidebar')
      </aside>
      <main class="main">
        @yield('content')
      </main>
    </div>

    <!-- WP FOOTER STUFF -->
    @php(do_action('get_footer'))
    @php(wp_footer())
    <!-- DONE WP FOOTER -->

  </body>
</html>
