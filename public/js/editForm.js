const editFormButtons = document.querySelectorAll("#editFormBtn");
const editForms = document.querySelectorAll("#formEditPomodoro");
const cancelEditBtn = document.querySelectorAll("#cancelEditFormButton");
const saveEditBtn = document.querySelectorAll("#saveEditFormButton");
const deleteBtn = document.querySelectorAll("#deleteBtn");
const editPomos = document.querySelectorAll(".pomodoro");

for(let btn of [...cancelEditBtn, ...saveEditBtn]) {
    btn.addEventListener("click", function(){
        for(let form of editForms) {
            if(form.dataset.pomo === btn.dataset.pomo) {
                form.classList.add("noDisplay");
            }
        };
        for(let pom of editPomos) {
            if(pom.dataset.pomo === btn.dataset.pomo) {
                pom.classList.remove("noDisplay");
                pom.scrollIntoView();
            }
        }
    });
};

for(let btn of editFormButtons) {
    btn.addEventListener("click", function(){
        for(let form of editForms) {
            if(form.dataset.pomo === btn.dataset.pomo) {
                form.classList.remove("noDisplay");
                form.scrollIntoView();
            }
        };
        for(let pom of editPomos) {
            if(pom.dataset.pomo === btn.dataset.pomo) {
                pom.classList.add("noDisplay");
            }
        }
    });
};