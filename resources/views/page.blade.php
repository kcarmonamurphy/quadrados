@extends('layouts.app')

@section('content')

	@php(the_post())

    @include('partials.page-header')
    @include('partials.content-page')

@endsection
