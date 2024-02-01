const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

//Mouse Circle
const mouseCircleFn = (x,y) =>{
    mouseCircle.style.cssText = `top:${y}px; left:${x}px`;
    mouseDot.style.cssText = `top:${y}px; left:${x}px`;
};

document.body.addEventListener("mousemove",(e)=>{
    let x = e.clientX;
    let y = e.clientY;
    console.log("equis", x)
    console.log("ye", y)
    mouseCircleFn(x,y)
});
//End of Mouse Circle
