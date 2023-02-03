const addFormButton = document.querySelector("#addFormButton");
const form = document.querySelector("#formPomodoro");
const cancelBtn = document.querySelector("#cancelFormButton");
const saveBtn = document.querySelector("#saveFormButton");
const upBtn = document.querySelector("#addFormNumberUp");
const downBtn = document.querySelector("#addFormNumberDown");
const inputNumber = document.querySelector("#addFormNumberInput");
const pomodoros = document.querySelectorAll(".pomodoro");

addFormButton.addEventListener("click", function(){
    inputNumber.value = 1;
    form.classList.toggle("noDisplay");
    form.scrollIntoView();
});

cancelBtn.addEventListener("click", function(){
    form.classList.add("noDisplay");
});

saveBtn.addEventListener("click", function(){
    form.classList.add("noDisplay");
});

upBtn.addEventListener("click", function(){
    inputNumber.value = Number(inputNumber.value) + 1;
});

downBtn.addEventListener("click", function(){
    if (inputNumber.value > 1) {
        inputNumber.value = Number(inputNumber.value) - 1;
    };
});

for (let pomo of pomodoros) {
    pomo.addEventListener("click", function(){
        for (let p of pomodoros) p.classList.remove("selected");
        pomo.classList.add("selected");
    });
};