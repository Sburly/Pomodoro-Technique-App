const menuBtn = document.querySelectorAll("#showMenu");
const menu = document.querySelectorAll("#menu");
const svg = document.querySelectorAll(".svg--list");

document.addEventListener("click", e => {
    const el = document.elementFromPoint(e.clientX, e.clientY);
    console.log(menuBtn.length);
    if(Array.from(menuBtn).includes(el) || Array.from(svg).includes(el)){
        for(let m of menu) {
            m.classList.add("noDisplay");
            if(el.dataset.pomo === m.dataset.pomo) {
                m.style.left = e.clientX + 'px';
                m.style.top = e.clientY + 'px';
                m.classList.toggle("noDisplay")
            }
        }
    } else {
        for(let m of menu) {
            m.classList.add("noDisplay");
        }
    }
});