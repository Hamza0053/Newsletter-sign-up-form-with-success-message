let emailfield=document.querySelector('.Input-field')
let emailerror=document.querySelector('.email-error')
let main= document.querySelector('.main-in')
let dismiss= document.querySelector('.dismiss')
console.log(main)

function subscribe(){

    console.log(emailfield.value)
    if(emailfield.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.style.display="none"
        document.querySelector('.updated').style.display="none"
        document.querySelector('.Img-picture').style.display="none"
     document.querySelector('.thanks-full').style.display="flex"
      main.classList.add('main-updated')
      document.querySelector('.send-email').innerText=emailfield.value
    }
    else{
        console.log("not mated")
        emailfield.style.color="red"
        emailerror.style.display="block"
    }
}

function dismissMe(){
    document.querySelector('.updated').style.display="flex"
    document.querySelector('.Img-picture').style.display="block"
   document.querySelector('.thanks-full').style.display="none"
    main.classList.remove('main-updated')
    emailfield.value=""
}


