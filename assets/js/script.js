// menu display on mobile viewport
const menuBtn=document.querySelector('#nav__toggle')
const handleMenuClick=()=>{
    const menuList=document.querySelector('.nav__links')
    let closeBtn=document.querySelector('#close__btn')
    menuList.classList.toggle('show')
    closeBtn.classList.toggle('show')
  }

menuBtn.addEventListener('click',handleMenuClick)

const closeBtn=document.querySelector('#close__btn')

closeBtn.addEventListener('click',handleMenuClick)