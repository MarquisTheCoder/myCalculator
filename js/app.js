

window.onload = function() {
      var inputId = document.getElementById("calculator-input");


      Array.from(document.getElementsByClassName("calculator-num-btn")).forEach(classSelected => {
            document.getElementById(classSelected.id).onclick = () => {
                  let inputField = document.getElementById("calculator-input");
                  inputField.value += classSelected.id;

            }
      });


}  
            
      
     // ["9","8","7","6","5","4","3","2","1","0"].forEach(element => onclickId(element));

     //(document).getElementById("calculator-submit-btn").onclick = function(){
          //  alert(eval(inputId.value));   
    
