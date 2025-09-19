// 

// 

  function contact (event){
    event.preventDefault();
    // emailjs
    // .sendForm(
    //     'service_xl19eom',
    //     'template_aiwsn37',
    //     event.target,
    //     "sY21Of6ET8YaubR4g"
    // ).then(() => {
    //     console.log("it worked")
    // })


const loading = document.querySelector(".modal__overlay--loading");
const sucess = document.querySelector(".modal__overlay--success");
loading.classList += " modal__overlay--visible"
setTimeout(() => {
    loading.classList.remove("modal__overlay--visible")
    console.log("it worked")
}, 1000)

  }