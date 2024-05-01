<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Apply the 'Cors' middleware to the 'api/Register' route
Route::middleware('Cors')->post('/api/Register', [AuthController::class, 'register']);

// Define other routes...
Route::get('/', function () {
    return view('welcome');
});
