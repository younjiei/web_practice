function billingFunction(){
  if(document.getElementById("same").checked){
    var text1=document.getElementById("shippingName").value;
    var text2=document.getElementById("shippingZip").value;
    document.getElementById("billingName").value=text1;
    document.getElementById("billingZip").value=text2;
  }
}
