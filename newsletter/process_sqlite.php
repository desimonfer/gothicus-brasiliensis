<?php
// process_sqlite.php - Versão com SQLite

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$response = ['success' => false, 'message' => ''];

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    $response['message'] = 'Método não permitido';
    echo json_encode($response);
    exit;
}

// Obter dados
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$name = isset($_POST['name']) ? trim($_POST['name']) : '';

// Validações
if (empty($email)) {
    http_response_code(400);
    $response['message'] = 'Email é obrigatório';
    echo json_encode($response);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    $response['message'] = 'Email inválido';
    echo json_encode($response);
    exit;
}

try {
    // Conectar ao SQLite
    $db = new PDO('sqlite:emails.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Criar tabela se não existir
    $db->exec("
        CREATE TABLE IF NOT EXISTS subscribers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            name TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            ip_address TEXT,
            confirmed BOOLEAN DEFAULT 0
        )
    ");

    // Verificar se email já existe
    $stmt = $db->prepare("SELECT COUNT(*) FROM subscribers WHERE LOWER(email) = LOWER(?)");
    $stmt->execute([$email]);
    
    if ($stmt->fetchColumn() > 0) {
        http_response_code(409);
        $response['message'] = 'Este email já está cadastrado.';
        echo json_encode($response);
        exit;
    }

    // Inserir novo email
    $stmt = $db->prepare("
        INSERT INTO subscribers (email, name, ip_address) 
        VALUES (?, ?, ?)
    ");

    $stmt->execute([
        $email,
        !empty($name) ? $name : NULL,
        $_SERVER['REMOTE_ADDR'] ?? NULL
    ]);

    $response['success'] = true;
    $response['message'] = 'Email cadastrado com sucesso! 🎉';
    echo json_encode($response);

} catch (PDOException $e) {
    http_response_code(500);
    $response['message'] = 'Erro ao processar. Tente novamente.';
    // Em produção, não exiba o erro real
    if (getenv('DEBUG')) {
        $response['error'] = $e->getMessage();
    }
    echo json_encode($response);
}
?>
