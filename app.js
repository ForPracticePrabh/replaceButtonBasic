const btnYes = document.getElementById("yes")

btnYes.addEventListener("click", function(){
    alert("Awwwleleleelele, but I dont!");
});


const btnNo = document.getElementById("no");

btnNo.addEventListener("click", function(){
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    btnNo.style.left = i+"px";
    btnNo.style.top = j+"px";
});