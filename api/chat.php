<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$apiKey = getenv('POLLINATIONS_API_KEY');
if (!$apiKey) {
    http_response_code(503);
    echo json_encode(['error' => 'AI service is not configured on the server']);
    exit;
}

$rawBody = file_get_contents('php://input');
if ($rawBody === false || strlen($rawBody) > 20000) {
    http_response_code(413);
    echo json_encode(['error' => 'Request is too large']);
    exit;
}

$request = json_decode($rawBody, true);
if (!is_array($request) || !isset($request['messages']) || !is_array($request['messages'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid chat request']);
    exit;
}

$messages = array_slice($request['messages'], -12);
$payload = json_encode([
    'model' => 'openai',
    'temperature' => 0.2,
    'max_tokens' => 180,
    'messages' => $messages,
], JSON_THROW_ON_ERROR);

$ch = curl_init('https://gen.pollinations.ai/v1/chat/completions');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
        'Accept: application/json',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 20,
]);
$response = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false || $curlError !== '') {
    http_response_code(502);
    echo json_encode(['error' => 'AI provider is unreachable']);
    exit;
}

http_response_code($status >= 200 && $status < 300 ? 200 : $status);
echo $response;