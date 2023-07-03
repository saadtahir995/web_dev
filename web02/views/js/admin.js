
const topfield= Array.from(document.querySelectorAll('.orders'));
var rev=0; var order_count=data.length;
document.getElementById('ord').innerHTML="Today: "+order_count;
for (let i = 0; i < data.length; i++) {
    rev+=data[i]['total_bill'];   
}
document.getElementById('revi').innerHTML="Today: "+rev+"Rs";
if(data.length>0)
{
let j=0;
for (let i = 0; i < data.length; i++) {
    topfield[j].innerHTML= data[i]['item_name'] +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+data[i]['item_count']+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ data[i]['total_bill'];
        j++;       
}
}
function dispatcher(){
    const msg=document.getElementById('msg_field');
    if(data.length===0)
    {
       msg.innerHTML="There are currently no items to dispatch";
    }
    else
    {
        for (let i = 0; i < data.length; i++) {
            topfield[i].innerHTML="";
        }
        msg.innerHTML="All items have been dispatched successfully";
        var xhr= new XMLHttpRequest();
        xhr.open("POST","/dispatch",true);
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(JSON.stringify(data));
    }
    
    }