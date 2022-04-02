



const ide= document.getElementById("ide");
const gomb= document.getElementById("gomb");
let osszegdiak=0;
let osszegfelnott=0;


function szamol(a){
const db= document.getElementById("db").value;
    osszegdiak+=a;
    osszegfelnott+=a;

    if (diak.checked){
        ide.innerHTML=osszegdiak + " Ft";
    }
    
  else{
    ide.innerHTML=osszegfelnott + " Ft";
  }
}

gomb.addEventListener("click",()=>{
if(diak.checked){
    szamol(2000*db.value);
}
else{
    szamol(4000*db.value);
}
   

});


