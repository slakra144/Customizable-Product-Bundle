const product = [
  {
    id: 0,
    image: "image/1.jpg",
    title: "nutella",
    price: 100,
  },
  {
    id: 1,
    image: "image/2.jpg",
    title: "white chocolate",
    price: 120,
  },
  {
    id: 2,
    image: "image/3.jpg",
    title: "baskin chocolate",
    price: 145,
  },
  {
    id: 3,
    image: "image/4.jpg",
    title: "jellybean",
    price: 85,
  },
  {
    id: 4,
    image: "image/5.jpg",
    title: "choco cup cake",
    price: 30,
  },
  {
    id: 5,
    image: "image/6.jpg",
    title: "chocolate cake",
    price: 250,
  },
  {
    id: 6,
    image: "image/7.jpg",
    title: "chco pastry",
    price: 30,
  },
  {
    id: 7,
    image: "image/8.jpg",
    title: "chocolate egg set",
    price: 240,
  },
  {
    id: 8,
    image: "image/9.jpg",
    title: "chocolate donut",
    price: 50,
  },
  {
    id: 9,
    image: "image/10.jpg",
    title: "butterscotch choco cupcake",
    price: 45,
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

var cart = [];
function addtocart(a) {
  if (cart.length == 8) return;
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else if (cart.length == 8) {
    document.getElementById("cartItem").innerHTML =
      "your cart is full\n" +
      cart
        .map((items) => {
          var { image, title, price } = items;
          total = total + price;
          document.getElementById("total").innerHTML = "$ " + total + ".00";
          return (
            `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
            "<i class='fa-solid fa-trash' onclick='delElement(" +
            j++ +
            ")'></i></div>"
          );
        })
        .join("");
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
