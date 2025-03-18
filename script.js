const navLink=document.querySelectorAll(".navullink")
const menuOpen = document.querySelector("#menu-open-button");
const menuClose = document.querySelector("#menu-close-button");
menuOpen.addEventListener("click",()=>{
  document.body.classList.toggle("showMenu");
});
menuClose.addEventListener("click",()=>
   menuOpen.click()
  );

  navLink.forEach(Link=>{
    Link.addEventListener("click",()=>
      menuOpen.click()
  );
  });


//initialize swiper
  const swiper = new Swiper('.sliderwrap', {
   
    loop: true,
   spaceBetween:20,
   grabCursor:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //Responsive
    breakpoints:{
      0:{
        slidesPerView:1
      },
      750:{
        slidesPerView:2
      },
      1024:{
        slidesPerView:3
      }
    }
  
  });