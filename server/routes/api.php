<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->group(function () {

    Route::get('/Dashboard', function (Request $request) {
        return $request->user();
    });
});

Route::post("/Register", [AuthController::class, 'register']);
Route::post("/Login", [AuthController::class, 'login']);
Route::post("/Logout", [AuthController::class, 'logout']);