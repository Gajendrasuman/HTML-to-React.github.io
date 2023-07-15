const container = document.querySelectorAll('#tesitmonial .review .container')
const dots = document.querySelectorAll('.dots')
function slide(n){
    //dots[n]
    if(n==0){
        container[n].style.display = "grid"
        container[1].style.display = "none"
        container[2].style.display = "none"
    }
    else if(n==1){
        container[n].style.display = "grid"
        container[0].style.display = "none"
        container[2].style.display = "none"
    }
    else{
        container[n].style.display = "grid"
        container[1].style.display = "none"
        container[0].style.display = "none"
    }
}
//setInterval(()=>{

//},5000)