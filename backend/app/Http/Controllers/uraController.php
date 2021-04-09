<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class uraController extends Controller
{
    //
    public function index() {
        return view('ura.index');
    }

    public function enter() {
        return view('ura.enter');
    }

    public function enter2() {
        return view('ura.enter2');
    }
}
