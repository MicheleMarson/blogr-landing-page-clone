const link = document.querySelectorAll(".header__navContent")
const navBox = document.querySelector(".header__navBox")
const menu = document.querySelector(".header__menu")
let i

link.forEach((item1, index1) => {
  item1.addEventListener("click", () => {
    for(i = 0; i < link.length; i++){
      if(index1 == i && !link[index1].classList.contains("active")){
          link[i].classList.add("active")
      }else{
        link[i].classList.remove("active")
      }
    }
  })
})

menu.addEventListener("click", (e) => {
  if(navBox.classList.contains("active")){
    navBox.classList.remove("active")
  }else{
    navBox.classList.add("active")
  }
})
console.log(navBox);