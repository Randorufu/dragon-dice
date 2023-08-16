function toggle_sides(id) {
     var e = document.getElementById(id);
     var x = document.getElementById(id).parentNode;
     var children = x.children;
     if(e.style.display == 'inline-grid') {
        e.style.display = 'none';
        x.style.display = 'none';
     } else {
        for (var i=0; i<children.length; i++) children[i].style.display="none";
        e.style.display = 'inline-grid';
        x.style.display = 'block';
     }
 }

function toggle_desc(id) {
     var e = document.getElementById(id);
     var x = document.getElementById(id).parentNode;
     var children = x.children;
     for (var i=0; i<children.length; i++) children[i].style.display="none";
     e.style.display = "block";
     x.style.display = "block";
 }

function toggle_dragon(id) {
     var e = document.getElementById(id);
     var x = document.getElementById(id).parentNode;
     var z = document.getElementById(id).parentNode.parentNode;
     var children = x.children;
     if(e.style.display == 'inline-grid') {
        e.style.display = 'none';
        z.style.display = 'none';
     } else {
        for (var i=0; i<children.length; i++) children[i].style.display="none";
        e.style.display = 'inline-grid';
        z.style.display = 'block';
     }
 }

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
  navigator.serviceWorker
    .register("./sw.js")
    .then(res=>console.log("service worker registered"))
    .catch(err=>console.log("serice worker not registered", err))
})
}
