<?php
  $username = 'lavanderia';
  $password = 'lavanderia';

  $conn = new mysqli('mysql', $username, $password);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = 'SELECT * FROM users';
  $result = $conn->query($sql);
  if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
      echo '<div>'.$row[0].'</div>';
    }
  }else{
    echo 'No ha encontrado usuarios';
  }
?>
