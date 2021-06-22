console.log("Welcome to form validation")
let Name = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let validname = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#Success').hide();
Name.addEventListener("blur", () => {
    console.log("blur event listener is fired")
    let reg = /^[a-zA-Z]([a-zA-Z0-9]){2,13}[0-9]$/
    str = Name.value;
    console.log(reg, str)
    if (reg.test(str)) {
        console.log("name is matched")
        Name.classList.remove("is-invalid")
        validname = true;
    } else {
        console.log("name is not matched")
        Name.classList.add("is-invalid")
        validname = false;
    }
})
email.addEventListener("blur", () => {
    console.log("blur event listener is fired")
    let reg = /^([0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    str = email.value;
    console.log(reg, str)
    if (reg.test(str)) {
        console.log("email is matched")
        email.classList.remove("is-invalid")
        validEmail = true;
    } else {
        console.log("email is not matched")
        email.classList.add("is-invalid")
        validEmail = false;
    }
})
phone.addEventListener("blur", () => {
    console.log("blur event listener is fired")
    let reg = /^\+?9?1?([0-9])$/
    str = phone.value;
    console.log(reg, str)
    if (reg.test(str)) {
        console.log("phone is matched")
        phone.classList.remove("is-invalid")
        validPhone = true;
    } else {
        console.log("phone is not matched")
        phone.classList.add("is-invalid")
        validPhone = false;
    }
})

let btnNew = document.getElementById("btnNew").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("form is clicked by submited ")
    console.log(validname, validEmail, validPhone)
    if (validname && validEmail && validPhone) {
        let Success = document.getElementById("Success")
         Success.classList.add("show")
            $('#Success').show();
            $('#failure').hide();
            setTimeout(() => {
                Success.remove()
            }, 2000);   
            setTimeout(() => {
                const myForm = document.getElementById("myForm")
                myForm.reset();
            }, 3000);   
            
    } else {
        let failure = document.getElementById("failure")
      
        failure.classList.add("show")
        $('#Success').hide();
        $('#failure').show();
        setTimeout(()=> {
            failure.remove()
        }, 2000);

    }
})
