<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Another;

class AnotherController extends Controller
{
    //
    public function index() 
    {
      $articles = Another::all()->sortByDesc('created_at');
      return view('another.index', compact('articles'));
    }
}
