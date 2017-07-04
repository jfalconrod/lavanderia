$( document ).ready(function() {
    console.log( "ready!" );
});
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
  //console.log("Tecla Pulsada " + event.keyCode);

  if (event.keyCode == 13) { //Si se pulsa la tecla Enter
    var numCliente = prompt("Número de Cliente");
    //--------- Config Comando de Voz
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[9];
    console.log(msg.voice);
    // msg.voiceURI = 'native';
     msg.rate = 0.8;
    // msg.pitch = 0.8;
    //--------- FIN Config Comando de Voz
    if (clientes.get(numCliente) != undefined) {
      console.log(clientes.get(numCliente));
      $("#numeroCliente").text(numCliente);
      $("#nombreCliente").text(clientes.get(numCliente));
      msg.text = "Cambio de complejo. Va de" + $("#nombreCliente").text();
      speechSynthesis.speak(msg);
      for (var i = 0; i < 5; i++) {//Efecto aparece/desaparece
        $("#principal").fadeToggle(500);
        $("#principal").fadeToggle(500);
      }

    } else {
      console.log("El cliente no existe");
      alert("El cliente no existe!");
    }
  }
};
