window.onload=function(){
  if(localStorage.getItem("notes")!=null){
document.querySelector(".content").innerHTML=localStorage.getItem("notes");
  var l=document.getElementById("val");
  l.value=localStorage.getItem("notes");
document.getElementById("limit").innerHTML=100-l.value.length;
  }
  else{
    document.querySelector(".content").innerHTML="Double click to edit";
    }
  }
  
  function getWriter(){
    document.querySelector(".writer").style.display="flex";
    }

var note=document.querySelector(".sticky-note");
note.addEventListener("dblclick",getWriter);
   
   function save(){
     var val=document.getElementById("val").value;
     var writer=document.querySelector(".writer");
     var note=document.querySelector(".content");
     
     note.innerHTML=val;
     writer.style.display="none";
     localStorage.setItem("notes",val);
     }
  
 document.getElementById("val").addEventListener("keyup",()=>{
 var l=document.getElementById("val").value.length;
  var limit=document.getElementById("limit");
  limit.innerHTML=100-l;
  if(l>=100){
    limit.style.color="red";
    }
    else{
      limit.style.color="green";
      }
  });
  
  document.getElementsByClassName("add")[0].addEventListener("click",()=>{
    
  var sticky=document.createElement("div");
  var content=document.createElement("div");
  
  sticky.addEventListener("dblclick",getWriter);
  sticky.className="sticky-note";
  content.className="content";
  sticky.appendChild(content);
  //document.getElementsByClassName("container")[0].insertBefore(sticky,document.getElementsByClassName("writer")[0]);
  document.body.insertBefore(sticky,document.getElementsByClassName("writer")[0])
  });