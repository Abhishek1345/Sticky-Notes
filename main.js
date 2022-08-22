var target;
window.onload = function() {
  var n=localStorage.getItem("n");
  makeNotes();
  if(n!=null){
    for(var i=0;i<n;i++){
      makeNotes();
    }
  }
  if (localStorage.getItem("notes") != null) {
    var str=localStorage.getItem("notes");
    var notes=document.querySelectorAll(".content");
    for(var i=0;i<notes.length;i++){
    var subStr=str.slice(0,str.indexOf('$'));
    notes[i].innerHTML=subStr;
    str=str.slice(str.indexOf('$')+1);
    }
    // l.value = localStorage.getItem("notes");
    // document.getElementById("limit").innerHTML = 100 - l.value.length;
  } 
  else {
    document.querySelector(".content").innerHTML = "Double click to edit";
  }
  
  }


function getWriter() {
  document.querySelector(".writer").style.display = "flex";
  
  var l = document.getElementById("val");
  l.value=target.getElementsByClassName("content")[0].innerHTML;
  document.getElementById("limit").innerHTML = 100 - l.value.length;
}


// var note = document.querySelector(".sticky-note");

//   note.addEventListener("dblclick", () => {
//     target =this;
//     getWriter();
    
//   });



function save() {
  var val = document.getElementById("val").value;
  var writer = document.querySelector(".writer");
  var note = document.querySelectorAll(".content");
   
  target.getElementsByClassName("content")[0].innerHTML = val;
  writer.style.display = "none";
val="";
  for(var i=0;i<note.length;i++){
       val+=note[i].innerHTML+'$';
  }
  
  localStorage.setItem("notes", val);
}

function StickyNote(obj, content) {
  this.obj = obj;
  this.obj.appendChild(content);
  var container=document.querySelector(".container");
  container.insertBefore(this.obj, document.getElementsByClassName("writer")[0]);
  this.obj.addEventListener("dblclick", () => {
    target = obj;
    getWriter();
    
 

  });
}

document.getElementById("val").addEventListener("keyup", () => {
  var l = document.getElementById("val").value.length;
  var limit = document.getElementById("limit");
  limit.innerHTML = 100 - l;
  if (l >= 100) {
    limit.style.color = "red";
  } else {
    limit.style.color = "green";
  }
});

document.getElementsByClassName("add")[0].addEventListener("click",makeNotes);
function makeNotes(){
  var sticky = document.createElement("div");
  var content = document.createElement("div");
  var n=document.querySelectorAll(".content").length;
  sticky.className = "sticky-note";
  content.className = "content";
  localStorage.setItem("n",n.toString())
  var sn = new StickyNote(sticky, content);
}