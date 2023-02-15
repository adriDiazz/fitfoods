<?php
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

