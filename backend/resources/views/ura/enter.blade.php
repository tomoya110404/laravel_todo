@extends('app')
@section('styles')
@include('share.flatpickr.styles')
@endsection

<a class="yokuzo" href="{{ route('ura.enter2')}}">しかしここから先は…</a>

   
@section('scripts')
@include('share.flatpickr.scripts')
@endsection