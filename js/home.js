// add money to the account
// step-1'add an event handler to the add money button inside the from
document.getElementById('btn-show-add-money').addEventListener('click',function(event){
    // prevent page reload after from submit
   event.preventDefault()
    // step-2:get money to be added to the account balance
    const addMoneyInput=document.getElementById('input-add-money').value
    console.log( addMoneyInput)
    // get the pin number provided
    const pinNumberInput=document.getElementById('input-pin-number').value
    console.log(pinNumberInput)
    // step-3:verify the pin number
    // wrong way to validate  pin number
    if(pinNumberInput==='12345'){
        console.log('adding money to your account')
         // step-4:get the current balance
    const ammount=document.getElementById('current-ammount').innerText
    console.log(ammount)
    // step-5:add addMoney input with ammount
    const addMoneyNumber=parseFloat(addMoneyInput)
    const ammountNumber=parseFloat(ammount)
    const newBlance=addMoneyNumber+ammountNumber
     console.log( newBlance)
    //  update the blance in the UI/DOM
    document.getElementById('current-ammount').innerText=newBlance
    }
    else{
        alert('failed to add money')
    }
   
})


// show the cash out from
document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    // show cash out button clicked
    console.log('show cash out button clicked')
    document.getElementById('cash-out-form').classList.remove('hidden')
    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden')

})

// show add money from and hide the cash out from
document.getElementById('btn-show-money-add').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden')

    document.getElementById('cash-out-form').classList.add('hidden')
})