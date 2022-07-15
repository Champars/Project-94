function welcome() {
    var player = localStorage.getItem("username");
    document.getElementById("welcome").innerHTML = "Welcome" + " " + player;
    console.log(player);
}