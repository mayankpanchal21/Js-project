const body = document.getElementsByTagName('body')[0];


function setcolor(name){
    body.style.backgroundColor = name;
}

function randomcolor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    const c = `rgb(${r} ,${g} ,${b})`;
    body.style.backgroundColor = c;
}

