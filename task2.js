// const p=document.createElement();
// p.innerHTML="i am trying";
// const img=document.createElement("img");
// const h1=document.createElement("h1");
// const input=document.createElement("input");
// const button=document.createElement("button");

const p=document.querySelectorAll('p');
const img=document.getElementById('img');
const h=document.querySelectorAll('h1');
const input=document.getElementById('input');
const bu=document.getElementById('button1');

bu.addEventListener('click', fun1)

//foreach to change p,h style by clikcing on button
function fun1(){
    p.forEach((p)=>{p.style.fontStyle="arial"
    p.style.backgroundColor="yellow"});
    h.forEach((h)=>{h.style.fontSize='12px'
    h.style.color="red"});
}

img.addEventListener("mouseover",changeImage)
img.addEventListener("mouseout",returnImage)
img.addEventListener("contextmenu",onRightClick)
input.addEventListener("input",alertFunction)

function changeImage(){
    img.style.width='70%';
    img.style.height='70p%';
}
function returnImage(){
    img.style.width='50%';
    img.style.height='50p%';
}
function alertFunction(){
    if(input.value.length){
        alert("hi");
    }
}

p.forEach(p=>p.addEventListener("mouseover",putHighlight));
p.forEach(p=>p.addEventListener("mouseout",takeHighlight));

function putHighlight(){
   p.forEach(p=>p.style.backgroundColor="yellow");    
}
function takeHighlight(){
    p.forEach(p=>p.style.backgroundColor="white");
}
window.onload = () => alert('page has been loaded');

function onRightClick(){
    alert("don't click here please");
}
// el.addEventListener('contextmenu', function(ev) {
//     ev.preventDefault();
//     alert('success!');
//     return false;
// }, false);