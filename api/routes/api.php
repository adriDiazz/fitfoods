<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/getmenu',  function (Request $request) {

    //get body request
    $body = $request->all();
    $calories = $body['calories'];

    $process = new Process(['/usr/bin/python3', '/Users/adriandiaz/Documents/GitHub/fitfoods/api/scrapper.py', $calories]);    
    $process->run();

    if (!$process->isSuccessful()) {
        throw new ProcessFailedException($process);
    }
    $data = $process->getOutput();
    echo ($data);
});



