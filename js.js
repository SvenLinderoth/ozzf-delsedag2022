

function wrong () {
    alert("Fel, testa igen!") 
    return;
}
function correct () {
    document.body.innerHTML += " <video autoplay muted loop id='myVideo' class='paintball' onclick='doThis()'> <source src='things/paintball.mp4' type='video/mp4' > </video>" 
    document.body.innerHTML += " <button onclick='history.go(0);' id='buttonClose'> close </button> "

}
function doThis () {
   document.getElementsByClassName("paintball").style.visibility = "hidden";
}

