// document.getElementById('button-login').addEventListener('click',function(){})

// step-1: set event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // step-2:prevent default behavior (prevent reloading browser)
    event.preventDefault()      // vejal to bigeners
    
    // step-3: get the phone number and the pin number
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value
    console.log(phoneNumber,pinNumber)

    // wrong way..use korbo na avabe
    if(phoneNumber==='4' && pinNumber==='1234'){
        console.log('logged in')
        window.location.href='./home.html'
    }
    else{
        alert('not logged in')
    }
})