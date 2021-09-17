
canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");
background_color="white";
text_color="black";
line_width=2;
//mouse events//
var lastx,lasty;
mouse_event="";
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    text_color=document.getElementById("ti2").value;
    line_width=document.getElementById("ti1").value;
    background_color=document.getElementById("ti3").value;
    document.getElementById("canvas1").style.backgroundColor=background_color;
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    currentx=e.clientX - canvas.offsetLeft;
    currenty=e.clientY - canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=text_color;
        ctx.lineWidth=line_width;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}
//touch events//
var lastx,lasty;
var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;

    if(width < 992)
    {
    document.getElementById("canvas1").width =new_width;
    document.getElementById("canvas1").height =new_height;

    document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
    console.log("my_touchstart");
    lastx=e.touches[0].clientX - canvas.offsetLeft;
    lasty = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = text_color;
    ctx.lineWidth = line_width;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lastx + "y = " + lasty);
    ctx.moveTo(lastx, lastx);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    lastx = current_position_of_touch_x; 
    lasty = current_position_of_touch_y
}
function clear_area()
{
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

