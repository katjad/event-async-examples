<?php

header("Content-type: application/json");

$city = $_REQUEST["city"];

if ($city == "Melbourne") {
	$fileName = "melbourne.json";
} else if ($city == "London") {
	$fileName = "london.json";
}
if ($city == "New York") {
	$fileName = "new_york.json";
}

$filePointer = fopen($fileName, "r");
$jsonData    = fread($filePointer, filesize($fileName));
fclose($filePointer);

print($jsonData);

return true;

?>