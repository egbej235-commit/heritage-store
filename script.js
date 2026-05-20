const item= document.querySelector('input[type="text]');
const price= document.querySelector('input[type="number"]');
const addBtn= document.querySelector('add');

const list = document.querySelector('list');
const calculate = document.querySelector(".calculate");

const price =[];

const addlist = () => {
    const itemValue = item.value;
    const itemprice = price.value;
    

    if (itemValue === "" || itemprice === "") {
        alert("item or price cannot be empty");
        return;
    }

    price.push(parseFloat(itemprice));

    const div = document.createElement("div");
    const itemH4 = document.createElement("h4");
    const priceH4 = document.createElement("h4");
    const button = document.createElement("button");

    itemH4.textContent = `${itemValue}`;
    priceH4.textContent = `${itemprice}`;
    button.textContent = "X";

    //Event for cancel button
    button.addEventListener("click", () => {
        div.innerHTML = "";
    });


    div.appendChild(itemH4);
    div.appendChild(priceH4);
    div.appendChild(button);

    div.classList.add("item");

    list.appendChild(div);

    item.value = "";
    price.value = "";
}

const calculateTotal = () => {
    const total = document.querySelectorAll(".h4");
    const sumoflist = Math.sumprecise(price);

    total.innerHTML = `<h3>Total: ${sumoflist}</h3>`;
};

addBtn.addEventListener("click", addTolist);
calculate.addEventListener("click", calculateTotal);