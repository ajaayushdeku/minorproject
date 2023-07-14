const form = document.querySelector("form"),
submit =form.querySelector(".submit");
allInput = form.querySelectorAll(".first input");

submit.addEventListener("click", ()=>{
    allInput.forEach(input => {
        if(input.value == ""){
            alert("input is empty");
        }

    });
})



