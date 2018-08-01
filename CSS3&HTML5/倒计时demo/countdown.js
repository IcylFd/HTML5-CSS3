// var WINDOW_WIDTH = 1024;
// var WINDOW_HEIGHT = 768;
// var MARGIN_LEFT = 30;
// var MARGIN_TOP = 60;
// var RADIUS = 8;
//
// const endTime = new Date(2018, 2, 13, 17, 17, 30);
// var curShowTimeSeconds = 0;
// var balls = [];
// var colors = ["#FF71A8", "#9E97CC", "#FFF2C1", "#A0FFE0", "FFC0AB", "#A89DFF", "#41CC86", "#CC4E66", "#40AACC", "56FFFD"];
//
// window.onload = function () {
//     var canvas = document.getElementById('canvas');
//     var context = canvas.getContext('2d');
//
//
//     canvas.width = WINDOW_WIDTH;
//     canvas.height = WINDOW_HEIGHT;
//
//     curShowTimeSeconds = getCurrentShowTimeSeconds();
//
//     setInterval(
//         function () {
//             render(context);
//             update();
//         }, 50
//     );
//
// }
//
//
//     function getCurrentShowTimeSeconds() {
//         var curTime = new Date();
//         var ret = endTime.getTime() - curTime.getTime();
//         ret = Math.round(ret / 1000);
//
//         return ret >= 0 ? ret : 0;
//     }
//
//     function update() {
//         var nextShowTimeSeconds = getCurrentShowTimeSeconds();
//
//         var nextHour = parseInt(nextShowTimeSeconds / 3600);
//         var nextMinutes = parseInt((nextShowTimeSeconds - nextHour * 3600)/60);
//         var nextSecond = nextShowTimeSeconds % 60;
//
//         var curHour = parseInt(curShowTimeSeconds / 3600);
//         var curMinutes = parseInt((curShowTimeSeconds - curHour * 3600)/60);
//         var curSecond = curShowTimeSeconds % 60;
//
//         if(nextSecond != curSecond){
//             if(parseInt(nextHour/10) != parseInt(curHour/10)){
//                 addBalls(MARGIN_LEFT+0, MARGIN_TOP, parseInt(curHour/10));
//             }
//             if(parseInt(nextHour%10) != parseInt(curHour%10)){
//                 addBalls(MARGIN_LEFT+15*(RADIUS+1), MARGIN_TOP, parseInt(curHour/10));
//             }
//
//             if(parseInt(nextMinutes/10) != parseInt(curMinutes/10)){
//                 addBalls(MARGIN_LEFT+39*(RADIUS+1), MARGIN_TOP, parseInt(curHour/10));
//             }
//             if(parseInt(nextMinutes%10) != parseInt(curMinutes%10)){
//                 addBalls(MARGIN_LEFT+54*(RADIUS+1), MARGIN_TOP, parseInt(curHour/10));
//             }
//
//             if(parseInt(nextSecond/10) != parseInt(curSecond/10)){
//                 addBalls(MARGIN_LEFT+78*(RADIUS+1), MARGIN_TOP, parseInt(curHour/10));
//             }
//             if(parseInt(nextSecond%10) != parseInt(curSecond%10)){
//                 addBalls(MARGIN_LEFT+93*(RADIUS+1), MARGIN_TOP, parseInt(curHour/10));
//             }
//
//
//             curShowTimeSeconds = nextShowTimeSeconds;
//         }
//
//         updateBalls();
//
//     }
//
//     function updateBalls() {
//         for(var i = 0; i < balls.length; i++) {
//             balls[i].x += balls[i].vx;
//             balls[i].y += balls[i].vy;
//             balls[i].vy += balls[i].g;
//
//             if(balls[i].y >= WINDOW_HEIGHT - RADIUS){
//                 balls[i].y = WINDOW_HEIGHT - RADIUS;
//                 balls[i].vy = -balls[i].vy * 0.75;
//             }
//         }
//     }
//
//     function addBalls(x, y, num) {
//         for(var i = 0; i < digit[num].length; i++)
//             for(var j = 0; j < digit[num][i].length; j++)
//                 if(digit[i][j] == 1){
//                     var aBall = {
//                         x: x + j*2*(RADIUS+1)+(RADIUS+1),
//                         y: y + i*2*(RADIUS+1)+(RADIUS+1),
//                         g: 1.5 + Math.random(),
//                         vx: Math.pow( -1, Math.ceil( Math.random()*1000 ) )*4,
//                         vy: -5,
//                         color: colors[ Math.floor(Math.random()*colors.length) ]
//                     }
//                     balls.push(aBall);
//                 }
//     }
//
//     function render( cxt ) {
//         cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
//
//         var hour = parseInt(curShowTimeSeconds / 3600);
//         var minutes = parseInt((curShowTimeSeconds - hour * 3600)/60);
//         var second = curShowTimeSeconds % 60;
//
//         renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hour/10), cxt);
//         renderDigit(MARGIN_LEFT + 15*(RADIUS+1), MARGIN_TOP, parseInt(hour%10), cxt);
//         renderDigit(MARGIN_LEFT + 30*(RADIUS+1), MARGIN_TOP, 10, cxt);
//         renderDigit(MARGIN_LEFT + 39*(RADIUS+1), MARGIN_TOP, parseInt(minutes/10), cxt);
//         renderDigit(MARGIN_LEFT + 54*(RADIUS+1), MARGIN_TOP, parseInt(minutes%10), cxt);
//         renderDigit(MARGIN_LEFT + 69*(RADIUS+1), MARGIN_TOP, 10, cxt);
//         renderDigit(MARGIN_LEFT + 78*(RADIUS+1), MARGIN_TOP, parseInt(second/10), cxt);
//         renderDigit(MARGIN_LEFT + 93*(RADIUS+1), MARGIN_TOP, parseInt(second%10), cxt);
//
//         for(var i=0; i < balls.length; i++){
//             cxt.fillStyle = balls[i].color;
//             cxt.beginPath();
//             cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2*Math.PI, false);
//             cxt.closePath();
//
//             cxt.fill();
//         }
//     }
//
//     function renderDigit( x, y, num, cxt) {
//         cxt.fillStyle = '#78b4f0';
//
//         for(var i = 0; i < digit[num].length; i++)
//             for(var j = 0; j < digit[num][i].length; j++)
//                 if(digit[num][i][j] == 1){
//                     cxt.beginPath();
//                     cxt.arc(x+2*j*(RADIUS+1)+(RADIUS+1), y+2*i*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
//                     cxt.closePath();
//                     cxt.fill();
//                 }
//     }
//
//
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime = new Date(2018,5,8,18,47,52);
var curShowTimeSeconds = 0

