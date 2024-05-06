const textln = document.getElementById("textln");
const subbtn = document.getElementById("subbtn");
const place1 = document.getElementById("place1");
let age;

subbtn.onclick = function(){

    age = textln.value;
    age = Number(age);

    if(age < 18){
        window.alert("You are not suitable to stay here");
        document.getElementById("place1").textContent = "You are underage"
        location.replace("https://www.youtubekids.com/");
    }
    else if(age >= 18){
        window.alert("You are suitable to stay at here");
        document.getElementById("place1").textContent = "You are adult";
        location.replace("https://www.fuck.com");
    }
}