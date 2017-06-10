<!DOCTYPE html>
<html>
  <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

  </head>
  <body>
    <?php
      include_once('settings.php');

      $conn = new mysqli('mysql', $username, $password, $database);

      if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }

      $sql = 'SELECT * FROM clientes';
      $result = $conn->query($sql);

      if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo '<div>'.$row['codigoCliente'].' - '.$row['nombreCliente'].'</div>';
        }
      }else{
        echo 'No ha encontrado usuarios';
      }

      $conn->close();
    ?>
    <h1>Falcón</h1>
  </body>
</html>
