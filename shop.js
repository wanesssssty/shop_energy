const shopimageGallery = document.querySelector(".shop-page-container");
const imageGallery = document.querySelector(".monster-container");
const imageGallery2 = document.querySelector(".monster-container2");

const images = [
  {
    url: "./img/violet-ultra",
    description: "MONSTER ENERGY ZERO SUGAR LEWIS HAMILTON 500ML",
    price: "149₴"
  },
  {
    url: "./img/lewis.png",
    description: "MONSTER ENERGY NITRO SUPER DRY 500ML",
    price: "99₴"
  },
  {
    url: "./img/nitro.png",
    description: "MONSTER ENERGY NITRO 500ML",
    price: "59₴"
  },
  {
    url: "./img/monster-classic.webp",
    description: "MONSTER ENERGY CLASSIC ORIGINAL 500ML",
    price: "79₴"
  },
  {
    url: "./img/punch-pacific",
    description: "MONSTER ENERGY PACIFIC PUNCH JUICE 500ML",
    price: "99₴"
  },
  {
    url: "./img/pipeline-punch.png",
    description: "MONSTER ENERGY PIPELINE PUNCH JUICE 500ML",
    price: "89₴"
  }
];

let cart = [];

function addToCart(imageObject) {
  const existingItem = cart.find(item => item.description === imageObject.description);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    imageObject.quantity = 1;
    cart.push(imageObject);
  }
  updateCart();
}

function createImageCard(imageObject) {
  const imageCard = document.createElement("div");
  imageCard.classList.add("monster-container-3");

  const image = document.createElement("img");
  image.src = imageObject.url;
  image.alt = "Monster Energy";

  const imageDescription = document.createElement("p");
  imageDescription.classList.add("text-monsters");
  imageDescription.textContent = imageObject.description;

  const priceButton = document.createElement("button");
  priceButton.classList.add("price-monsters");
  priceButton.textContent = `${imageObject.price}`;
  priceButton.addEventListener("click", () => addToCart(imageObject));

  imageCard.appendChild(image);
  imageCard.appendChild(imageDescription);
  imageCard.appendChild(priceButton);

  return imageCard;
}

function updateCart() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = "";

  cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = `${item.description} - ${item.price}`;

    const quantityContainer = document.createElement("div");
    quantityContainer.classList.add("quantity-container");

    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
        updateCart();
      }
    });

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = item.quantity;
    quantityInput.addEventListener("change", (event) => {
      const value = parseInt(event.target.value);
      if (value > 0) {
        item.quantity = value;
        updateCart();
      }
    });

    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", () => {
      item.quantity++;
      updateCart();
    });

    quantityContainer.appendChild(decreaseButton);
    quantityContainer.appendChild(quantityInput);
    quantityContainer.appendChild(increaseButton);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Видалити";
    removeButton.addEventListener("click", () => {
      removeFromCart(item);
    });

    cartItem.appendChild(itemDescription);
    cartItem.appendChild(quantityContainer);
    cartItem.appendChild(removeButton);
    cartItemsContainer.appendChild(cartItem);
  });

  const cartTotal = document.querySelector(".cart-total");
  const totalPrice = cart.reduce((total, item) => total + (parseInt(item.price) * item.quantity), 0);
  cartTotal.textContent = `Всього: ${totalPrice}₴`;

  const purchaseButton = document.querySelector(".purchase-button");
  purchaseButton.removeEventListener("click", handlePurchase);
  purchaseButton.addEventListener("click", handlePurchase);
}

function handlePurchase() {
  const totalPrice = cart.reduce((total, item) => total + (parseInt(item.price) * item.quantity), 0);
  if (totalPrice > 0) {
    alert(`Покупка пройшла успішно! Всього: ${totalPrice}₴`);
    cart.length = 0;
    updateCart();
  } else {
    alert("Корзина пуста.");
  }
}

function removeFromCart(itemToRemove) {
  cart = cart.filter(item => item !== itemToRemove);
  updateCart();
}

function openCartModal() {
  const cartModal = document.querySelector(".cart-modal");
  cartModal.style.display = "block";
}

function closeCartModal() {
  const cartModal = document.querySelector(".cart-modal");
  cartModal.style.display = "none";
}

document.querySelector(".basket-img").addEventListener("click", openCartModal);
document.querySelector(".close-cart-modal").addEventListener("click", closeCartModal);

function loadInitialImages() {
  for (let i = 0; i < 3; i++) {
    imageGallery2.appendChild(createImageCard(images[i]));
  }
}

function loadMore() {
  const loadButton = document.querySelector(".load-buttons button");
  loadButton.style.display = "none";

  for (let i = 3; i < images.length; i++) {
    imageGallery.appendChild(createImageCard(images[i]));
  }
}

loadInitialImages();

function handleSortChange() {
  const sortSelect = document.getElementById("sortSelect");
  const sortValue = sortSelect.value;

  let sortedImages;
  if (sortValue === "name") {
    sortedImages = [...images].sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortValue === "price-down") {
    sortedImages = [...images].sort((a, b) => parseInt(b.price) - parseInt(a.price));
  } else if (sortValue === "price-up") {
    sortedImages = [...images].sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } else {
    sortedImages = images;
  }

  imageGallery.innerHTML = "";
  imageGallery2.innerHTML = "";

  for (let i = 0; i < sortedImages.length; i++) {
    if (i < 3) {
      imageGallery2.appendChild(createImageCard(sortedImages[i]));
    } else {
      imageGallery.appendChild(createImageCard(sortedImages[i]));
    }
  }
}

document.getElementById("sortSelect").addEventListener("change", handleSortChange);


const barColors = ['#FF6384', '#36A2EB', '#FFCE56', '#5C33F6', '#8FE768', '#FF5733', '#33FFBD', '#CE33FF'];

function displayCart() {
    new Chart(document.getElementById("myChart"), {
        type: "pie",
        data: {
            labels: cart.map(item => item.description),
            datasets: [{
                backgroundColor: barColors,
                data: cart.map(item => item.quantity)
            }]
        },
        options: {
            title: {
                display: true,
                text: "Статистика корзини"
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'black'
                    }
                }
            }
        }
    });
}

function displayCartBar() {
    new Chart(document.getElementById("myBar"), {
        type: "bar",
        data: {
            labels: cart.map(item => item.description),
            datasets: [{
                backgroundColor: barColors,
                data: cart.map(item => item.quantity)
            }]
        },
        options: {
            title: {
                display: true,
                text: "Статистика корзини"
            }
        }
    });
}

function displayCartRadar() {
    new Chart(document.getElementById("myRadar"), {
        type: "radar",
        data: {
            labels: cart.map(item => item.description),
            datasets: [{
                backgroundColor: barColors,
                data: cart.map(item => item.quantity)
            }]
        },
        options: {
            title: {
                display: true,
                text: "Статистика корзини"
            }
        }
    });
}

function handleSelectStatistic() {
    const select = document.getElementById("SelectStatistic");
    const selectedValue = select.value;
    
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('myBar').style.display = 'none';
    document.getElementById('myRadar').style.display = 'none';

    if (selectedValue === "pie") {
        document.getElementById('myChart').style.display = 'flex';
        displayCart(); 
    } else if (selectedValue === "bar") {
        document.getElementById('myBar').style.display = 'flex';
        displayCartBar(); 
    } else if (selectedValue === "radar") {
        document.getElementById('myRadar').style.display = 'flex';
        displayCartRadar(); 
    }
}

document.getElementById('myChart').style.display = 'none';
document.getElementById('myBar').style.display = 'none';
document.getElementById('myRadar').style.display = 'none';
