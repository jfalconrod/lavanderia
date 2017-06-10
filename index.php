<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <?php
      ini_set('display_errors', 1);
      ini_set('display_startup_errors', 1);
      error_reporting(E_ALL);

      $username = 'lavanderia';
      $password = 'lavanderia';
      $database = 'lavanderia';

      $conn = new mysqli('mysql', $username, $password, $database);
      if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }

      $sql = 'SELECT * FROM users';
      $result = $conn->query($sql);
      if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo '<div>'.$row['username'].' - '.$row['email'].'</div>';
        }
      }else{
        echo 'No ha encontrado usuarios';
      }
      $conn->close();
    ?>
  </body>
</html>
