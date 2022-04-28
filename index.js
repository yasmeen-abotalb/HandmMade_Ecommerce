//   nav bar
  $(function() {
      $(".toggle").on("click", function() {
          if ($(".item").hasClass("active")) {
              $(".item").removeClass("active");
          } else {
              $(".item").addClass("active");
          }
      });
  });

// forget pass
  const steps = Array.from(document.querySelectorAll("form .step"));  
 const nextBtn = document.querySelectorAll("form .next-btn");  
 const form = document.querySelector("form");  
 nextBtn.forEach((button) => {  
  button.addEventListener("click", () => {  
   changeStep("next");  
  });  
 });    

 function changeStep(btn) {  
  let index = 0;  
  const active = document.querySelector(".active");  
  index = steps.indexOf(active);  
  steps[index].classList.remove("active");  
  if (btn === "next") {  
   index++;  
  }
  steps[index].classList.add("active");  
  }
 
//  products page  
  var list = document.querySelectorAll('.list');
  var card = document.querySelectorAll('.pro-card');
  for(let i =0; i<list.length; i++){
    list[i].addEventListener('click',function(){
      for(let j=0; j<list.length; j++){
        list[j].classList.remove('activeted');
      }
      this.classList.add('activeted');
      
      let dataFilter = this.getAttribute('data-filter');
      for(let k= 0; k<card.length; k++){
        card[k].classList.remove('active');
        card[k].classList.add('hide');
        if(card[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
          card[k].classList.remove('hide');
          card[k].classList.add('active');
        }
      }
    });
  }
  
  // pass product

//   let carts = document.querySelectorAll('.btn-add');
//   let products = [
//     {
//     name : 'crochet bag',
//     tag : 'crochet bag',
//     price : 150,
//     incart :0
//   },
//   {
//     name : 'Blue necklace',
//     tag : 'Blue necklace',
//     price : 60,
//     incart :0
//   },
//   {
//     name : 'Dream catcher',
//     tag : 'Dream catcher',
//     price : 80,
//     incart :0
//   },
//   {
//     name : 'candle',
//     tag : 'candle',
//     price : 50,
//     incart :0
//   }
// ]
//   for(let y =0 ; y<carts.length ; y++){
//     carts[y].addEventListener('click',()=>{
//       cartNumbers(products[y]);
//     })
//   }
//   // function when load page number cart not hide
//   function onlLoadCartNumbers(){
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if(productNumbers){
//       document.querySelector('.counter').textContent = productNumbers;
//     }
//   }
//   // function count number product in cart
//   function cartNumbers(product){
//     // console.log("the product is clicked is", product)
//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);
//     if(productNumbers){
//       localStorage.setItem('cartNumbers',productNumbers+1);
//       document.querySelector('.counter').textContent = productNumbers + 1;

//     }else{
//       localStorage.setItem('cartNumbers',1);
//       document.querySelector('.counter').textContent =1;
//     }
//     setItem(product);
//   }
  
//   function setItem(product){
//     // console.log("inside setitem function");
//     // console.log("my product is",product);
//     let cartItems =localStorage.getItem('productsInCart');
//     // pares from jason to javascript object
//     cartItems =JSON.parse(cartItems);
//     // console.log('my cart items are',cartItems);

//     if(cartItems != null ){
      
//       if (cartItems[product.tag] == undefined) {
//         cartItems = {
//           ...cartItems,
//           [product.tag]:product
//         }
//       }
//       cartItems[product.tag].incart += 1;
//     }else{
//       product.incart = 1;
//       cartItems ={
//         [product.tag]:product
//                   }
//           }  
//     localStorage.setItem("productsInCart",JSON.stringify(cartItems))
//   }
//   onlLoadCartNumbers();

// btn go up
$(function () {
  var btn = $("#go-top");
  $(window).scroll(function () {
      if ($(this).scrollTop() >= 100) {
          btn.show();
      }
      else {
          btn.hide();
      }
  });
  btn.click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500);
  });

});

//slider product

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 40,
  loop:true,
  speed:1000,
  autoplay:{
    delay:1500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});


