var divs6 = document.getElementById("container");
var washing = [];
for (let i = 0; i < Prodects.length; i++) {
  if(Prodects[i].category == "washing machines and dryers"){
      for (let j = -1; j < washing.length; j++) {
    wmad = {
      id: Prodects[i].id,
      name: Prodects[i].name,
      price: Prodects[i].price,
      description: Prodects[i].description,
      category: Prodects[i].category,
      pictur1: Prodects[i].pictur1,
      pictur2: Prodects[i].pictur2
    }
  }washing.push(wmad)
  }
} 

for (let i = 0; i < washing.length; i++) {
divs6.innerHTML +=`<div id="container{i}"><div><img class="imgs" src="${washing[i].pictur1}"><img class="imgs" src="${washing[i].pictur2}"><br>id:${washing[i].id}<br>name:${washing[i].name}<br>price:${washing[i].price}<br>description:${washing[i].description}<br>category:${washing[i].category}</div><br><button class="btn">Add to cart</button></div>`
}

let btn6 = document.getElementsByClassName("btn");
for (let i = 0; i < washing.length; i++) {
btn6[i].onclick = () => {
  newOrder = {
    id: washing[i].id,
    name: washing[i].name,
    price: washing[i].price,
    description: washing[i].description,
    category: washing[i].category,
    pictur1: washing[i].pictur1,
    pictur2: washing[i].pictur2
  }
  customerCart.push(newOrder)
  console.log(customerCart);
}
}