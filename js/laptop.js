var divs3 = document.getElementById("container");
var laptop = [];
for (let i = 0; i < Prodects.length ; i++) {
  if(Prodects[i].category == "laptop"){
      for (let j = -1; j < laptop.length; j++) {
    lat = {
      id: Prodects[i].id,
      name: Prodects[i].name,
      price: Prodects[i].price,
      description: Prodects[i].description,
      category: Prodects[i].category,
      pictur1: Prodects[i].pictur1,
      pictur2: Prodects[i].pictur2
    }
  }laptop.push(lat)
  }
} 

for (let i = 0; i < laptop.length; i++) {
divs3.innerHTML +=`<div id="container{i}"><div><img class="imgs" src="${laptop[i].pictur1}"><img class="imgs" src="${laptop[i].pictur2}"><br>id:${laptop[i].id}<br>name:${laptop[i].name}<br>price:${laptop[i].price}<br>description:${laptop[i].description}<br>category:${laptop[i].category}</div><br><button class="btn">Add to cart</button></div>`
}

let btn3 = document.getElementsByClassName("btn");
for (let i = 0; i < laptop.length; i++) {
btn3[i].onclick = () => {
  newOrder = {
    id: laptop[i].id,
    name: laptop[i].name,
    price: laptop[i].price,
    description: laptop[i].description,
    category: laptop[i].category,
    pictur1: laptop[i].pictur1,
    pictur2: laptop[i].pictur2
  }
  customerCart.push(newOrder)
  console.log(customerCart);
}
}