

window.onload = function() {
      var inputId = document.getElementById("calculator-input");


      Array.from(document.getElementsByClassName("calculator-num-btn")).forEach(classSelected => {
            document.getElementById(classSelected.id).onclick = () => {
                  let inputField = document.getElementById("calculator-input");
                  inputField.value += classSelected.id;

            }
      });

      (document).getElementById("calculator-submit-btn").onclick = function(){
            document.getElementById("result-area").value = "";
            document.getElementById("result-area").value = eval(inputId.value);
      }
}  
            
