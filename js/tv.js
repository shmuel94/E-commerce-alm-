var divs4 = document.getElementById("container");
var tvs = [];
for (let i = 0; i < Prodects.length; i++) {
  if(Prodects[i].category == "tv"){
      for (let j = -1; j < tvs.length; j++) {
    tv = {
      id: Prodects[i].id,
      name: Prodects[i].name,
      price: Prodects[i].price,
      description: Prodects[i].description,
      category: Prodects[i].category,
      pictur1: Prodects[i].pictur1,
      pictur2: Prodects[i].pictur2
    }
  }tvs.push(tv)
  }
} 

for (let i = 0; i < tvs.length; i++) {
divs4.innerHTML +=`<div id="container{i}"><div><img class="imgs" src="${tvs[i].pictur1}"><img class="imgs" src="${tvs[i].pictur2}"><br>id:${tvs[i].id}<br>name:${tvs[i].name}<br>price:${tvs[i].price}<br>description:${tvs[i].description}<br>category:${tvs[i].category}</div><br><button class="btn">Add to cart</button></div>`
}

let btn4 = document.getElementsByClassName("btn");
for (let i = 0; i < tvs.length; i++) {
btn4[i].onclick = () => {
  newOrder = {
    id: tvs[i].id,
    name: tvs[i].name,
    price: tvs[i].price,
    description: tvs[i].description,
    category: tvs[i].category,
    pictur1: tvs[i].pictur1,
    pictur2: tvs[i].pictur2
  }
  customerCart.push(newOrder)
  console.log(customerCart);
}
}