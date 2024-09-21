document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
   const cashOut= document.getElementById('input-cash-out').value
   const pinNumber=document.getElementById('input-cash-out-pin').value
   console.log(cashOut,pinNumber)
//    wrong way to verify pin number
if(pinNumber==='12345'){
    const balance=document.getElementById('current-ammount').innerText
    console.log(balance)
    const blanceNumber=parseFloat(balance)
    const cashNumber=parseFloat(cashOut)
    // reduce the blance
    const newBlance=blanceNumber-cashNumber
    // update the ui
    document.getElementById('current-ammount').innerText=newBlance
    
    
}
else{
    alert('failed to cash out.please try again')
}

})
