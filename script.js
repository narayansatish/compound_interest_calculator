
let calculate=document.getElementById("calculate");
calculate.addEventListener("click", calculate_);
function calculate_(event)
    {
        let p=Number(document.getElementById("p").value);
        
        let r=Number(document.getElementById("rate").value);
        let t=Number(document.getElementById("time").value);
        let interval=Number(document.getElementById("interval").value);//convert into number
        
        let table_node = document.createElement("table");
        table_node.setAttribute("id", "table");
        document.body.appendChild(table_node);
    }