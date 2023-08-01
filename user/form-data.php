<?php

// Create connection
$server = 'localhost';
$username = 'root';
$password = '';
$dbname = 'usersdata';

$conn = new mysqli($server, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: ".$conn->connect_error);
}

// Get form data
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$profession = $_POST['profession'];
$education = $_POST['education'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Prepare and bind data for insertion in our database
$stmt = $conn->prepare('INSERT INTO users (fname, lname, dob, gender, profession, education, email, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
$stmt->bind_param('sss', $fname, $lname, $dob, $gender, $profession, $education, $email, $phone);

// Execute the insert statement
if ($stmt->execute()) {
    echo "User data has been stored successfully.";
} else {
    echo "Error storing user data: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>