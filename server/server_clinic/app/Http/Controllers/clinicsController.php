<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\clinics ;

class clinicsController extends Controller
{
    public function index()
    {
        return clinics::all();
    }
    public function create(){

    }

    public function store(Request $request)
    {
        return clinics::create($request->all());
    }

    public function edit(Request $request, $id)
    {
        $task= clinics::findOrFail($id);
        $task->update($request->all());

        return $task;
    }
    public function delete(Request $request, $id)
    {
        $task= clinics::findOrFail($id);
        $task->delete();

        return 204;
    }


}
