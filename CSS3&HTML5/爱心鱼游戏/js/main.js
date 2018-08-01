var can1;
var can2;
var cxt1;
var cxt2;


window.onload = function () {
    function game() {
        init();
        gameloop();
    }

    function init() {
        can1 = document.getElementById('canvas1');  //fish, dust, UI, circle
        cxt1 = can1.getContext("2d");
        can2 = document.getElementById('canvas2'); //background, ane, fruits
        cxt2 = can2.getContext("2d");
    }
    
    function gameloop() {
        requestAnimationFrame(gameloop);
        console.log("loop");
    }

}
