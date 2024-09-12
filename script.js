const showHiddenPress =(loginPass, loginEye)=>{
    const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', ()=>{
        if(input.type === 'password'){
            input.type = 'text'

            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-line')
        }else{
            input.type = 'password'

            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-line')
        }
    })
}

showHiddenPress('login-pass', 'login-eye')