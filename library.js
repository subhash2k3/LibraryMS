// Book data
const books = [
  { title: "Book 1", author: "Author 1", subject: "Subject 1", publishDate: "2021", image: "http://i2.wp.com/geekdad.com/wp-content/uploads/2013/02/HP1-Kibuishi.jpg" },
  { title: "Book 2", author: "Author 2", subject: "Subject 2", publishDate: "2022", image: "https://pbs.twimg.com/media/D4pDwTCUIAAZLDQ.jpg:large" },
  { title: "Book 3", author: "Author 3", subject: "Subject 1", publishDate: "2021", image: "https://1.bp.blogspot.com/-_gie8qAwZPY/X0HgTfDEoMI/AAAAAAAAIjk/KsZvNYbtGHU6Dq9wi7koZ-QYfSLa8MgYwCLcBGAsYHQ/s1600/touchmaster_1598152338675.jpeg" },
  { title: "Book 4", author: "Author 1", subject: "Subject 3", publishDate: "2023", image: "https://m.media-amazon.com/images/I/51KPj3gS0vL._SY346_.jpg" },
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