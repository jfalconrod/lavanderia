<?php
  include_once('settings.php');
  $conn = new mysqli('mysql', $username, $password, $database);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = 'SELECT * FROM clientes';
  $result = $conn->query($sql);

  $conn->close();
?>
<script type="text/javascript">
  var clientes = new Map();
  <?php
    if($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        echo "clientes.set('{$row['codigoCliente']}','{$row['nombreCliente']}');";
      }
    }else{
      echo 'No ha encontrado usuarios';
    }
  ?>
  console.log(clientes);
</script>
