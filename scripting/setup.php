<?php
require_once __DIR__ . "/vendor/autoload.php";

$SERVER_ROOT = realpath(__DIR__ . "/../");

$dotenv = Dotenv\Dotenv::createImmutable($SERVER_ROOT, ".server.env");
$dotenv->load();
$dotenv->required([
  "DB_HOST", "DB_NAME", "DB_USER", "DB_PASSWORD",
]);

error_reporting(E_ALL & ~E_DEPRECATED);
