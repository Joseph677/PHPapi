<?php
// Check Request Method
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header('Allow: POST');
    http_response_code(405);
    echo json_encode('Method Not Allowed');
    return;
}
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

include_once '../db/Database.php';
include_once '../models/Bookmarks.php';

// Instantiate a Database object & connect
$database = new Database();
$dbConnection = $database->connect();

// Instantiate Bookmarks object
$bookmarks = new Bookmarks($dbConnection);

// Get the HTTP POST request JSON body
$data = json_decode(file_get_contents("php://input"), true);
if(!$data || !isset($data['title']) || !isset($data['link'])){
    http_response_code(422);
    echo json_encode(
        array('message' => 'Error: Missing required parameter task in the JSON body.')
    );
    return;
}

$bookmarks->setTitle($data['title']);
$bookmarks->setLink($data['link']);

// Create ToDo
if ($bookmarks->create()) {
    echo json_encode(
        array('message' => 'A bookmarks item was created')
    );
} else {
    echo json_encode(
        array('message' => 'Error: a bookmarks item was not created')
    );
}

