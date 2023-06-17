// Book data
const books = [
  { title: "Think Like A Monk", author: "Jay Shetty", subject: "Self-Motivating", publishDate: "2021", image: "https://m.media-amazon.com/images/I/71GBwRkvchL.jpg" },
  { title: "The Power of SC Mind", author: "Murphy", subject: "Self-Help", publishDate: "2020", image: "https://m.media-amazon.com/images/I/51DlDekQ5-L.jpg" },
  { title: "DSA", author: "Narasimha", subject: "CSE", publishDate: "2021", image: "https://m.media-amazon.com/images/I/61CVP-MfUoL.jpg" },
  { title: "Keras", author: "Geron", subject: "ML", publishDate: "2020", image: "https://m.media-amazon.com/images/I/71UF9mDAX3L.jpg" },
];

const cart = [];

// Display books
const bookListContainer = document.getElementById("book-list");
const cartItemsContainer = document.getElementById("cart-items");
const cartCountContainer = document.getElementById("cart-count");

function displayBooks(books) {
  bookListContainer.innerHTML = "";
  books.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = book.title;

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const subject = document.createElement("p");
    subject.textContent = `Subject: ${book.subject}`;

    const publishDate = document.createElement("p");
    publishDate.textContent = `Publish Date: ${book.publishDate}`;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", () => {
      addToCart(index);
    });

    bookCard.appendChild(bookImage);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(subject);
    bookCard.appendChild(publishDate);
    bookCard.appendChild(addToCartBtn);

    bookListContainer.appendChild(bookCard);
  });
}

function addToCart(index) {
  const book = books[index];
  cart.push(book);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  cart.forEach((book, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const title = document.createElement("h4");
    title.textContent = book.title;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      removeFromCart(index);
    });

    cartItem.appendChild(title);
    cartItem.appendChild(removeBtn);
    cartItemsContainer.appendChild(cartItem);
  });

  cartCountContainer.textContent = cart.length;
}

displayBooks(books);