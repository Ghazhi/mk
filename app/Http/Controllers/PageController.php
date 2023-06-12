<?php

namespace App\Http\Controllers;

use App\Models\CaseCategory;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    use ResponseTrait;

    public function index()
    {
        return Inertia::render('Website/Index');
    }
    public function about()
    {
        return Inertia::render('Website/About');
    }
    public function services()
    {
        return Inertia::render('Website/Services');
    }
    public function contact()
    {
        return Inertia::render('Website/Contact');
    }
    public function portfolio()
    {
        return Inertia::render('Website/Portfolio');
    }
    public function quote()
    {
        return Inertia::render('Website/Quote');
    }
    public function test()
    {
        return Inertia::render('Website/Test');
    }
  
}
