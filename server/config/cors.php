<?php

return [
    'paths' => ['api/*'],
    'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    'allowed_origins' => ['http://localhost:5173'],
    'allowed_headers' => ['Content-Type', 'Accept', 'Authorization', 'X-CSRF-TOKEN'], // Separate headers with commas
    'supports_credentials' => true,
];



