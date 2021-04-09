@extends('app')
@section('styles')
 @include('share.flatpickr.styles')
@endsection
<div class="kokomade">
  <a class="yokuzo" href="{{ route('ura.enter')}}">よくぞここまでたどり着いた…</a>
</div>
    
@section('scripts')
 @include('share.flatpickr.scripts')
@endsection