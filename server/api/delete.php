<?php
// Check Request Method
if ($_SERVER['REQUEST_METHOD'] != 'DELETE') {
    header('Allow: DELETE');
    http_response_code(405);
    echo json_encode('Method Not Allowed');
    return;
}
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');

include_once '../db/Database.php';
include_once '../models/Bookmarks.php';

// Instantiate a Database object & connect
$database = new Database();
$dbConnection = $database->connect();

// Instantiate Bookmarks object
$bookmarks = new Bookmarks($dbConnection);

$data = json_decode(file_get_contents('php://input'));

if(!$data || !$data->id) {
    http_response_code(422);
    echo json_encode(
        array('message' => 'Error: missing required parameters id in the JSON body')
    );
    return;
}
$bookmarks->setId($data->id);
if($bookmarks->delete()){
    echo json_encode(
        array('message', 'A bookmark was deleted')
    );
}
else {
    echo json_encode(
        array('message', 'A bookmark was not deleted')
    );
}