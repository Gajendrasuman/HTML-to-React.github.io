var navs = document.querySelector('.nav-icon');
var uls = document.querySelector('nav ul');
z = 0
navs.onclick = ()=>{
    if (z == 0){
        uls.style.display = "block";
        navs.setAttribute("class","nav-icon checked")
        z = 1

    }
    else{
        uls.style.display = "none"
        navs.removeAttribute("class", "checked")
        navs.setAttribute("class","nav-icon")
        z = 0
    }
}
window.onresize = () => {
    if (window.innerWidth > 900 ){
        uls.style.display = "flex";
    }
    else{
        uls.style.display = "none";
        navs.removeAttribute("class", "checked")
        navs.setAttribute("class","nav-icon")
        z = 0
    }
}
