const Btn = document.querySelector("#add")
const istatus = document.querySelector("h5")
let check = 0

Btn.addEventListener('click',function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = 'green'
        check = 1
        Btn.innerHTML = "Remove Friend"
    } else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = 'red'
        check = 0
        Btn.innerHTML = "Add Friend"
    }
})
 
