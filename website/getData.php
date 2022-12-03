<?php
//below line allows websites to access this script even if the script is running outside of the website's domain (security reasons)
header('Access-Control-Allow-Origin: *');
//mysql settings
$user = 'admin';
$pass = 'TaylorSwiftIsCool1989';
$db = 'insta';

//connection to the db
$db = new mysqli("database-1.cu0uoxlfpjr3.us-east-1.rds.amazonaws.com", $user, $pass, $db) or die("unable to connect");
//remember the "?q"+value from the index.js? value is saved as $q here
//query you wish to perform on db
//$sql = "SELECT url FROM insta";
$sql = "SELECT url FROM insta LIMIT 6";
//echo "<script>console.log('Console: " . $sql . "' );</script>";
//run the query
$result = $db->query($sql);

//save all results from query to $row
$row = $result -> fetch_all(MYSQLI_NUM);
//send the $row back to javascript as a json file. Remember "this.responseText". That's this. Sending data back to javascript as json is not necessary 100% >
//I did it in this case because the information I am sending back is an array.
echo json_encode($row);
//close db
$db->close();
?>
