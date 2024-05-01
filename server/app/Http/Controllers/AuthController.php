<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user' => 'required|string|regex:/^[A-Za-z]+ [A-Za-z\s]{2,40}$/',
            'email' => 'required|string|email|unique:users',
            'pwd' => 'required|string|min:8|max:24|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/',
            'course' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        // Create user
        $user = User::create([
            'name' => $request->input('user'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('pwd')),
            'course' => $request->input('course'),
        ]);

        return response()->json(['message' => 'Registration successful'], 200);
    }
}
