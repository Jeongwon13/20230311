const maincheckBox = document.querySelector(".mainCheckBox");
const li = document.querySelector(".li");
const div = document.querySelector(".div1");
 

const enter = document.querySelector(".mainInput");
    enter.addEventListener("change", e => {

const div = document.createElement("div");
    div.classList.add("div1");
    
const checkBox = document.createElement("input");
        checkBox.classList.add("checkBox");
        checkBox.setAttribute("type","checkbox");

const li = document.createElement("li");
    li.classList.add("li"); // <li class="li"></li>

const span = document.createElement("span");
    span.classList.add("span1");
    span.innerHTML = "&times;";

 


div.append(checkBox,li,span);
document.querySelector(".ul").append(div);
enter.focus();

 
span.addEventListener("click", e => {
    e.target.parentElement.remove();
});

if(!enter.value) {
    alert("할 일을 입력해 주세요.");
} else {
    li.innerText = enter.value;
    enter.value = "";
}



checkBox.addEventListener("change", e => {
    
    if(checkBox.checked) {
    li.style.textDecoration = "line-through";
    li.style.textDecorationThickness = "2px"
    li.style.textDecorationLineLength = "50%";

    } else {
    li.style.textDecoration = "none";
    }
})

    });
 

maincheckBox.addEventListener("click", e => {
    if(maincheckBox.checked) {
      

    }
});


    
document.querySelector(".Btn1").addEventListener("click", e => {
    createElement();

});


maincheckBox.addEventListener("click", e => {
     

});


// maincheckBox.addEventListener("change", e => {
//     const liElements = document.querySelectorAll(".li"); // 모든 li 요소 가져오기
//     if (maincheckBox.checked) {
//       liElements.forEach(li => {
//         li.style.textDecoration = "line-through";
//       });
//     } else {
//       liElements.forEach(li => {
//         li.style.textDecoration = "none";
//       });
//     }
//   });