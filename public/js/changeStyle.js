const pomoStyle = document.querySelector("#p--button");
const sbStyle = document.querySelector("#sb--button");
const lbStyle = document.querySelector("#lb--button");
const html = document.querySelector("html")

function style(params="default") {
    html.className = "";
    html.classList.add(params);
}

function selectedBtn(btn) {
    for(let b of [pomoStyle, sbStyle, lbStyle]) b.classList.remove("button-switch--selected");
    btn.classList.add("button-switch--selected");
}

pomoStyle.addEventListener("click", () => {
    style();
    selectedBtn(pomoStyle);
});

sbStyle.addEventListener("click", () => {
    style("sb");
    selectedBtn(sbStyle);
})

lbStyle.addEventListener("click", () => {
    style("sb");
    selectedBtn(lbStyle);
})