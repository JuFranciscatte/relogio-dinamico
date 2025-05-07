function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");

  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();

  msg.innerHTML = `Agora são ${hora} horas ${minutos} minutos.`;

  if (hora >= 0 && hora < 12) {
    img.src = "img/fotomanha.jpg";
    document.body.style.background = "#e8e580";
  } else if (hora >= 12 && hora < 18) {
    img.src = "img/fototarde.jpg";
    document.body.style.background = "#ebb371";
  } else {
    img.src = "img/fotonoite.png";
    document.body.style.background = "#84b0c4";
  }
}
