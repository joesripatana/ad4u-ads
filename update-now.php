<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Method not allowed.'
    ]);
    exit;
}

$updateCode = $_SERVER['HTTP_X_AD4U_UPDATE_CODE'] ?? '';
$expectedCode = 'AD4U-UPDATE-2026';

if (!hash_equals($expectedCode, $updateCode)) {
    http_response_code(403);
    echo json_encode([
        'ok' => false,
        'message' => 'Update code is not correct.'
    ]);
    exit;
}

$repoPath = '/home/alphvctp/repositories/ad4u-ads';
$deployPath = '/home/alphvctp/ad4u.adttix.com';
$gitBinary = '/usr/local/cpanel/3rdparty/bin/git';

$commands = [
    "cd {$repoPath} && {$gitBinary} pull origin main",
    "/bin/mkdir -p {$deployPath}",
    "/bin/cp {$repoPath}/index.html {$deployPath}/index.html",
    "/bin/cp {$repoPath}/app.js {$deployPath}/app.js",
    "/bin/cp {$repoPath}/styles.css {$deployPath}/styles.css",
    "/bin/cp {$repoPath}/manifest.json {$deployPath}/manifest.json",
    "/bin/cp {$repoPath}/README.md {$deployPath}/README.md",
    "/bin/cp {$repoPath}/update-now.php {$deployPath}/update-now.php",
    "/bin/rm -rf {$deployPath}/assets",
    "/bin/mkdir -p {$deployPath}/assets",
    "/bin/cp -R {$repoPath}/assets/. {$deployPath}/assets/"
];

$output = [];
$failedCommand = null;

foreach ($commands as $command) {
    $commandOutput = [];
    $exitCode = 0;
    exec($command . ' 2>&1', $commandOutput, $exitCode);
    $output[] = [
        'command' => $command,
        'output' => $commandOutput,
        'exitCode' => $exitCode
    ];
    if ($exitCode !== 0) {
        $failedCommand = $command;
        break;
    }
}

if ($failedCommand) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Update failed on server. Check cPanel repo or cron command permissions.',
        'failedCommand' => $failedCommand,
        'details' => $output
    ]);
    exit;
}

echo json_encode([
    'ok' => true,
    'message' => 'Live site updated from Git successfully.',
    'details' => $output
]);
