// Book Class
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}
// UI Class
class UI {
  //  Add Book To List
  static addBookToList(book) {
    const list = document.getElementById('book-list');
    let trow = document.createElement('tr');

    trow.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                    <td>${book.id}</td>
                    <td><button class="button button--red">X</button></td>`;

    list.appendChild(trow);
  }
  // Clear Input
  static clearInput() {
    title.value = '';
    author.value = '';
    id.value = '';
  }

  //   Remove book from List
  static removeBookFromList(element) {
    if (element.classList.contains('button--red')) {
      element.parentElement.parentElement.remove();
    }
  }

  // Display Message
  static displayMessage(message, modify) {
    let p = document.createElement('p');
    p.innerHTML = message;
    p.classList.add('button', `button--${modify}`);

    const body = document.body;
    const form = document.querySelector('form');

    body.insertBefore(p, form);

    // Disappear after 3 second
    setTimeout(() => {
      p.remove();
    }, 3000);
  }
}

document.addEventListener('submit', (e) => {
  // Prevent the default
  e.preventDefault();

  //   Form element
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const id = document.getElementById('id');
  // Create A Book
  let book = new Book(title.value, author.value, id.value);
  // Event: Add A Book
  // Validate
  if (title.value === '' || author.value === '' || id.value === '') {
    UI.displayMessage('Failed to add, please full fill the input', 'fail');
  } else {
    UI.addBookToList(book);
    // Added Successful Notify
    UI.displayMessage('Added to the list', 'success');
    // TimeOut for Notify Banner
  }
  //   Clear Field
  UI.clearInput();
});
//   Remove a Book
document.getElementById('book-list').addEventListener('click', (e) => {
  UI.removeBookFromList(e.target);
  UI.displayMessage('Remove successful', 'success');
});
