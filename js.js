function onOff(){
  var x = document.getElementById("on");
  var y = document.getElementById("off");
  if(x.style.display=="none"){
    x.style.display="block"
    y.style.display="none"
    x.innerHTML="ON";
  }

  else{
    x.style.display="none"
    y.style.display="block"
    y.innerHTML="OFF";
  }
  
};