
const topfield= Array.from(document.querySelectorAll('.orders'));
var rev=0; var order_count=data.length;
document.getElementById('ord').innerHTML="Today: "+order_count;
for (let i = 0; i < data.length; i++) {
    rev+=data[i]['total_bill'];   
}
document.getElementById('revi').innerHTML="Today: "+rev+"Rs";
if(data.length>0)
{
    var tableHTML = '<table>';
    tableHTML += `<tr><th>Customer#</th><th>Item Name</th><th>Ordered Quantity</th><th>Item Total</th></tr>`;
for (let i = 0; i < data.length; i++) {
    tableHTML += `<tr><td>${data[i]["customer_id"]}</td><td>${data[i]["item_name"]}</td><td>${data[i]["item_count"]}</td><td>${data[i]["total_bill"]}</td></tr>`; 

}
tableHTML += '</table>';
document.getElementById('table_cont').innerHTML=tableHTML;
}
var flag=0;
function dispatcher(){
    
    const msg=document.getElementById('msg_field');
    if(data.length===0 || flag===1)
    {
       msg.innerHTML="There are currently no items to dispatch";
    }
    else
    {
        flag=1;
        document.getElementById('table_cont').innerHTML='';
        
        msg.innerHTML="All items have been dispatched successfully";
        var xhr= new XMLHttpRequest();
        xhr.open("POST","/dispatch",true);
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(JSON.stringify(data));
    }
    
    }