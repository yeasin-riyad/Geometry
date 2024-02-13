function rectangleCalculate(){
    let width= document.getElementById('width-value');
    let widthValue=parseFloat(width.value);
    let length=document.getElementById('length-value');
    let lengthValue=parseFloat(length.value);
    let area=widthValue*lengthValue;
    document.querySelector('.rectangle .area').innerText=area;

}