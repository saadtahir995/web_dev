window.addEventListener('DOMContentLoaded',()=>{
    const topfield= Array.from(document.querySelectorAll('.orders'));
let j=0;
var rev=0; var order_count=data.length;
document.getElementById('ord').innerHTML="Today: "+order_count;
for (let i = 0; i < data.length; i++) {
    rev+=data[i]['total_bill'];   
}
document.getElementById('revi').innerHTML="Today: "+rev+"Rs";
for (let i = 0; i < data.length; i++) {
    topfield[j].innerHTML= data[i]['item_name'] +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+data[i]['item_count']+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ data[i]['total_bill'];
        j++;
        
}


});

