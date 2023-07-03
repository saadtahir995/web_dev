var count = 0;
var tea_total = 0;let ind=0;
var tea_menu={
    "kashmiriChai" : [0,0,0,0,200],
    "Karakchai" : [0,0,0,0,250],
    "peshawarichai" : [0,0,0,0,150],
    "Elaichichai" : [0,0,0,0,300],
    "Herbalchai" :[0,0,0,0,350]
}
var hotc_menu={

  "Americano" : [0,0,0,0,600],
  "Latte" : [0,0,0,0,850],
  "Cappuccino" : [0,0,0,0,1200]

}
var coldc_menu={

  "Frappuccino" : [0,0,0,0,700],
  "Coffee_Smoothies" : [0,0,0,0,1050],
  "Iced_Coffee" : [0,0,0,0,1250]

}
var desst={
  "Brownies" : [0,0,0,0,1500],
  "Muffins" : [0,0,0,0,1700],
  "Cheesecake" : [0,0,0,0,3000]

}
let categ=[];

function tea() {
  if (
    document.getElementsByClassName("tea_menu")[0].style.display === "block"
  ) {
    document.getElementsByClassName("tea_menu")[0].style.display = "none";
  } else document.getElementsByClassName("tea_menu")[0].style.display = "block";
}
function coldc() {
  if (
    document.getElementsByClassName("coldc_menu")[0].style.display === "block"
  ) {
    document.getElementsByClassName("coldc_menu")[0].style.display = "none";
  } else document.getElementsByClassName("coldc_menu")[0].style.display = "block";
}
function incre( type) {
    if(type==='kash')
    {
      tea_menu.kashmiriChai[0]+=1;
     document.getElementById("total_kchai").innerHTML = tea_menu.kashmiriChai[0];
     tea_menu.kashmiriChai[2]+=1;
    }
    else if(type==='karak')
    {
        tea_menu.Karakchai[0]+=1;
        document.getElementById("total_karakchai").innerHTML = tea_menu.Karakchai[0];
        tea_menu.Karakchai[2]+=1;
    }
    else if(type==='pesh')
    { 
        tea_menu.peshawarichai[0]+=1;
        document.getElementById("total_peshchai").innerHTML = tea_menu.peshawarichai[0];
        tea_menu.peshawarichai[2]+=1;
    }
    else if(type==='elaich')
    {
        tea_menu.Elaichichai[0]+=1;
        document.getElementById("total_elaichchai").innerHTML = tea_menu.Elaichichai[0];
        tea_menu.Elaichichai[2]+=1;
    }
    else if(type==='herb')
    {
        tea_menu.Herbalchai[0]+=1;
        document.getElementById("total_herbchai").innerHTML = tea_menu.Herbalchai[0];
        tea_menu.Herbalchai[2]+=1;
    }
    else if(type==='amer')
    {
      hotc_menu.Americano[0]+=1;
        document.getElementById("total_amer").innerHTML = hotc_menu.Americano[0];
        hotc_menu.Americano[2]+=1;
    }
    else if(type==='capp')
    {
        hotc_menu.Cappuccino[0]+=1;
        document.getElementById("total_capp").innerHTML = hotc_menu.Cappuccino[0];
        hotc_menu.Cappuccino[2]+=1;
    }
    else if(type==='latt')
    {
      hotc_menu.Latte[0]+=1;
        document.getElementById("total_latt").innerHTML = hotc_menu.Latte[0];
        hotc_menu.Latte[2]+=1;
    }
    else if(type==='frapp')
    {
      coldc_menu.Frappuccino[0]+=1;
        document.getElementById("total_frapp").innerHTML = coldc_menu.Frappuccino[0];
        coldc_menu.Frappuccino[2]+=1;
    }
    else if(type==='smooth')
    {
      coldc_menu.Coffee_Smoothies[0]+=1;
        document.getElementById("total_smooth").innerHTML = coldc_menu.Coffee_Smoothies[0];
        coldc_menu.Coffee_Smoothies[2]+=1;
    }
    else if(type==='iced')
    {
      coldc_menu.Iced_Coffee[0]+=1;
        document.getElementById("total_iced").innerHTML = coldc_menu.Iced_Coffee[0];
        coldc_menu.Iced_Coffee[2]+=1;
    }
    else if(type==='brown')
    {
      desst.Brownies[0] +=1;
        document.getElementById("total_brown").innerHTML = desst.Brownies[0];
        desst.Brownies[2]+=1;
    }
    else if(type==='muff')
    {
      desst.Muffins[0]+=1;
        document.getElementById("total_muff").innerHTML = desst.Muffins[0];
        desst.Muffins[2]+=1;
    }
    else
    {
      desst.Cheesecake[0]+=1;
        document.getElementById("total_chee").innerHTML = desst.Cheesecake[0];
        desst.Cheesecake[2]+=1;
    }
    
}
function decre(type) {
    if(type==='kash')
    {
  if (tea_menu.kashmiriChai[0] > 0)
  { tea_menu.kashmiriChai[0]-=1;
    tea_menu.kashmiriChai[2]-=1;
  }
  document.getElementById("total_kchai").innerHTML = tea_menu.kashmiriChai[0];
    }
    else if(type==='karak')
    {
        if (tea_menu.Karakchai[0] > 0){
   tea_menu.Karakchai[0]-=1;
   tea_menu.Karakchai[2]-=1;
  }
  document.getElementById("total_karakchai").innerHTML = tea_menu.Karakchai[0];
    }
    else if(type==='pesh')
    {
        if (tea_menu.peshawarichai[0] > 0)
  { tea_menu.peshawarichai[0]-=1;
    tea_menu.peshawarichai[2]-=1;
  } 
        document.getElementById("total_peshchai").innerHTML = tea_menu.peshawarichai[0];
    }
    else if(type==='elaich')
    {
        if (tea_menu.Elaichichai[0] > 0)
  { tea_menu.Elaichichai[0]-=1;
    tea_menu.Elaichichai[2]-=1;
  }     
     document.getElementById("total_elaichchai").innerHTML = tea_menu.Elaichichai[0];
    }
    else if(type==='herb')
    {
        if (tea_menu.Herbalchai[0] > 0)
  { tea_menu.Herbalchai[0]-=1;
    tea_menu.Herbalchai[2]-=1;
  }  
        document.getElementById("total_herbchai").innerHTML = tea_menu.Herbalchai[0];
    }
    
    else if(type==='amer')
    {
      if(hotc_menu.Americano[0] > 0){
        hotc_menu.Americano[0]-=1;
        hotc_menu.Americano[2]-=1;
      }
        document.getElementById("total_amer").innerHTML = hotc_menu.Americano[0];
    }
    else if(type==='capp')
    {
      if(hotc_menu.Cappuccino[0] > 0){
        hotc_menu.Cappuccino[0]-=1;
        hotc_menu.Cappuccino[2]-=1;
      }
        document.getElementById("total_capp").innerHTML = hotc_menu.Cappuccino[0];
    }
    else if(type==='latt')
    {
      if(hotc_menu.Latte[0] > 0){
        hotc_menu.Latte[0]-=1;
        hotc_menu.Latte[2]-=1;
      }
        document.getElementById("total_latt").innerHTML = hotc_menu.Latte[0];
    }
    else if(type==='frapp')
    {
      if(coldc_menu.Frappuccino[0] > 0){
        coldc_menu.Frappuccino[0]-=1;
        coldc_menu.Frappuccino[2]-=1;
      }
        document.getElementById("total_frapp").innerHTML = coldc_menu.Frappuccino[0];
    }
    else if(type==='smooth')
    {
      if(coldc_menu.Coffee_Smoothies[0] > 0){
        coldc_menu.Coffee_Smoothies[0]-=1;
        coldc_menu.Coffee_Smoothies[2]-=1;
      }
        document.getElementById("total_smooth").innerHTML = coldc_menu.Coffee_Smoothies[0];
    }
    else if(type==='iced')
    {
      if(coldc_menu.Iced_Coffee[0] > 0){
        coldc_menu.Iced_Coffee[0]-=1;
        coldc_menu.Iced_Coffee[2]-=1;
      }
        document.getElementById("total_iced").innerHTML = coldc_menu.Iced_Coffee[0];
    }
    else if(type==='brown')
    {
      if(desst.Brownies[0] > 0){
        desst.Brownies[0]-=1;
        desst.Brownies[2]-=1;
      }
        document.getElementById("total_brown").innerHTML = desst.Brownies[0];
    }
    else if(type==='muff')
    {
      if(desst.Muffins[0] > 0){
        desst.Muffins[0]-=1;
        desst.Muffins[2]-=1;
      }
        document.getElementById("total_muff").innerHTML = desst.Muffins[0];
    }
    else
    {
      if(desst.Cheesecake[0] > 0){
        desst.Cheesecake[0]-=1;
        desst.Cheesecake[2]-=1;
      }
        document.getElementById("total_chee").innerHTML = desst.Cheesecake[0];
    }
}
function cal(type) {
  let tmp=0;
    if(type==='kash'){
  if (tea_menu.kashmiriChai[0] > 0) {
    tmp=tea_menu.kashmiriChai[1];
    tea_menu.kashmiriChai[1] = tea_menu.kashmiriChai[0] * 200 + tmp;
    tea_menu.kashmiriChai[3] += tea_menu.kashmiriChai[1]
    document.getElementById("total").innerHTML = tea_menu.kashmiriChai[1];
  } else
    document.getElementById("total").innerHTML =
      "Aleast select one Chai to put in Cart";
    
    document.getElementById('total_kchai').innerHTML=0;
    tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.peshawarichai[0]=0;hotc_menu.Cappuccino[0]=0;hotc_menu.Latte[0]=0;hotc_menu.Americano[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Coffee_Smoothies[0]=0;coldc_menu.Iced_Coffee[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;
}
else if(type==='karak')
{
    if (tea_menu.Karakchai[0] > 0) {
      tmp=tea_menu.Karakchai[1];
        tea_menu.Karakchai[1] = tea_menu.Karakchai[0] * 250 + tmp;
        tea_menu.Karakchai[3] += tea_menu.Karakchai[1];
        document.getElementById("total_k").innerHTML = tea_menu.Karakchai[1];
      } else
        document.getElementById("total_k").innerHTML =
          "Aleast select one Chai to put in Cart";
    
  document.getElementById('total_karakchai').innerHTML=0;
  tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.peshawarichai[0]=0;hotc_menu.Cappuccino[0]=0;hotc_menu.Latte[0]=0;hotc_menu.Americano[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Coffee_Smoothies[0]=0;coldc_menu.Iced_Coffee[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;
}
else if(type==='pesh')
{
    if (tea_menu.peshawarichai[0] > 0) {
      tmp=tea_menu.peshawarichai[1];
        tea_menu.peshawarichai[1] = tea_menu.peshawarichai[0] * 150+tmp;
        tea_menu.peshawarichai[3] += tea_menu.peshawarichai[1];
        document.getElementById("total_pesh").innerHTML = tea_menu.peshawarichai[1];
      } else
        document.getElementById("total_pesh").innerHTML =
          "Aleast select one Chai to put in Cart";
document.getElementById('total_peshchai').innerHTML=0;
tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.kashmiriChai[0]=0;hotc_menu.Cappuccino[0]=0;hotc_menu.Latte[0]=0;hotc_menu.Americano[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Coffee_Smoothies[0]=0;coldc_menu.Iced_Coffee[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;
}
else if(type==='elaich')
{
    if (tea_menu.Elaichichai[0] > 0) {
      tmp=tea_menu.Elaichichai[1];
        tea_menu.Elaichichai[1] = tea_menu.Elaichichai[0] * 300 + tmp;
        tea_menu.Elaichichai[3] += tea_menu.Elaichichai[1];
        document.getElementById("total_elaich").innerHTML = tea_menu.Elaichichai[1];
      } else
        document.getElementById("total_elaich").innerHTML =
          "Aleast select one Chai to put in Cart";
 document.getElementById('total_elaichchai').innerHTML=0;
 tea_menu.kashmiriChai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.peshawarichai[0]=0;hotc_menu.Cappuccino[0]=0;hotc_menu.Latte[0]=0;hotc_menu.Americano[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Coffee_Smoothies[0]=0;coldc_menu.Iced_Coffee[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;
}
else if(type==='herb')
{
    if (tea_menu.Herbalchai[0] > 0) {
      tmp=tea_menu.Herbalchai[1];
        tea_menu.Herbalchai[1] = tea_menu.Herbalchai[0] * 350 + tmp;
        tea_menu.Herbalchai[3]+=tea_menu.Herbalchai[1];
        document.getElementById("total_herb").innerHTML = tea_menu.Herbalchai[1];
      } else
        document.getElementById("total_herb").innerHTML =
          "Aleast select one Chai to put in Cart";
document.getElementById('total_herbchai').innerHTML=0;
tea_menu.Elaichichai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.peshawarichai[0]=0;hotc_menu.Cappuccino[0]=0;hotc_menu.Latte[0]=0;hotc_menu.Americano[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Coffee_Smoothies[0]=0;coldc_menu.Iced_Coffee[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;
}
else if(type==='amer')
{
    if (hotc_menu.Americano[0] > 0) {
      tmp=hotc_menu.Americano[1];
      hotc_menu.Americano[1] = hotc_menu.Americano[0] * 600 + tmp;
      hotc_menu.Americano[3]+=hotc_menu.Americano[1];
        document.getElementById("totalamer").innerHTML = hotc_menu.Americano[1];
      } else
        document.getElementById("totalamer").innerHTML =
          "Aleast select one Chai to put in Cart";
document.getElementById('total_amer').innerHTML=0;
hotc_menu.Cappuccino[0]=0;hotc_menu.Latte[0]=0;tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.peshawarichai[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Coffee_Smoothies[0]=0;coldc_menu.Iced_Coffee[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;

}
else if(type==='latt')
{
    if (hotc_menu.Latte[0] > 0) {
      tmp=hotc_menu.Latte[1];
      hotc_menu.Latte[1] = hotc_menu.Latte[0] * 850 + tmp;
      hotc_menu.Latte[3]+=hotc_menu.Latte[1];
        document.getElementById("totallatt").innerHTML = hotc_menu.Latte[1];
      } else
        document.getElementById("totallatt").innerHTML =
          "Aleast select one Chai to put in Cart";
document.getElementById('total_latt').innerHTML=0;
hotc_menu.Americano[0]=0;hotc_menu.Cappuccino[0]=0;tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.peshawarichai[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Coffee_Smoothies[0]=0;coldc_menu.Iced_Coffee[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;

}
else if(type==='capp')
{
  if (hotc_menu.Cappuccino[0] > 0) {
    tmp=hotc_menu.Cappuccino[1];
    hotc_menu.Cappuccino[1] = hotc_menu.Cappuccino[0] * 1200 + tmp;
    hotc_menu.Cappuccino[3]+=hotc_menu.Cappuccino[1];
      document.getElementById("totalcapp").innerHTML = hotc_menu.Cappuccino[1];
    } else
      document.getElementById("totalcapp").innerHTML =
        "Aleast select one Chai to put in Cart";
document.getElementById('total_capp').innerHTML=0;
hotc_menu.Americano[0]=0;hotc_menu.Latte[0]=0;tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.peshawarichai[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Coffee_Smoothies[0]=0;coldc_menu.Iced_Coffee[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;



}
else if(type==='frapp')
{
    if (coldc_menu.Frappuccino[0] > 0) {
      tmp=coldc_menu.Frappuccino[1];
      coldc_menu.Frappuccino[1] = coldc_menu.Frappuccino[0] * 700 + tmp;
      coldc_menu.Frappuccino[3]+=coldc_menu.Frappuccino[1];
        document.getElementById("totalfrapp").innerHTML = coldc_menu.Frappuccino[1];
      } else
        document.getElementById("totalfrapp").innerHTML =
          "Aleast select one Chai to put in Cart";
document.getElementById('total_frapp').innerHTML=0;
hotc_menu.Cappuccino[0]=0;hotc_menu.Latte[0]=0;tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.peshawarichai[0]=0;coldc_menu.Iced_Coffee[0]=0;coldc_menu.Coffee_Smoothies[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;


}
else if(type==='smooth')
{
    if (coldc_menu.Coffee_Smoothies[0] > 0) {
      tmp=coldc_menu.Coffee_Smoothies[1];
      coldc_menu.Coffee_Smoothies[1] = coldc_menu.Coffee_Smoothies[0] * 1050 + tmp;
      coldc_menu.Coffee_Smoothies[3]+=coldc_menu.Coffee_Smoothies[1];
        document.getElementById("totalsmooth").innerHTML = coldc_menu.Coffee_Smoothies[1];
      } else
        document.getElementById("totalsmooth").innerHTML =
          "Aleast select one Chai to put in Cart";
document.getElementById('total_smooth').innerHTML=0;
hotc_menu.Americano[0]=0;hotc_menu.Cappuccino[0]=0;tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.peshawarichai[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Iced_Coffee[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;


}
else if(type==='iced')
{
  if (coldc_menu.Iced_Coffee[0] > 0) {
    tmp=coldc_menu.Iced_Coffee[1];
    coldc_menu.Iced_Coffee[1] = coldc_menu.Iced_Coffee[0] * 1250 + tmp;
    coldc_menu.Iced_Coffee[3]+=coldc_menu.Iced_Coffee[1];
      document.getElementById("totaliced").innerHTML = coldc_menu.Iced_Coffee[1];
    } else
      document.getElementById("totaliced").innerHTML =
        "Aleast select one Chai to put in Cart";
document.getElementById('total_iced').innerHTML=0;
hotc_menu.Americano[0]=0;hotc_menu.Latte[0]=0;tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.peshawarichai[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Coffee_Smoothies[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;desst.Cheesecake[0]=0;


}

else if(type==='brown')
{
    if (desst.Brownies[0] > 0) {
      tmp=desst.Brownies[1];
      desst.Brownies[1] = desst.Brownies[0]* 1500 + tmp;
      desst.Brownies[3]+=desst.Brownies[1];
        document.getElementById("totalbrown").innerHTML = desst.Brownies[1];
      } else
        document.getElementById("totalbrown").innerHTML =
          "Aleast select one Chai to put in Cart";
document.getElementById('total_brown').innerHTML=0;
hotc_menu.Cappuccino[0]=0;hotc_menu.Latte[0]=0;tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.peshawarichai[0]=0;coldc_menu.Iced_Coffee[0]=0;coldc_menu.Coffee_Smoothies[0]=0;desst.Cheesecake[0]=0;desst.Muffins[0]=0;


}
else if(type==='muff')
{
    if (desst.Muffins[0] > 0) {
      tmp=desst.Muffins[1];
      desst.Muffins[1] = desst.Muffins[0] * 1700 + tmp;
      desst.Muffins[3]+=desst.Muffins[1];
        document.getElementById("totalmuff").innerHTML = desst.Muffins[1];
      } else
        document.getElementById("totalmuff").innerHTML =
          "Aleast select one Chai to put in Cart";
document.getElementById('total_muff').innerHTML=0;
hotc_menu.Americano[0]=0;hotc_menu.Cappuccino[0]=0;tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.peshawarichai[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Iced_Coffee[0]=0;desst.Brownies[0]=0;desst.Cheesecake[0]=0;


}
else
{
  if (desst.Cheesecake[0] > 0) {
    tmp=desst.Cheesecake[1];
    desst.Cheesecake[1] = desst.Cheesecake[0] * 3000 + tmp;
    desst.Cheesecake[3]+=desst.Cheesecake[1];
      document.getElementById("totalchee").innerHTML = desst.Cheesecake[1];
    } else
      document.getElementById("totalchee").innerHTML =
        "Aleast select one Chai to put in Cart";
document.getElementById('total_chee').innerHTML=0;
hotc_menu.Americano[0]=0;hotc_menu.Latte[0]=0;tea_menu.Elaichichai[0]=0;tea_menu.Herbalchai[0]=0;tea_menu.Karakchai[0]=0;tea_menu.kashmiriChai[0]=0;tea_menu.peshawarichai[0]=0;coldc_menu.Frappuccino[0]=0;coldc_menu.Coffee_Smoothies[0]=0;desst.Brownies[0]=0;desst.Muffins[0]=0;


}



var dataarray = [tea_menu,hotc_menu,coldc_menu,desst];
for (let i = 0; i < 4; i++) {
  categ[i]=Object.keys(dataarray[i]);   
}
const x= Array.from(document.querySelectorAll('.cart_item'));

for (let i = 0; i < 4; i++) {
categ[i].forEach(element => {
    if(dataarray[i][element][0]>0)
    {
        x[ind].innerHTML=element+":"+dataarray[i][element][0];
          ind++;
          dataarray[i][element][0]=0;
    }
    tea_total+=dataarray[i][element][1];
    document.getElementsByClassName("total_box")[0].innerHTML=tea_total+" Rs";
    dataarray[i][element][1]=0;   
});
}

}
function datasender()
{
  const x= Array.from(document.querySelectorAll('.cart_item')); var flag1=0;var flag2=0 ;var categg=[];
  var dataarray = [tea_menu,hotc_menu,coldc_menu,desst];
  for (let i = 0; i < 4; i++) {
    categg[i]=Object.keys(dataarray[i]);   
  }
for (let i = 0; i < 16; i++) {

    if(x[i].textContent.trim() === '')
    {
        flag2=1;
        
    }
    else
    {
      flag1=1;
    }

}
    if(flag1===1){
  document.getElementById('outpt').innerHTML="your order has been placed successfully";
  document.getElementById('upt').innerHTML=`<button class="chkout btn upt" onclick="update();location.href='/update'">Update Cart</button>`
  for (let i = 0; i < 16; i++) {
    x[i].innerHTML="";
    
  }
var xhr= new XMLHttpRequest();
xhr.open("POST","/item_data",true);
xhr.setRequestHeader("Content-Type","application/json");
xhr.send(JSON.stringify(dataarray));
    }
    else
    {
      document.getElementById('outpt').innerHTML="Add atleast one item to cart to Successfully Place Your Order";

    }
  
}
function hotc()
{
  if (
    document.getElementsByClassName("hotc_menu")[0].style.display === "block"
  ) {
    document.getElementsByClassName("hotc_menu")[0].style.display = "none";
  } else document.getElementsByClassName("hotc_menu")[0].style.display = "block";

}
function dess()
{
  if (
    document.getElementsByClassName("dess_menu")[0].style.display === "block"
  ) {
    document.getElementsByClassName("dess_menu")[0].style.display = "none";
  } else document.getElementsByClassName("dess_menu")[0].style.display = "block";


}
function update()
{
  var dataarray = [tea_menu,hotc_menu,coldc_menu,desst];
var xhr= new XMLHttpRequest();
xhr.open("POST",'/update_cart',false);
xhr.setRequestHeader("Content-Type","application/json");
xhr.send(JSON.stringify(dataarray));


}


