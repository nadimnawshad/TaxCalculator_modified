<?php
class db{
 
function OpenCon() {
$dbhost = "localhost:3310";
$dbuser = "root";
$dbpass = "";
$db = "hhgg";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
return $conn;
}

function NODEMCUConnection(){
    define('POST_DATA_URL', 'http://localhost:8080/HHGG/model/sensordataInput.php');
    define('PROJECT_API_KEY', 'hhgg');
    date_default_timezone_set('Asia/Dhaka');
}


function NODEMCUConnection_two(){
    define('POST_DATA_URL', 'http://localhost:8080/HHGG/model/sensordataInput_two.php');
    define('PROJECT_API_KEY', 'hhgg_two');
    date_default_timezone_set('Asia/Dhaka');
}
//***************** Return **************************


function numberOfRows($query){
    if ($query->num_rows > 0){
        return TRUE;
    }
    else{
        return FALSE;
    }

}

function queryExecution($query){
    if ($query === TRUE){
        return TRUE;
    }
    else{
        return FALSE;
    }
}


//***************** Get Information Queries *************************************

function getInfoByEmail($conn,$table,$email){
    $sql = $conn->query("SELECT * FROM ".$table." WHERE email='". $email."'");
    return $sql;
}

function getInfoById($conn,$table,$id){
    $sql = $conn->query("SELECT * FROM ". $table." WHERE id='". $id."'");
    return $sql;
}

function getInfoByEmailPassword($conn,$table,$email,$password) {
    $result = $conn->query("SELECT * FROM ". $table." WHERE email='". $email."' AND password='". $password."'");
    return $result;
}


function getInfoByPlantName($conn,$table,$plant_name){
    $result = $conn->query("SELECT * FROM ". $table." WHERE plant_name='". $plant_name."'");
    return $result;

}
function getAllNotification($conn,$table,$id){
    $result = $conn->query("SELECT * FROM ". $table." WHERE id='". $id."' ORDER by time DESC");
    return $result;
}

function getSensorData($conn,$table,$id){
    $result = $conn->query("SELECT * FROM ". $table." WHERE id='". $id."' ORDER by data_time DESC LIMIT 1");
    return $result;
}
function getNotificationById($conn,$table,$id){
    $result = $conn->query("SELECT * FROM ". $table." WHERE id='". $id."' AND status= 'unseen' ORDER by time DESC");
    return $result;
}

function getIdByWifiName($conn,$table,$wifi_name){
    $result = $conn->query("SELECT * FROM ". $table." WHERE wifi_name='". $wifi_name."'");
    return $result;
}

//***************** Insert **********************************

function InsertLogInfo($conn,$table,$id,$email,$password){
    $query = $conn->query("INSERT INTO $table (id,  email,   password) VALUES ('$id','$email','$password')");
    return $this->queryExecution($query);
}


function InsertUser($conn,$table,$name,$firstName,$sureName,$email,$phone_number,$password,$address) {
    $query = $this->getInfoByEmail($conn,$table,$email);
    $query_two = $this->numberOfRows($query);
    if (!$query_two) {
        $sql = $conn->query("INSERT INTO $table (name, first_name, sure_name, email, phone, address ) VALUES ('$name','$firstName','$sureName','$email','$phone_number','$address')");
        if ($sql === TRUE){
            $result= TRUE; 
            $user_info = $this->getInfoByEmail($conn,$table,$email);
            while($row = $user_info->fetch_assoc()){
                $id = $row["id"];
            }
            $result = $this->InsertLogInfo($conn,"user_login",$id,$email,$password);
            //$result = $this->InsertMessInfo($conn,"mess_info",$name,$email);                
        } 
        else {
            $result= FALSE ;
        }   
    }
    else{
        $result= FALSE ;
    }
    return $result ;
}

function InsertUserPlant($conn,$table,$id,$plant_id,$plant_name){
    $query = $conn->query("INSERT INTO $table (id, plant_id, plant_name) 
                            VALUES ($id, $plant_id, '$plant_name')");
    return $this->queryExecution($query);
}
function InsertPlantHistory($conn,$table,$id,$plant_id,$plant_name,$date){
    $query = $conn->query("INSERT INTO $table (id, plant_id, plant_name,planting_date) 
                            VALUES ($id, $plant_id, '$plant_name', '$date')");
    return $this->queryExecution($query);
}


function InsertPlantNotification($conn,$table,$id,$notifications){
    $query = $conn->query("INSERT INTO $table (id, notifications) 
                            VALUES ($id, '$notifications')");
    return $this->queryExecution($query);
}


function InsertPlantDiseaseHistory($conn,$table,$id,$disease_name,$disease_date){
    $query = $conn->query("INSERT INTO $table (id, disease_name, disease_date) 
                            VALUES ($id, '$disease_name', '$disease_date')");
    return $this->queryExecution($query);
}

function InsertSensordata($conn,$table,$id,$temperature,$humidity,$water_level,$date){
    $plant_name="";  
    $day_max_temp =0.0;
    $day_min_temp =0.0;
    $night_max_temp =0.0;
    $night_min_temp =0.0;
    $max_humidity =0.0;
    $min_humidity =0.0;
    $query = $this->getInfoById($conn,'user_current_plant',$id);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           $plant_name =  $row["plant_name"];
        }
    }
    
    $query_two = $this->getInfoByPlantName($conn,'plant_description',$plant_name);
    $sql_two = $this->numberOfRows($query_two);
    if ($sql_two) {
        while($row = $query_two->fetch_assoc()) {
           $day_max_temp =  $row["day_max_temp"];
           $day_min_temp =  $row["day_min_temp"];
           $night_max_temp =  $row["night_max_temp"];
           $night_min_temp =  $row["night_min_temp"];
           $max_humidity =  $row["max_humidity"];
           $min_humidity =  $row["min_humidity"];
        }
    }

    if ((date('H') > 6) && (date('H') < 18)){
        if($temperature > $day_max_temp) {
            $message = "Temperature is high. Please trun on fan. ";
        $query = $this->InsertPlantNotification($conn,'notification', $id, $message );
        }
        else if($temperature < $day_min_temp){
            $message = "Temperature is low. Please trun on hitter. ";
            $query = $this->InsertPlantNotification($conn,'notification', $id, $message );
        }
    }
    else if ((date('H') < 6) || (date('H') > 18)){
        if($temperature > $night_max_temp) {
            $message = "Temperature is high. Please trun on fan. ";
            $query = $this->InsertPlantNotification($conn,'notification', $id, $message );
        }
        else if($temperature < $night_min_temp){
            $message = "Temperature is low. Please trun on hitter. ";
            $query = $this->InsertPlantNotification($conn,'notification', $id, $message );
        }
    }
    if($humidity > $max_humidity) {
        $message = "Humidity is high. Please trun on exhaust fan. ";
            $query = $this->InsertPlantNotification($conn,'notification', $id, $message ); 
    }
    else if($humidity < $min_humidity){
        $message = "Humidity is low. Please trun on sprinkle. ";
            $query = $this->InsertPlantNotification($conn,'notification', $id, $message ); 
    }
    if($water_level == "HIGH"){
        $message = "Water Level is high. Release some water. ";
            $query = $this->InsertPlantNotification($conn,'notification', $id, $message ); 
    }
    else if($water_level == "LOW"){
        $message = "Water Level is low. Add some water. "; 
            $query = $this->InsertPlantNotification($conn,'notification', $id, $message );
    }
    
    $query = $conn->query("INSERT INTO $table (id, temperature, humidity, water_level, data_time) VALUES ('$id', '$temperature', '$humidity', '$water_level', '$date');");
    return $this->queryExecution($query);
}


function InsertSensordata_two($conn,$table,$id,$ph,$date){
    $plant_name="";  
    $max_ph=0.0;
    $min_ph=0.0; 
    $query = $this->getInfoById($conn,'user_current_plant',$id);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           $plant_name =  $row["plant_name"];
        }
    }
    
    $query_two = $this->getInfoByPlantName($conn,'plant_description',$plant_name);
    $sql_two = $this->numberOfRows($query_two);
    if ($sql_two) {
        while($row = $query_two->fetch_assoc()) {
           $max_ph =  $row["max_ph"];
           $min_ph =  $row["min_ph"];
        }
    }
    if($ph > $max_ph) {
        $message = "PH is high. Add some phosphoric acid or vinegar. ";
        $query = $this->InsertPlantNotification($conn,'notification', $id, $message ); 
    }
    else if ($ph < $min_ph){
        $message = "PH is low. Add some phosphoric acid or vinegar. ";
        $query = $this->InsertPlantNotification($conn,'notification', $id, $message ); 
    }
  
    
    $query = $conn->query("INSERT INTO $table (id, ph, data_time) VALUES ('$id', '$ph', '$date');");
    return $this->queryExecution($query);
}




//***************** Get Data's Row **************************************

function CheckUserEmail($conn,$table,$id) {
    $query = $this->getInfoById($conn,$table,$id);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           return $row["email"];
        }
    }
}


