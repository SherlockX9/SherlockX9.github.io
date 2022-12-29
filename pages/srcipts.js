var i = 0;
var txt = 'Hey, I\'m Sul';
var speed=125;

function typeWriter() {
  if (i < txt.length) {
    // document.getElementById("mainTitle").innerHTML += txt.charAt(i);
    document.getElementById("mainTitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);