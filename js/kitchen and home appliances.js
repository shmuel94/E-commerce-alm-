var divs4 = document.getElementById("container");
var Kitchen = [];
for (let i = 0; i < Prodects.length; i++) {
  if(Prodects[i].category == "Kitchen and home appliances"){
    for (let j = -1; j < Kitchen.length; j++) {
      kaha = {
        id: Prodects[i].id,
        name: Prodects[i].name,
        price: Prodects[i].price,
        description: Prodects[i].description,
        category: Prodects[i].category,
        pictur1: Prodects[i].pictur1,
        pictur2: Prodects[i].pictur2
      }
    }Kitchen.push(kaha)
  } 
}

for (let i = 0; i < Kitchen.length; i++) {
  divs4.innerHTML +=`<div id="container{i}"><div><img class="imgs" src="${Kitchen[i].pictur1}"><img class="imgs" src="${Kitchen[i].pictur2}"><br>id:${Kitchen[i].id}<br>name:${Kitchen[i].name}<br>price:${Kitchen[i].price}<br>description:${Kitchen[i].description}<br>category:${Kitchen[i].category}</div><br><button class="btn">Add to cart</button></div>`
}

let btn5 = document.getElementsByClassName("btn");
for (let i = 0; i < Kitchen.length; i++) {
  btn5[i].onclick = () => {
    newOrder = {
      id: Kitchen[i].id,
      name: Kitchen[i].name,
      price: Kitchen[i].price,
      description: Kitchen[i].description,
      category: Kitchen[i].category,
      pictur1: Kitchen[i].pictur1,
      pictur2: Kitchen[i].pictur2
    }
    customerCart.push(newOrder)
    console.log(customerCart);
  }
}