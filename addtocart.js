const product = [
  {
    id: 0,
    image: "image/1.jpg",
    title: "nutella",
    price: 100,
    count: 1,
  },
  {
    id: 1,
    image: "image/2.jpg",
    title: "white chocolate",
    price: 120,
    count: 1,
  },
  {
    id: 2,
    image: "image/3.jpg",
    title: "baskin chocolate",
    price: 145,
    count: 1,
  },
  {
    id: 3,
    image: "image/4.jpg",
    title: "jellybean",
    price: 85,
    count: 1,
  },
  {
    id: 4,
    image: "image/5.jpg",
    title: "choco cup cake",
    price: 30,
    count: 1,
  },
  {
    id: 5,
    image: "image/6.jpg",
    title: "chocolate cake",
    price: 250,
    count: 1,
  },
  {
    id: 6,
    image: "image/7.jpg",
    title: "chco pastry",
    price: 30,
    count: 1,
  },
  {
    id: 7,
    image: "image/8.jpg",
    title: "chocolate egg set",
    price: 240,
    count: 1,
  },
  {
    id: 8,
    image: "image/9.jpg",
    title: "chocolate donut",
    price: 50,
    count: 1,
  },
  {
    id: 9,
    image: "image/10.jpg",
    title: "butterscotch choco cupcake",
    price: 45,
    count: 1,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let i = 0;

document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
           <div class='img-box'>
              <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00<h2>
        ` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
    </div>`
    );
  })
  .join("");

let cart = [];
function addtocart(a) {
  if (cartlength() == 8) return;

  const targetObj = cart.find((obj) => obj.id === a);
  console.log(targetObj);
  if (targetObj) {
    targetObj.count = targetObj.count + 1;
  } else cart.push({ ...categories[a] });
  console.log(cart);
  displaycart();
}

function cartlength() {
  var count = 0;
  cart.map((items) => {
    count += items.count;
  });
  return count;
}

function delElement(a) {
  // cart.splice(a, 1);
  var count = cart[a].count;
  count--;
  if (count === 0) cart.splice(a, 1);
  else cart[a].count = count;

  displaycart();
}

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cartlength();
  if (cartlength() == 0) {
    document.getElementById("cartItem").innerHTML = "your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else if (cartlength() == 8) {
    document.getElementById("cartItem").innerHTML =
      "your cart is full\n" +
      cart
        .map((items) => {
          var { image, title, price, count } = items;
          total = total + count * price;
          document.getElementById("total").innerHTML = "$ " + total + ".00";
          return (
            `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${count}  X  $ ${price}.00</h2>` +
            "<i class='fa-solid fa-trash' onclick='delElement(" +
            j++ +
            ")'></i></div>"
          );
        })
        .join("");
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price, count } = items;
        total = total + count * price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${count}  X  $ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
