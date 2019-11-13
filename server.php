<?php
$op = $_GET["op"];
    switch ($op) {
        case 'create':
            echo fnCreate();    
            break;
        case 'read':
            echo fnRead();    
            break;
         case 'update':
            echo fnUpdate();    
            break;
         case 'delete':
            echo fnDelete();    
            break;
        default:
            break;
    }
    function fnCreate(){
        $aid = $_GET["id"];
        $name = $_GET["name"];
        $email = $_GET["email"];
        $cpf = $_GET["cpf"];
        $passwd = $_GET["passwd"];
        if ($name != ""  && $email != "" && $id != "" && $email != "" && $cpf != ""){
            $connection = connet();
            $sql = "INSERT INTO CLIENT (AID, NAME, EMAIL, CPF, PASSWD) VALUES ('$aid','$name', '$email','$cpf', '$passwd')";
            $result = mysqli_query($connection, $sql);
            $idNew = mysqli_insert_id($connection);
            disconnect($connection);
        }
        return  ($result == true ?  "{\"id\":\"".$idNew."\",\"name\":\"".$name."\", \"email\":\"".$email."\",\"cpf\":\"".$cpf."\",\"passwd\":\"".$passwd."\"}" : "{\"result\":\"false\"}");
    }
    /**
     * Loads data from the data base
     */
    function fnRead(){
        $connection = connet();
        $sql = "SELECT * FROM CLIENT";
        $result = mysqli_query($connection, $sql);
        $json = generateJson($result);
        disconnect($connection);
        return $json;
    }
    function fnUpdate(){
        $id = $_GET["id"];
        $name = $_GET["name"];
        $email = $_GET["email"];
        $cpf = $_GET["cpf"];
        $passwd = $_GET["passwd"];
        if ($name != ""  && $email != "" && $id != "" && $passwd != "" && $cpf != ""){
            $connection = connet();
            $sql = "UPDATE CLIENT SET NAME='$name', EMAIL='$email', CPF='$cpf', PASSWD='' WHERE id=$id";
            $result = mysqli_query($connection, $sql);
            disconnect($connection);
        }
        return  ($result == true ?  "{\"id\":\"".$id."\",\"name\":\"".$name."\", \"email\":\"".$email."\",\"cpf\":\"".$cpf."\",\"passwd\":\"".$passwd."\"}" : "{\"result\":\"false\"}");
    }
    function fnDelete(){
        $id = $_GET["id"];
        $result = false;
        if ($id != ""){
            $connection = connet();
            $sql = "DELETE FROM CLIENT WHERE id='$id'";
            $result = mysqli_query($connection, $sql);
            disconnect($connection);
        }
        // ternary if
        return  ($result == true ? "{\"result\":\"true\", \"id\":\"". $id . "\"}" : "{\"result\":\"false\"}");
    }
    /**
     * Receives an sql select data and returns a json in string format
     */
    function generateJson($result){
        $json = "";
        while ($line = mysqli_fetch_array($result, MYSQLI_ASSOC))
            $json .= "{\"id\":\"".$line["id"]."\",\"name\":\"".$line["name"]."\", \"email\":\"".$line["email"]."\", \"cpf\":\"".$line["cpf"]."\", \"passwd\":\"".$line["passwd"]."\"},";
        $json = substr($json, 0, strlen($json) - 1);
        $json = "[" . $json. "]";
        return $json;
    }
    /**
     * Connects in MySql data base
     */
    function connet(){
        $connection = mysqli_connect("localhost", "cpw2", "cpw2");
        mysqli_select_db($connection, "cpw2");
        return $connection;
    }
    /**
     * Disconnects from the MySql data base
     */
    function disconnect($connection){
        mysqli_close($connection);
    }
?>