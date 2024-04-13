var tablinks= document.getElementsByClassName("sub-three2");
var tabcontents= document.getElementsByClassName("middle-con");
var tabpages= document.getElementsByClassName("sub-seg");

 let count2=localStorage.getItem("counte");

 var interval;

let count=localStorage.getItem("counter");

 var output = document.getElementById("count2");
 var underscore = document.getElementById("underscore");
var roller = document.querySelector(".rol");
var touches = document.getElementsByClassName("sp3");


interval = setInterval(()=>{
    localStorage.getItem("counte")
    count2 = parseInt(count2)

    localStorage.setItem("counte",count2)

    if(count2 == 500){
        return(interval);
      
    }else{
        count2 = count2 + 1;
    }
    underscore.innerHTML=count2
}, 1000)



  function countscore(){

 output.innerText=count;
 count++
    localStorage.setItem("counter",count)

   output.innerText=count
  
    
    if(count2 < 1){
        alert("Energy exhausted");
    }else{
        count2 = count2 - 1;
    }
   
  
   
 
 
   
    
    roller.classList.toggle("rol-back")
}


function openpage(tabname){
    for(tabpage of tabpages){
        tabpage.classList.remove("active-page");
    }
   
    event.currentTarget.classList.add("active-page");
 
}




function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

  function claim(){
   let pclain= document.getElementById("pclaim").innerHTML=1000;
   pclain + count
localStorage.getItem("pclaim")
   localStorage.setItem("pclaim", pclain)
  }