var balls = [];
const colors = ["#FF71A8", "#9E97CC", "#FFF2C1", "#A0FFE0", "FFC0AB", "#A89DFF", "#41CC86", "#CC4E66", "#40AACC", "56FFFD"]


var isMoving = true;

window.onload = function(){

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    curShowTimeSeconds = getCurrentShowTimeSeconds()
    setInterval(
        function(){
            render( context );
            if(isMoving)
                update();
        }
        ,
        50
    );

    document.getElementById("button").onclick = function (event) {
        if(isMoving){
            isMoving = false;
            this.text = "开始";
        }
        else{
            isMoving = true;
            this.text = "暂停";
        }
        return false;
    }
}



function getCurrentShowTimeSeconds() {
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round( ret/1000 )

    return ret >= 0 ? ret : 0;
}

function update(){

    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nextHours = parseInt( nextShowTimeSeconds / 3600);
    var nextMinutes = parseInt( (nextShowTimeSeconds - nextHours * 3600)/60 )
    var nextSeconds = nextShowTimeSeconds % 60

    var curHours = parseInt( curShowTimeSeconds / 3600);
    var curMinutes = parseInt( (curShowTimeSeconds - curHours * 3600)/60 )
    var curSeconds = curShowTimeSeconds % 60

    if( nextSeconds != curSeconds ){
        if( parseInt(curHours/10) != parseInt(nextHours/10) ){
            addBalls( MARGIN_LEFT + 0 , MARGIN_TOP , parseInt(curHours/10) );
        }
        if( parseInt(curHours%10) != parseInt(nextHours%10) ){
            addBalls( MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP , parseInt(curHours/10) );
        }

        if( parseInt(curMinutes/10) != parseInt(nextMinutes/10) ){
            addBalls( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(curMinutes/10) );
        }
        if( parseInt(curMinutes%10) != parseInt(nextMinutes%10) ){
            addBalls( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , parseInt(curMinutes%10) );
        }

        if( parseInt(curSeconds/10) != parseInt(nextSeconds/10) ){
            addBalls( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(curSeconds/10) );
        }
        if( parseInt(curSeconds%10) != parseInt(nextSeconds%10) ){
            addBalls( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , parseInt(nextSeconds%10) );
        }

        curShowTimeSeconds = nextShowTimeSeconds;
    }

    updateBalls();
}

