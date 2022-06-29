let menu = document.querySelector(".burger")
let menu_x = document.querySelector(".burger-x")
let links = document.querySelector(".links")

menu.addEventListener('click', function(){
    if(menu.style.display = "block"){
        menu.style.display = "none"
        menu_x.style.display = "block"
        links.style.display = "block"
    }
})

menu_x.addEventListener('click', function(){
     if(menu_x.style.display = "block"){
        menu_x.style.display = "none"
        menu.style.display = "block"
        links.style.display = "none"
    } else {
        menu_x.style.display = "none"
    }
})