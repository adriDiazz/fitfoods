<?php

use Illuminate\Support\Facades\Route;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

function PythonScript()
{
    $process = new Process("/usr/bin/python3 /Users/adriandiaz/Documents/GitHub/fitfoods/api/scrapper.py 2000");
    $process->run();
    
    if (!$process->isSuccessful()) {
        throw new ProcessFailedException($process);
    }
    $data = $process->getOutput();
    dd($data);
}

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['middleware' => ['cors']], function () {
    Route::get('/',  function () {
    
    $process = new Process(['/usr/bin/python3', '/Users/adriandiaz/Documents/GitHub/fitfoods/api/scrapper.py', 2000]);    
    $process->run();
    
    if (!$process->isSuccessful()) {
        throw new ProcessFailedException($process);
    }
    $data = $process->getOutput();
    dd($data);
});

});