function CheckUserName($conn,$table,$email) {
    $query = $this->getInfoByEmail($conn,$table,$email);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           return $row["name"];
        }
    }
}


function CheckType($conn,$table,$email){
    $query = $this->getInfoByEmail($conn,$table,$email);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           return $row["validity"];
        }
    }    
}

function CheckPlantId($conn,$table,$plant_name){
    $query = $this->getInfoByPlantName($conn,$table,$plant_name);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           return $row["plant_id"];
        }
    }    
}


function CheckPlantName($conn,$table,$id){
    $query = $this->getInfoById($conn,$table,$id);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           return $row["plant_name"];
        }
    }    
}

function CheckNumberOfNotification($conn,$table,$id) {
    $query = $this->getNotificationById($conn,$table,$id);
    $sql = $this->numberOfRows($query);
    $count = 0;
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           $count = $count+1;
        }
    }
    return $count;
}

function CheckTemp($conn,$table,$id){
    $query = $this->getSensorData($conn,$table,$id);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           return $row["temperature"];
        }
    }    
}


function CheckHumidity($conn,$table,$id){
    $query = $this->getSensorData($conn,$table,$id);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           return $row["humidity"];
        }
    }    
}


function CheckWaterLevel($conn,$table,$id){
    $query = $this->getSensorData($conn,$table,$id);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           return $row["water_level"];
        }
    }    
}


