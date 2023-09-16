const left = document.getElementById("left-side");

const handleMove = e => {
  const sliderX = (window.innerWidth * -0.15) + e.clientX  * 1.3;
  const posX = sliderX < 0 ? 0 : sliderX;
  
  left.animate({
    width: `${posX / window.innerWidth * 100}%`
    }, { duration: 400, fill: "forwards" });
  
  if (posX > window.innerWidth - 250) 
    document.getElementById("bname").style.color = "purple";
  else 
    document.getElementById("bname").style.color = "white";
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);
