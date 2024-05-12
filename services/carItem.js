async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subTotal(), 0);
  console.log(result);
}

async function removeItem(userCart, item) {

  const index = userCart.findIndex((p) => p.name === item.name);

  if(index == -1) {
    console.log('item não encontrado')
    return;
  }

  if(userCart[index].quantity > 1) {
    userCart[index].quantity -= 1
    return;
  }

  if(userCart[index].quantity === 1) {
    userCart.splice(index, 1)
    return;
  }
}


async function deleteItem(userCart, index) {


  const deleteIndex =  index -1

  if(index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1)
  }




}

async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal: ${item.subTotal()}`
    );
  });
}

export { addItem, removeItem, deleteItem, calculateTotal, displayCart };
