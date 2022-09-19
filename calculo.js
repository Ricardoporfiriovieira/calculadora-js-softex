var verifica = false; //variavel para decidir se o campo de resto deve aparecer ou não
function calcular(){

    let num1 = Number(document.body.querySelector("#num1").value);
    let num2 = Number(document.body.querySelector("#num2").value);
    var divresultado = document.body.querySelector("#resultado");
    let operador = document.querySelector("input[name='op']:checked").value;
    let resultado;


    //ali em cima selecionei e criei os elementos que irei utilizar

    if(num1 && num2){ //se o usuario tiver digitado os 2 número realize 1 das operações aritméticas 

        switch(operador){
            case "1"://soma
                resultado = num1 + num2;
                divresultado.innerHTML = resultado;

                if(verifica == true){ //se antes da soma o usuario tiver realizado uma divisão então retire o campo de resto
                    document.querySelector(".resto").remove();
                    document.querySelector("#resto").remove();

                    verifica = false;

                }

                break
            case "2"://subtraçãp
                resultado = num1 - num2;
                divresultado.innerHTML = resultado;

                if(verifica == true){ //se antes da subtração o usuario tiver realizado uma divisão então retire o campo de resto
                    document.querySelector(".resto").remove();
                    document.querySelector("#resto").remove();

                    verifica = false;

                }
                break

            case "3"://multiplicação
                resultado = num1 * num2;
                divresultado.innerHTML = resultado;

                if(verifica == true){ //se antes da multiplicação o usuario tiver realizado uma divisão então retire o campo de resto
                    document.querySelector(".resto").remove();
                    document.querySelector("#resto").remove();

                    verifica = false;

                }
                break

            case "4"://divisão
                divresultado.innerHTML = Math.floor(num1 / num2);
                if(verifica == false){ // se o campo de resto não tiver sido criado então crie

                    let labelresto = document.createElement("label");
                    labelresto.setAttribute("class", "resto");

                    let divresto = document.createElement("div");
                    divresto.setAttribute("id", "resto");

                    divresultado.after(labelresto);
                    labelresto.after(divresto);

                    labelresto.textContent = "Resto: ";
                    divresto.innerHTML = num1 % num2;

                    verifica = true;

                }
                break

            default:
                console.log("erro!");
                
        }

    }else{
     
        if(verifica == true){ // se existir o campo de resto então apague 
            document.querySelector(".resto").remove();
            document.querySelector("#resto").remove();

            verifica = false;

        }

        divresultado.innerHTML = "";  

    }
}