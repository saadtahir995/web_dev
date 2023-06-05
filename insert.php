<?php

$name=$_POST['stdname'];
$email=$_POST['stdemail'];
$age=$_POST['stdage'];
echo " Name : ".$name."</br>";
echo " Email : ".$email."</br>";
echo " Age : ".$age."</br>";


$conn = new mysqli("localhost","root","","wad2");
$q="insert into std_info2(std_name, std_email, std_age) VALUES ('".$name."','".$email."','".$age."')";
$conn->query($q);

?>