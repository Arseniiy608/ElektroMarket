function Zomovutu() {
        let name = document.getElementById("reviewInputes").value;
    let review = document.getElementById("reviewTextareaes").value;
    let city = document.getElementById("reviewCityes").value;
    let number = document.getElementById("reviewNumberses").value;
    if (city === "") {
        alert("Будь ласка, введіть ваше місто.");
        return;
    }
    if (number === "") {
        alert("Будь ласка, введіть номер відділення.");
        return;
    }
    if (name === "") { 
        alert("Будь ласка, введіть ваше ім'я.");
        return;
    }
    if (review === "") {
        alert("Будь ласка, введіть ваш номер телефону.");
        return;
    }
    alert(name + ", Дякуємо за ваше замовлення! 💙 ваше замовлення успішно прийнято! Наш менеджер перевірить його та найближчим часом зателефонує вам для уточнення деталей. Дякуємо, що обираєте Voltix! Бажаємо гарного дня! ⚡");
    name = document.getElementById("reviewInputes").value = "";
    review = document.getElementById("reviewTextareaes").value = "";
    number = document.getElementById("reviewNumberses").value = "";
    city = document.getElementById("reviewCityes").value = "";
  }
  function Serbut () {
    let name = document.getElementById("reviewInput").value;
    let review = document.getElementById("reviewTextarea").value;
    if (name === "") { 
        alert("Будь ласка, введіть ваше ім'я.");
        return;
    }
    if (review === "") {
        alert("Будь ласка, введіть ваш відгук.");
        return;
    }
    alert(name + ", дякуємо за ваш відгук! Ваша думка допомагає Voltix ставати кращими!");
    name = document.getElementById("reviewInput").value = "";
    review = document.getElementById("reviewTextarea").value = "";
  }
document.addEventListener('DOMContentLoaded', () => {
    
    const swiper = new Swiper('.swiper', { 
loop: true, 
autoplay: {
delay: 4000, 
},
spaceBetween: 30, 
slidesPerView: 5, 
navigation: {
nextEl: '.swiper-button-next', 
prevEl: '.swiper-button-prev', 
},
  
    });

  



    

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.querySelector('.search-results');
if (searchButton) {
    searchButton.addEventListener('click', Products);
}
function Products() {
    const searchTerm = searchInput.value.toLowerCase();

    searchResults.innerHTML = '';

    if (searchTerm === '') {
        searchResults.classList.remove('show');
        return;
    }

    const products = document.querySelectorAll('.swiper-slide');

    const foundProduct = Array.from(products).find(product =>
        product.textContent.toLowerCase().includes(searchTerm)
    );

    if (foundProduct) {

        const productCard = foundProduct.cloneNode(true);

        productCard.classList.remove('swiper-slide');
        productCard.removeAttribute('style');

        searchResults.appendChild(productCard);

        searchResults.classList.add('show');



    } else {
        searchResults.textContent = 'Товар не знайдено';
        searchResults.classList.add('show');
    }
}
const butt = document.getElementById('reviewButton');
const myAlert = document.getElementById('myAlert');
const closeAlert = document.getElementById('closeAlert');
const buyButtons = document.querySelectorAll('.buy');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {

        const card = button.closest('.card');

        const name = card.querySelector('.card-text').textContent.trim();
        const price = Number(card.querySelector('.card-price').textContent.replace(/\D/g, ''));
        const image = card.querySelector('img').src;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProduct = cart.find(product => product.name === name);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                image: image,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Товар додано до кошика!');
    });
});
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

if (cartItems) {


cart.forEach((product) => {

    const item = document.createElement('div');
    item.classList.add('cart-card');

    item.innerHTML = `
        <img src="${product.image}" width="150">
        <h3>${product.name}</h3>
        <p>Ціна: ${product.price} грн</p>
        <div class="quantity">
    <button class="minus">−</button>
    <span>${product.quantity}</span>
    <button class="plus">+</button>
</div>
        <button class="delete-btn">Видалити</button>
    `;
    const minus = item.querySelector('.minus');
const plus = item.querySelector('.plus');
const quantityText = item.querySelector('.quantity span');

plus.addEventListener('click', () => {
    product.quantity++;
    quantityText.textContent = product.quantity;

    localStorage.setItem('cart', JSON.stringify(cart));

    updateTotal();
});

minus.addEventListener('click', () => {
    if (product.quantity > 1) {
        product.quantity--;
        quantityText.textContent = product.quantity;

        localStorage.setItem('cart', JSON.stringify(cart));

        updateTotal();
    }
});

    item.querySelector('.delete-btn').addEventListener('click', () => {

        cart = cart.filter(p => p.name !== product.name);

        localStorage.setItem('cart', JSON.stringify(cart));

        item.remove();

        updateTotal();

    });

    cartItems.appendChild(item);

});

   updateTotal();
}
function updateTotal() {
    const total = cart.reduce((sum, product) => {
        return sum + product.price * product.quantity;
    }, 0);

    totalPrice.textContent = `Загальна сума: ${total} грн`;
}

});


