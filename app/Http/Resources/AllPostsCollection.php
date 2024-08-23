<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class AllPostsCollection extends ResourceCollection
{
    public function toArray(Request $request): array
    {
        return $this->collection->map(function ($post) {
            return [
                'id' => $post->id,
                'text' => $post->text,
                'file' => $post->file,
                'created_at' => $post->created_at->format(' M d Y'),
                'comments' => $post->comments->map(function ($comment) {
                    return [
                        'id' => $comment->id,
                        'text' => $comment->text,
                        'user' => [
                            'id' => $comment->user->id,
                            'name' => $comment->user->name,
                            'file' => $comment->user->file,
                        ],
                    ];
                })->toArray(),
                'likes' => $post->likes->map(function ($like) {
                    return [
                        'id' => $like->id,
                        'user_id' => $like->user_id,
                        'post_id' => $like->post_id,
                    ];
                })->toArray(),
                'user' => [
                    'id' => $post->user->id,
                    'name' => $post->user->name,
                    'file' => $post->user->file,
                ]
            ];
        })->toArray();
    }
}
