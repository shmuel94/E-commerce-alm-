let customerCart = [   
{id: 1, name:"Blender NUTRIBULLET COMBO 1600W", price:790, description:"A blender jug with a volume of 1.8 liters", category:"Kitchen and home appliances", pictur1:"../images/kaha_1.1.png", pictur2:"../images/kaha_1.2.png"},
{id: 2, name:"Evoke 100109 Murphy Electric Kettle", price:379, description:"Filter for initial filtration of the water before boiling to ensure high water quality", category:"Kitchen and home appliances", pictur1:"../images/kaha_2.1.png", pictur2:"../images/kaha_2.2.png"},
{id: 3, name:"Vacuum cleaner and floor washer with JIMMY HW8 removable", price:1299, description:"2 separate tanks (separate water, separate dirty water)", category:"Kitchen and home appliances", pictur1:"../images/kaha_3.1.png", pictur2:"../images/kaha_3.2.png"},
{id: 4, name:"Manual coffee machine EC785GY METALLICS Delonghi DeLonghi", price:1099, description:"Manual milk frothing system with Panarello for fast and perfect whipping", category:"Kitchen and home appliances", pictur1:"../images/kaha_4.1.png", pictur2:"../images/kaha_4.2.png"}
];
console.log(customerCart);

let sum = 0;
let sumArray = []
const tableDivs = document.getElementById("cartTable");
for (let i = 0; i < customerCart.length; i++) {
    tableDivs.innerHTML += `<tr class="cartTableRow">
    <td><img id="pic" src="${customerCart[i].pictur1}"></td>
    <td>${customerCart[i].name}</td>
    <td>${customerCart[i].description}</td>
    <td>${customerCart[i].category}</td>
    <td>${customerCart[i].price}</td>
    <td><button class="btn">-</button></td>
    </tr>`
    sum+= Number(customerCart[i].price);
    sumArray.push(Number(customerCart[i].price));
    }
let total = document.getElementById("total");
total.innerText += `total : ${sum} NIS`

let btn2 = document.getElementsByClassName("btn");
const divs = document.getElementsByClassName(`cartTableRow`);
for (let i = 0; i < customerCart.length; i++) {
btn2[i].onclick = () => {
  customerCart.splice(0, 1);
  divs[i].innerHTML = " ";
  sum-=sumArray[i]
  total.innerText = `total : ${sum} NIS`
  console.log(customerCart);
  console.log(sum);
}
}