function showAddress(){
    document.querySelector('#creditcard').classList.add("hide");
    document.querySelector('#btnCredit').classList.remove("selected");
    document.querySelector('#btnAddress').classList.add("selected");
}
function showCredit(){
    document.querySelector('#creditcard').classList.remove("hide");
    document.querySelector('#btnAddress').classList.remove("selected");
    document.querySelector('#btnCredit').classList.add("selected");
}

'use strict' ;
// variables
var payAmountBtn = document.querySelector('#payAmount');
var decrementBtn =document.querySelectorAll('#decrement');
var incrementBtn =document.querySelectorAll('#increment');
var quantityElem =document.querySelectorAll('#quantity');
var priceElem =document.querySelectorAll('#price');
var subtotalElem =document.querySelector('#subtotal');
var taxElem =document.querySelector('#tax');
var totalElem =document.querySelector('#total');

// add event in increment and decrement
for(let i = 0; i< incrementBtn.length; i++){
    incrementBtn[i].addEventListener('click',function(){
        let increment = Number(this.previousElementSibling.textContent);
        increment++;
        this.previousElementSibling.textContent = increment;
        totalCalc();
    });

    decrementBtn[i].addEventListener('click',function(){
        let decrement = Number(this.nextElementSibling.textContent);
        decrement <= 1 ? 1: decrement--;

        this.nextElementSibling.textContent = decrement;
        totalCalc();
    
    });
}

var totalCalc = function(){
    var tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    for(let i = 0; i< quantityElem.length; i++){
        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
    }
    subtotalElem.textContent = subtotal.toFixed(2);
    totalTax = subtotal *tax;
    taxElem.textContent = totalTax.toFixed(2);
    total = subtotal + totalTax;
    totalElem.textContent = total.toFixed(2);
    payAmountBtn.textContent = total.toFixed(2);

}


var closeBtn = document.querySelectorAll("#product-colse-btn");
function remove(){
    document.querySelector(".card-cart").removeAttribute();
}