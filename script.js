function handelKeyPress(ev) {
    const player = document.querySelector("#player")

    player.setAttribute("cx", 100* Math.ramdom())
    player.setAttribute("cy", 100*Math.random())
}



window.onkeydown = handelKeyPress