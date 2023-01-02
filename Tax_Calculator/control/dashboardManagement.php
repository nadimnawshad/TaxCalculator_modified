<?php
include('../model/db.php');
session_start();

$month = strval(date("M-Y"));
$day = strval(date("d-M-Y"));
$notification = 0;
// $connection = new db();
// $conobj= $connection->OpenCon();
// $email= $connection->CheckUserEmail($conobj,"user_bio",$_SESSION["userId"]);
// $name= $connection->CheckUserName($conobj,"user_bio",$email);
// $notification_query = $connection->getNotificationById($conobj,"notification",$_SESSION["userId"]);
// $numberOfNotification = $connection->CheckNumberOfNotification($conobj,"notification",$_SESSION["userId"]);

// $connection->CloseCon($conobj);

?>