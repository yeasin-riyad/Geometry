function triangleCalculate(){
    let base=document.getElementById('base-value');
    let baseValue=parseFloat(base.value);
    let height=document.getElementById('height-value');
    let heightValue=parseFloat(height.value)
    let area=0.5*baseValue*heightValue;
    document.getElementById('area').innerText=area;
}

