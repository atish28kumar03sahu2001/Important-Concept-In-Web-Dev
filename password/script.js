document.addEventListener("submit",(e)=>{
    e.preventDefault();
    let p1 = document.getElementById("IP1").value;
    let p2 = document.getElementById("IP2").value;

    let p3 = document.createElement("P");
    p3.innerHTML = `${p1}---${p2}`;
    document.body.appendChild(p3);
})
let Button = document.getElementById("BTN").addEventListener("click",()=>{
    let p2 = document.getElementById("IP2");
    p2.type = (p2.type === 'password') ? 'text' : 'password';
    document.getElementById("BTN").innerHTML = (p2.type === 'password') ? '+' : '-';
});
document.getElementById("BTN").innerHTML = (p2.type === 'password') ? '+' : '-';