function updateBalls(){

    for( var i = 0 ; i < balls.length ; i ++ ){

        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if( balls[i].y >= WINDOW_HEIGHT-RADIUS ){
            balls[i].y = WINDOW_HEIGHT-RADIUS;
            balls[i].vy = - balls[i].vy*0.75;
        }
    }

    var cnt = 0;
    for( var i = 0 ; i < balls.length ; i ++ )
        if( balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH ){
            balls[cnt++] = balls[i];
        }

        while ( balls.length > Math.min(cnt, 300) ){
            balls.pop();
        }
}

function addBalls( x , y , num ){

    for( var i = 0  ; i < digit[num].length ; i ++ )
        for( var j = 0  ; j < digit[num][i].length ; j ++ )
            if( digit[num][i][j] == 1 ){
                var aBall = {
                    x:x+j*2*(RADIUS+1)+(RADIUS+1),
                    y:y+i*2*(RADIUS+1)+(RADIUS+1),
                    g:1.5+Math.random(),
                    vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
                    vy:-5,
                    color: colors[ Math.floor( Math.random()*colors.length ) ]
                }

                balls.push( aBall )
            }
}

function render( cxt ){

    cxt.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);

    var hours = parseInt( curShowTimeSeconds / 3600);
    var minutes = parseInt( (curShowTimeSeconds - hours * 3600)/60 )
    var seconds = curShowTimeSeconds % 60

    renderDigit( MARGIN_LEFT , MARGIN_TOP , parseInt(hours/10) , cxt )
    renderDigit( MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP , parseInt(hours%10) , cxt )
    renderDigit( MARGIN_LEFT + 30*(RADIUS+1) , MARGIN_TOP , 10 , cxt )
    renderDigit( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(minutes/10) , cxt);
    renderDigit( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , parseInt(minutes%10) , cxt);
    renderDigit( MARGIN_LEFT + 69*(RADIUS+1) , MARGIN_TOP , 10 , cxt);
    renderDigit( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(seconds/10) , cxt);
    renderDigit( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , parseInt(seconds%10) , cxt);

    for( var i = 0 ; i < balls.length ; i ++ ){
        cxt.fillStyle=balls[i].color;

        cxt.beginPath();
        cxt.arc( balls[i].x , balls[i].y , RADIUS , 0 , 2*Math.PI , true );
        cxt.closePath();

        cxt.fill();
    }
}

function renderDigit( x , y , num , cxt ){

    cxt.fillStyle = "#9b9b9b";

    for( var i = 0 ; i < digit[num].length ; i ++ )
        for(var j = 0 ; j < digit[num][i].length ; j ++ )
            if( digit[num][i][j] == 1 ){
                cxt.beginPath();
                cxt.arc( x+j*2*(RADIUS+1)+(RADIUS+1) , y+i*2*(RADIUS+1)+(RADIUS+1) , RADIUS , 0 , 2*Math.PI )
                cxt.closePath()

                cxt.fill();
            }
}

