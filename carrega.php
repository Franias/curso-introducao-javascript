<?php
    // Abre a conexão com o banco de dados 
    $connection = mysqli_connect("localhost", "cpw2", "cpw2");

    mysqli_select_db($connection, "cpw2");
    $query = "SELECT * FROM CLIENTE";

    $result = mysqli_query($connection, $query);

    /* Mostrando os resultados em HTML */
    $json = "";
    while ($line = mysqli_fetch_array($result, MYSQLI_ASSOC)){
        
        $json = "{\"nome\":\"$line[´nome´]\"}";



        //foreach ($line as $column => $value){
           // echo "\t\t<td>$column $value</td>\n";
        //}
        
    }
    
    
    /* Libera o conjunto de resultados */
    mysqli_free_result($result);
    /* Fechando a conexão */
    mysqli_close($connection);

    echo $json;

?>