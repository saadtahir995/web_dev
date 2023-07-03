const x= Array.from(document.querySelectorAll('.tile'));var flag=0;var obj={};
var items=[];
for (let i = 0; i < 4; i++) {
    items[i]=Object.keys(data[i]);   
}
var j=0;


var tableHTML = '<table>';
  tableHTML += `<tr><th>Item Name</th><th>Item Count</th><th>Item Total</th></tr>`;
for (let i = 0; i < 4; i++) {
items[i].forEach(element => {
x[j].innerHTML=element;
j++;

});

}
for (let i = 0; i < dbdata.length; i++) {
    tableHTML += `<tr><td>${dbdata[i]["item_name"]}</td><td>${dbdata[i]["item_count"]}</td><td>${dbdata[i]["total_bill"]}</td></tr>`;
    
}
tableHTML += '</table>';
document.getElementById('table_cont').innerHTML=tableHTML;
function updatecart(item)
{
   
    flag=1;
    var tableHTML = '<table>';
    tableHTML += `<tr><th>Item Name</th><th>Item Count</th><th>Item Total</th></tr>`;
    for (let i = 0; i < 4; i++) {
        items[i].forEach(element => {
            if(element===item)
            {
                data[i][element][0]+=1;
                data[i][element][1]+=data[i][element][4];
            }
            

        });
    }
    for (let i = 0; i < 4; i++) {
        items[i].forEach(element => {
    if(data[i][element][0]>0){
        tableHTML += `<tr><td>${element}</td><td>${data[i][element][0]}</td><td>${data[i][element][1]}</td></tr>`;
    
    }
});
    }
    tableHTML += '</table>';
document.getElementById('table_cont2').innerHTML=tableHTML;
      
}

function datasend()
    {
        if(flag===1)
        {
            flag=0;
        var xhr= new XMLHttpRequest();
    xhr.open("POST",'/dbupdate',true);
    xhr.setRequestHeader("Content-Type","application/json");
     xhr.send(JSON.stringify(data));
     
        }
       
    }


