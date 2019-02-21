<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/clinic','clinicsController@index');
Route::put('/clinic/{id}','clinicsController@edit');
Route::post('/clinic','clinicsController@store');
Route::delete('/clinic/{id}','clinicsController@delete');
Route::get('/RequestBook','RequestBookController@index');
Route::put('/RequestBook/{id}','RequestBookController@edit');
Route::post('/RequestBook','RequestBookController@store');
Route::delete('/RequestBook/{id}','RequestBookController@delete');