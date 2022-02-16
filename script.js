var buttonsCalc = document.querySelector(".buttonsss");
var result = document.querySelector("#result");
var razmo ;
var answer1 ;
buttonsCalc.addEventListener("click", function (event) {
    if (!event.target.classList.contains("calc_btn")) return;
    var value = event.target.innerText;
    debugger;
    switch (value) {
        case "C":
            result.innerText = "";
            break;
        case "CE":
            result.innerText = "";
            break;
        case "=":
            try {
                 razmo = result.innerText;
                result.innerText = eval(result.innerText);
                result.value = eval(result.value);
                answer1 = result.innerText;
                // var arrray = [];
                // arrray.push(result)
                // console.log(arrray);
            } catch (err) {
                alert("Enter the valid Input");
                result.innerText = "";

            }
            break;
        case "+/-":
            value = result.innerText;
            value = -value;
            result.innerText = "";
            result.innerText = value;
            break;
        case "𝓍2":
            value = result.innerText;
            value *= value;
            result.innerText = "";
            result.innerText = value;
            break;
        case "del":
            value = result.innerText;
            var myArray = value.split("");
            myArray.pop();
            result.innerText = myArray.join("");
            break;

        case "√":
            value =result.innerText;
           var armat = Math.sqrt(Math.floor(value)).toFixed(5);
           result.innerText= armat;
            break;



        default:
            result.innerText += value;

    }
});

function clickHistory() {
    debugger
    var array2 = [];
    array2.push(razmo);
    var divis = document.createElement("div");  
  divis.setAttribute("style","width:320px;height:510px; border: 0.3px solid #C5C5C5; box-shadow: 0 0 13px rgba(0, 0, 0, 0.4); background-color:white;  border-radius: 9px;color: black; position: fixed;"); 
  var parag = document.createElement("p"); 
  var text = document.createTextNode( "Last action " + " " + array2 + "=" + " " + answer1);
  var btn = document.createElement("Button");
  btn.setAttribute("style","width:96%!important;heigth:5px!important;border:0px;font-size:20px;background-color:white;color:black;")
  btn.innerHTML=("Сlose the history part")
  btn.addEventListener("click", () => {
    document.body.removeChild(divis );
  });
  parag.appendChild(text);
      parag.setAttribute("style","font-size:25px; color:black;font-weight:700;"); 
      divis.append(btn);
  divis.append(parag);
  document.body.append(divis) ;
    
    
}