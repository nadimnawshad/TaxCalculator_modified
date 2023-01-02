<?php
include('../model/db.php');
session_start();
$error="";
if (isset($_POST['SignUp'])) {
    $firstName=$_REQUEST['firstName'];
    $sureName=$_REQUEST['sureName'];
    $name=$firstName." ".$sureName;
    $email=$_REQUEST['user_email'];
    $phone_number=strval($_REQUEST['phone']);
    $password=$_REQUEST['user_password'];
    $gender=$_REQUEST['gender'];
    $address=$_REQUEST['address'];

    $connection = new db();
    $conobj=$connection->OpenCon();

    $userQuery=$connection->InsertUser($conobj,"user_bio",$name,$firstName,$sureName,$email,$phone_number,$password,$gender,$address);

    if ($userQuery) {
        echo "<script>alert('SignUp Successfull')</script>";
        echo "<script>window.open('../view/Login.php','_self')</script>";
    }
    else {
        echo "<script>alert('Something went wrong. May try changing your email or phone number. Please try again.')</script>";
        echo "<script>window.open('../view/SignUp.php','_self')</script>";
    }

    $connection->CloseCon($conobj);
}
   