function CheckPh($conn,$table,$id){
    $query = $this->getSensorData($conn,$table,$id);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           return $row["ph"];
        }
    }    
}

function checkId($conn,$table,$ssid){
    $query = $this->getIdByWifiName($conn,$table,$ssid);
    $sql = $this->numberOfRows($query);
    if ($sql) {
        while($row = $query->fetch_assoc()) {
           return $row["id"];
        }
    }    
}

//************************** Update ****************************************

function UpdatePlantDetails($conn,$table,$id,$plant_name) {
    $update = FALSE;
    $plant_id = $this->CheckPlantId($conn,"plant_info",$plant_name);
    $checkExisting_user = $this->getInfoById($conn,$table,$id);
    $result = $this->numberOfRows($checkExisting_user);
    if($result){
        $query = $conn->query("UPDATE $table SET plant_name= '$plant_name', plant_id= $plant_id WHERE id='". $id."'");
        $update =  $this->queryExecution($query);
    }
    else{
        $update =  $this->InsertUserPlant($conn,$table,$id,$plant_id,$plant_name);
    }
    $date = strval(date("d-M-Y"));
    $this->InsertPlantHistory($conn,"user_plant_history",$id,$plant_id,$plant_name,$date);
    return $update;
}

function UpdateNotificationStatus($conn,$table,$id,$notification_name,$time){
    $conn->query("UPDATE $table SET status= 'seen' WHERE id=  $id AND notifications= '". $notification_name."' AND time ='". $time."'");
}


//************************* Show ******************************************

function ShowAllPlant($conn,$table){
    $result = $conn->query("SELECT * FROM $table");
    return $result;
}

function checkPerStatusEmail($conn,$table,$status){
    $result = $conn->query("SELECT * FROM ". $table." WHERE validity='". $status."'");
    return $result;
}


function CheckValidity($conn,$table,$email){
    $result = $conn->query("SELECT * FROM ". $table." WHERE email='". $email."'");
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
           return $row["validity"];
        }
    }   
}



function CloseCon($conn)
{
    $conn -> close();
}


}
?>