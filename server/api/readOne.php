<?php
// Check Request Method
if ($_SERVER['REQUEST_METHOD'] != 'GET') {
    header('Allow: GET');
    http_response_code(405);
    echo json_encode('Method Not Allowed');
    return;
}
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');

include_once '../db/Database.php';
include_once '../models/Bookmarks.php';

// Instantiate a Database object & connect
$database = new Database();
$dbConnection = $database->connect();

// Instantiate Bookmarks object
$bookmarks = new Bookmarks($dbConnection);

if(!isset($_GET['id'])){
    http_response_code(422);
    echo json_encode(
        array('message' => 'Error: Missing required query parameter id')
    );
    return;
}
$bookmarks->setId($_GET['id']);
if($bookmarks->readOne()) {
    $result = array(
        'id' => $bookmarks->getId(),
        'title' => $bookmarks->getTitle(),
        'link' => $bookmarks->getLink(),
        'dateAdded' => $bookmarks->getDateAdded()
    );
    echo json_encode($result);
}
else {
    http_response_code(404);
    echo json_encode(
        array('message' => 'Error: No such bookmark item')
    );
}