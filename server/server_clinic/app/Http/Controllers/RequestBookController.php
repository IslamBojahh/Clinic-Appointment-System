<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\RequestBook ;

class RequestBookController extends Controller
{
    public function index()
    {
        return RequestBook::all();
    }
    public function create(){

    }

    public function store(Request $request)
    {
        return RequestBook::create($request->all());
    }

    public function edit(Request $request, $id)
    {
        $task= RequestBook::findOrFail($id);
        $task->update($request->all());

        return $task;
    }
    public function delete(Request $request, $id)
    {
        $task= RequestBook::findOrFail($id);
        $task->delete();

        return 204;
    }


}
