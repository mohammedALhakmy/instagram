<?php

namespace App\Http\Controllers;

use App\Http\Resources\AllPostsCollection;
use App\Models\Post;
use App\Models\User;
use App\Models\UserControll;
use App\Services\FileService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserControllController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);
        if ($user === null){
            return redirect()->route('home.index');
        }
        $posts = Post::where('user_id',$id)->orderBy('created_at','DESC')->get();
        return Inertia::render('User',[
           'user'  => $user,
            'postsByUser' => new AllPostsCollection($posts),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserControll $userControll)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $request->validate(['file'=>'required|mimes:jpg,jpeg,png']);
        $user = (new FileService)->updateFile(auth()->user(),$request,'user');
        $user->save();
        return redirect()->route('users.show',['id'=>auth()->user()->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserControll $userControll)
    {
        //
    }
}
