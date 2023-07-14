const container = document.querySelectorAll('#tesitmonial .review .container')
const dots = document.querySelectorAll('.dots')
function slide(n){
    //dots[n]
    if(n==0){
        container[n].setAttribute("class",'container active-slide-first')
        container[1].setAttribute('class', 'container')
        container[2].setAttribute('class', 'container')
    }
    else if(n==1){
        container[n].setAttribute("class",'container active-slide-second')
        container[0].setAttribute('class', 'container')
        container[2].setAttribute('class', 'container')
    }
    else{
        container[n].setAttribute("class",'container active-slide')
        container[0].setAttribute('class', 'container')
        container[1].setAttribute('class', 'container')
    }
}
//setInterval(()=>{

//},5000)