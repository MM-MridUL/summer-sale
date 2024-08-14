// first card
document.getElementById('first-card').addEventListener('click',function(){

    const productPrice=getProductPrice('card1-price');
    const previousTotalPrice=getPreviousTotalPrice('total-price');

    addToProductEntry('K. Accessories')

     const totalPrice = productPrice+ previousTotalPrice ;
    setElementValueById('total-price',totalPrice);
    // btn disabled and enabled
    btnEnableAndDisabled(totalPrice);
    btnApplyEnableAndDisabled(totalPrice);
});

// second card
document.getElementById('second-card').addEventListener('click',function(){

    const productPrice=getProductPrice('card2-price');
    const previousTotalPrice=getPreviousTotalPrice('total-price');

    addToProductEntry('H. Accessories')

     const totalPrice = productPrice+ previousTotalPrice ;
    setElementValueById('total-price',totalPrice);
    // btn disabled and enabled
    btnEnableAndDisabled(totalPrice);
    btnApplyEnableAndDisabled(totalPrice);
});
// third-card
document.getElementById('third-card').addEventListener('click',function(){

    const productPrice=getProductPrice('card3-price');
    const previousTotalPrice=getPreviousTotalPrice('total-price');

    addToProductEntry('Home Cooker')

     const totalPrice = productPrice+ previousTotalPrice ;
    setElementValueById('total-price',totalPrice);
    // btn disabled and enabled
    btnEnableAndDisabled(totalPrice);
    btnApplyEnableAndDisabled(totalPrice);
});
// fourth card
document.getElementById('fourth-card').addEventListener('click',function(){

    const productPrice=getProductPrice('card4-price');
    const previousTotalPrice=getPreviousTotalPrice('total-price');

    addToProductEntry('Sports Black Cap')

     const totalPrice = productPrice+ previousTotalPrice ;
    setElementValueById('total-price',totalPrice);
    // btn disabled and enabled
    btnEnableAndDisabled(totalPrice);
    btnApplyEnableAndDisabled(totalPrice);
});
// fifth card
document.getElementById('fifth-card').addEventListener('click',function(){

    const productPrice=getProductPrice('card5-price');
    const previousTotalPrice=getPreviousTotalPrice('total-price');

    addToProductEntry('Full Jersey Set')

     const totalPrice = productPrice+ previousTotalPrice ;
    setElementValueById('total-price',totalPrice);
    // btn disabled and enabled
    btnEnableAndDisabled(totalPrice);
    btnApplyEnableAndDisabled(totalPrice);
});
// sixth card
document.getElementById('sixth-card').addEventListener('click',function(){

    const productPrice=getProductPrice('card6-price');
    const previousTotalPrice=getPreviousTotalPrice('total-price');

    addToProductEntry('Sports cates')

     const totalPrice = productPrice+ previousTotalPrice ;
    setElementValueById('total-price',totalPrice);

    // btn disabled and enabled
    btnEnableAndDisabled(totalPrice);
    btnApplyEnableAndDisabled(totalPrice);
});
// input field fillup by SELL200
const applyButton= document.getElementById('input-field').addEventListener('keyup',function inputValue(event){

    const text=event.target.value;
    const applyButton= document.getElementById('btn-apply');
    console.log(text);
    return text;

   })  



//    apply button clicked
document.getElementById('btn-apply').addEventListener('click',function(){

    const inputField=document.getElementById('input-field');
    const inputText=inputField.value;
   
    if(inputText==='SELL200'){
        const totalPriceElement=document.getElementById('total-price');
        const totalPriceString=totalPriceElement.innerText;
        const totalPrice=parseFloat(totalPriceString);
        const result=totalPrice*(20/100);
        console.log(result);
        // discount total
        const discountElement=document.getElementById('discount');
        const discountTotalString=discountElement.innerText;
        const discountTotal=parseFloat(discountTotalString);
        const discount=discountTotal+result;
        const discountTwoDecimalString=discount.toFixed(2);
        const discountTwoDecimal=parseFloat(discountTwoDecimalString);
        discountElement.innerText=discountTwoDecimal;
        console.log(typeof discountTwoDecimal)
        // total
        const totalElement=document.getElementById('total');
        const total=totalPrice-discountTwoDecimalString;
        totalElement.innerText=total;
    }
    else{
        alert('Please eneter SELL200');
    }


})
// modal button
document.getElementById('modal').addEventListener('click',function(){
    const inputField=document.getElementById('input-field');
    inputField.value='';
    const productEntry=document.getElementById('add-product');
    productEntry.innerText='';
    const totalPriceElement=document.getElementById('total-price');
    totalPriceElement.innerText='00';
    const discountElement=document.getElementById('discount');
    discountElement.innerText='00';
    const totalElement=document.getElementById('total');
    totalElement.innerText='00';
    
    
})

//when total pricr >0, then button wii be enabled
function btnEnableAndDisabled(price){

    if(price>0){
        const btnPurchase= document.getElementById('btn-purchase');

        btnPurchase.removeAttribute('disabled');
        btnPurchase.classList.add('bg-pink-600');

    }
    else{
        btnPurchase.setAttribute('disabled',true);
    }
}
// when total pricr >200, then button wii be enabled
function btnApplyEnableAndDisabled(price){
    if(price>=200){
        const btnApply=document.getElementById('btn-apply');
        btnApply.removeAttribute('disabled');
        btnApply.classList.add('bg-pink-600');
    }
    else{
        btnApply.setAttribute('disabled',true);
    }

}




// uttilities function
function getProductPrice(productId){
    const cardElement =document.getElementById(productId);
    const productPriceString=cardElement.innerText;
    const productPrice=parseFloat(productPriceString);
    return productPrice;

}
function getPreviousTotalPrice(totalPriceId){
    const totalPriceElement =document.getElementById(totalPriceId);
    const previousTotalPriceString=totalPriceElement.innerText;
    const previousTotalPrice=parseFloat(previousTotalPriceString);
    return previousTotalPrice;


}
function setElementValueById(totalPriceId,value){

    const totalPriceElement= document.getElementById(totalPriceId);
    totalPriceElement.innerText=value;

}


function addToProductEntry( productName){
    console.log(productName);
    const productEntry=document.getElementById('add-product');

    const count=productEntry.childElementCount;
    const p=document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML= `${count+1}. ${productName}`;
    productEntry.appendChild(p);



}
