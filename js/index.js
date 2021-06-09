// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  let subTotal = Number(price) * Number(quantity);

  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');

  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let totalPrice = 0;

  let products = document.querySelectorAll('.product');

  products.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  document.getElementById('total-value').innerHTML = `Total: $${totalPrice}`;
}

// ITERATION 4 - BONUS

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const target = event.currentTarget;
  const buttonHolder = target.parentElement;
  const productToBeRemoved = buttonHolder.parentElement;
  productToBeRemoved.parentElement.removeChild(productToBeRemoved);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
