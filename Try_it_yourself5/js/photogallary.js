function showimg(element){
  var text = document.getElementById('name');
  text.innerHTML = element.alt;
  var img = document.getElementById('photo');
  img.src = element.src;
}

function original(){
  var text = document.getElementById('name');
  text.innerHTML = "여기에 사진이 크게 들어갑니다.";
  var img = document.getElementById('photo');
  img.src = "imgs/user.png";
}
