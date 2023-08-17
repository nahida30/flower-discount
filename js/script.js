let total = 0;
let selectedFlowersName = [];
function clickBtn(target){
    const selectedItem = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[1].innerText;  
    if(!selectedFlowersName.includes(itemName)){
        selectedFlowersName.push(itemName);
        const li = document.createElement('li');
        li.innerText = itemName;
        selectedItem.appendChild(li);
    // console.log(itemName);    
    }
        const price = target.parentNode.childNodes[5].innerText.split (" ")[1];
        console.log(price);
    // console.log(price);
        total = parseInt(total) + parseInt(price);
        document.getElementById('total').innerText = total;  
}

function couponBtn(){
    // console.log('click');
    const couponName = document.getElementById('coupon-input');
    const couponNameString = couponName.value;
    console.log(couponNameString);
    if(couponNameString === 'Hero'){
        const discount = 100;
        const grandTotal = total - discount;
        couponName.value = '';


        document.getElementById('discount-value').innerText = discount;
        document.getElementById('grand-total').innerText = grandTotal;
    }
    else{
        alert("Invalid discount code.");
    }
}