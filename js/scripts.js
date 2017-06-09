// init bunch of sounds
ion.sound({
    sounds: [
        {name: "beer_can_opening"},
        {name: "metal_plate"},
        {name: "branch_break"},
        {name: "water_droplet"}
    ],

    // main config
    path: "sounds/",
    preload: true,
    multiplay: true,
    volume: 1.0
});

$(function(){
  $("html").keypress(teclaPulsada);
});

var teclaPulsada = function(event){
  console.log("Tecla Pulsada " + event.keyCode);
  // Definición clientes
  var clientes = new Map();
  clientes.set("1",'Rocas Rojas');
  clientes.set("2",'Parque 1');
  clientes.set("3",'Parque 2');
  clientes.set("4",'Otro');
  clientes.set("5",'Atlantic Beach Club');
  clientes.set("6",'Dunamar');
  clientes.set("7",'Rocas Rojas');
  clientes.set("8",'Rocas Rojas');
  clientes.set("9",'Rocas Rojas');
  clientes.set("10",'Rocas Rojas');
  clientes.set("11",'Rocas Rojas');
  // Fin Definición Clientes

  if (event.keyCode == 13) { //Si se pulsa la tecla Enter
    var numCliente = prompt("Número de Cliente");
    if (clientes.get(numCliente) != undefined) {
      $("#numeroCliente").text(numCliente);
      $("#nombreCliente").text(clientes.get(numCliente));
      //--------- Comando de Voz
      var msg = new SpeechSynthesisUtterance();
      // var voices = window.speechSynthesis.getVoices();
      // msg.voice = voices[9];
      // msg.voiceURI = 'native';
      msg.rate = 1.0;
      msg.pitch = 0.8;
      msg.lang = 'es-ES';
      msg.text = "Cambio de complejo. Va de";
      speechSynthesis.speak(msg);
      msg.text = $("#nombreCliente").text();
      speechSynthesis.speak(msg);
      //-------- Fin comando de Voz

      for (var i = 0; i < 5; i++) {
        $("#principal").fadeToggle(500);
        $("#principal").fadeToggle(500);
      }

      // ion.sound.play("water_droplet", {
      //   loop: 3
      // });
      console.log(clientes.get(numCliente));
    } else {
      console.log("El cliente no existe");
      alert("El cliente no existe!");
    }
    // switch (numCliente) {
    //   case "1":
    //     $("#numeroCliente").text(numCliente);
    //     $("#nombreCliente").text("Cliente nº" + numCliente);
    //     break;
    //   case "2":
    //     $("#numeroCliente").text(numCliente);
    //     $("#nombreCliente").text("Cliente nº" + numCliente);
    //     break;
    //   default:
    //     alert("El cliente no existe!")
    // }
  }
};
