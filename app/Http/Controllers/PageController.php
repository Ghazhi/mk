<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Index');
    }
    public function about()
    {
        return Inertia::render('About');
    }
    public function services()
    {
        return Inertia::render('Services');
    }
    public function portfolio()
    {
        return Inertia::render('Portfolio');
    }
    public function quote()
    {
        return Inertia::render('Quote');
    }
}

