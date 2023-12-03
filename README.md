# Customizable-Product-Bundle
a feature that allows customers to build a custom pack of 8 items, consisting of a combination of different chocolates. The total number of items in the custom pack should not exceed 8, and the price must be calculated automatically based on the selected products.

## HTML structure:

### 1. container
create a container div for entire carousel
```html
    <div class="container">
        <div id="root">
              <!-- this the section to display the different item  -->
        </div>
        <div class="sidebar">
              <!--   this is the sidebar for the items inside of your cart  -->
        </div>
    </div>
```
#### a) Product Display:
Create a section to display detail and picture of each product
```html
 <div class='box'>
     <div class='img-box'>
         <img class='images' src=${image}></img>
     </div>
     <div class='bottom'>
         <p>${title}</p>
         <h2>$ ${price}.00<h2>
         <button onclick='addtocart()'>Add to cart</button>
    </div>
</div>
```

#### b) Shopping Cart:
Create a section to display the shopping cart items
```html
 <div class='cart-item'>
     <div class='row-img'>
         <img class='rowing' src=${image}>
     </div>
     <p style='font-size:12px;'>${title}</p>
     <h2 style='font-size: 15px;'>$ ${price}.00</h2>
     <i class='fa-solid fa-trash' onclick='delElement()'></i>
 </div>
```

## CSS Styling:

### 1. Styling the Products on Display
style each product card/box by modify the height, width of image then modifying the alignment, border padding of the box  

### 2. Styling the Cart Items
do similar styling to showcase the selected items according to width & size of the sidebar

## JavaScript Functionality:

### 1. Add to Cart Function:
Create a function to add a product to the shopping cart 

```js
function addtocart(a) {
  if (cart.length == 8) return;
  cart.push({ ...categories[a] });
  displaycart();
}
```

### 2. Delete from Cart Function:
Create a function to delete a product from the shopping cart
```js
 function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}
```

### 3. Additional Functionality
create a displaycart() function which would display all the selected item in the sidebar, calculate the total cost of selected items & updates the number of & price of items whenever its get updated
