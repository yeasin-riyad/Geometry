function triangleCalculate(){
  
    let baseValue=common('base-value')

    let heightValue=common('height-value')
    let area=0.5*baseValue*heightValue;
    document.getElementById('area').innerText=area;
}



