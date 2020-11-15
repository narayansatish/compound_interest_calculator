
let calculate=document.getElementById("calculate");
calculate.addEventListener("click", calculate_);
function calculate_(event)
    {
        let p=Number(document.getElementById("p").value);
        
        let r=Number(document.getElementById("rate").value);
        let t=Number(document.getElementById("time").value);
       
        let table_node=document.getElementById("table");
        if(table_node!=null)
             table_node.remove();
        table_node=document.getElementById("para");
        if(table_node!=null)
             table_node.remove();
        table_node = document.createElement("TABLE");
        table_node.setAttribute("id", "table");
        document.body.appendChild(table_node);
        table_node.innerHTML+="<tr><th>Year </th><th> Priamount </th> <th>Profit </th></tr> ";
        let i=0,profit ,pa=p,row,cell;
        let arr=[0,0,0]
        for(i=1;i<=t;i++)
            {
                profit =(pa*r)/100;
                pa=pa+(profit);
                arr[0]=i;
                arr[1]=pa;
                arr[2]=profit;
                row = table.insertRow(i);
                for(let j=0;j<3;j++)
                    {
                        cell=row.insertCell(j);
                        cell.innerHTML=arr[j];

                    }
            }
            let total_profit=pa-p;
            console.log(total_profit);
        let  para= document.createElement("P");
        para.setAttribute("id", "para");
        document.body.appendChild(para);
        var final="The total amount after "+t+" year is "+pa+" and interest amount is " +profit;
        para.innerHTML=final;
    }