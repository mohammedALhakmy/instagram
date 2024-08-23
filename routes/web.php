<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserControllController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/User', function () {
    return Inertia::render('User');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/',[HomeController::class,'index'])->name('home.index');

    Route::get('/users/{id}/show',[UserControllController::class,'show'])->name('users.show');
    Route::post('/users',[UserControllController::class,'update'])->name('home.update');

    Route::post('/posts',[PostController::class,'store'])->name('posts.store');
    Route::delete('/posts/{id}',[PostController::class,'destroy'])->name('posts.destroy');

    Route::post('/comments',[CommentController::class,'store'])->name('comments.store');
    Route::delete('/comments/{id}',[CommentController::class,'destroy'])->name('comments.destroy');

    Route::post('/likes',[LikeController::class,'store'])->name('likes.store');
    Route::delete('/likes/{id}',[LikeController::class,'destroy'])->name('likes.destroy');




//    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});
//php artisan make:model -mc --resource
require __DIR__.'/auth.php';


