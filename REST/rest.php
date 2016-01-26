<?php

// TODO: Require DB context or service call result for managing the data manipulation

function sendHeaders(){
	header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
	header('Content-Type: application/javascript');
	header('Access-Control-Allow-Origin: *');
}

function rest_get($request, $data){  
	$result = array('item1' => "item1value",
                     'item2' => "item2value",
                     'item3' => "item3value",
                     'item4' => "item4value",
                     'item5' => "item5value",
                     'item6' => "item6value",
                     'item7' => "item7value"
                    );
  echo json_encode($result);
}

function rest_post($request, $data) { echo json_encode("POST OK");}
function rest_delete($request) {echo json_encode("DELETE OK");}
function rest_put($request, $data) { echo json_encode("PUT OK");}
function rest_error($request) { echo json_encode("ERROR!");}

$method = $_SERVER['REQUEST_METHOD'];
$request = $_SERVER['REQUEST_URI'];

switch ($method) {
	case 'PUT':
		parse_str(file_get_contents('php://input'), $put_vars);
		sendHeaders();
		$data = $put_vars;
		rest_put($request, $data);
		break;
	case 'POST':
		sendHeaders();
		$data = $_POST;
		rest_post($request, $data);
		break;
	case 'GET':
		sendHeaders();
		$data = $_GET;
		rest_get($request, $data);
		break;
	case 'DELETE':
		sendHeaders();
		rest_delete($request);
		break;
	default:
		header("{$_SERVER['SERVER_PROTOCOL']} 404 Not Found");
		rest_error($request);
		break;
}

exit();
?>
