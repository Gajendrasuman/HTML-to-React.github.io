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

CurrentScrollPos = window.scrollY
window.onscroll = ()=>{
    if(window.scrollY === 0){
        document.querySelector('nav').style = "background: transparent;\
        border-bottom: none; position: none; box-shadow: none;"  
        CurrentScrollPos = window.scrollY 
    }
    else if(window.scrollY < CurrentScrollPos){
        document.querySelector('nav').style = "top:-8rem; position: fixed;";
        CurrentScrollPos = window.scrollY
    }
    else if(window.scrollY > CurrentScrollPos){
        document.querySelector('nav').style = "background: #fff; \
        border-bottom: 0.1rem solid var(--primary); position: fixed;\
        top:0; left:0;box-shadow: 0 0 3px 1px var(--primary);\
        ";
        CurrentScrollPos = window.scrollY
    }

    

}