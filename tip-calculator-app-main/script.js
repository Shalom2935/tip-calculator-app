


function Process(tip_value){
   let tip_amount = document.querySelector(".amount-value");
   let total_amount = document.querySelector(".total-value");
   let bill = document.querySelector(".bill-value");
   let numbPerson = document.querySelector(".personnumb");
   if(numbPerson.value > 0){
      document.querySelector(".personnumb").style.border = 'none';
      let tipAmount = (tip_value*bill.value)/numbPerson.value;
     let totalAmount = bill.value/numbPerson.value + tipAmount;
     tip_amount.textContent = tipAmount.toFixed(2);
     total_amount.textContent = totalAmount.toFixed(2);
   }
   else{
      document.querySelector(".personnumb").style.border = 'solid 2px red';
      let error = document.createElement('p');
      error.className = 'error-message';
      error.innerHTML = 'Error!';
     // document.body.querySelector('.container .content .custom-input .numb-people .message').appendChild(p);
      document.querySelector(".error-message").style.color = 'red';
      document.querySelector(".error-message").style.float = 'right';
   }
   
 }
//document.querySelector(".reset").addEventListener("click", reset);
 
function reset(){
   let nul = '0.00';
   document.querySelector(".amount-value").textContent = nul;
   document.querySelector(".total-value").textContent = nul;
   document.querySelector(".bill-value").value ="";
   document.querySelector(".personnumb").value ="";
}