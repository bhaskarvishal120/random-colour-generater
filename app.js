const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    const h2=document.getElementById("color-code")
    //h2.innerText = randomCode;
    h2.innerHTML = "<i>" + randomCode+"</i>"

    //navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
console.log("vishal")
// init call
getColor();