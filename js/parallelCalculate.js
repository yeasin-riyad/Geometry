function parallelCalculate(){
  
    let baseValue=common('base-input')

    let heightValue=common('height-input')
    let area=baseValue*heightValue;
    document.getElementById('ParallelArea').innerText=area;
    
}