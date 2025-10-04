<?php
// Connect to MySQL (replace credentials)
$conn = new mysqli('localhost', 'username', 'password', 'apolodb');
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Insert into table (create table first: CREATE TABLE consultations (id INT AUTO_INCREMENT PRIMARY KEY, patientName VARCHAR(255), ...);)
$stmt = $conn->prepare("INSERT INTO consultations (patientName, country, city, phone, age, dob, problem) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssiss", $data['patientName'], $data['country'], $data['city'], $data['phone'], $data['age'], $data['dob'], $data['problem']);
$stmt->execute();

echo json_encode(['success' => true]);
$stmt->close();
$conn->close();
?>