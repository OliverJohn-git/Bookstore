function init() {
  renderBooks();
}

function renderBooks() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    const singleBook = books[i];

    contentRef.innerHTML += storeTemplate(singleBook, i)

    for (let com = 0; com < books[i].comments.length; com++) {
      const eleComments = books[i].comments[com];

      eleComments.innerHTML += storeTemplate(comments, i)
    }
  }
}

function like(i) {
  if (books[i].liked) {
    books[i].liked = false;
    document.getElementById(`like_counter${i}`).innerHTML = `${(books[i].likes -= 1)}`;
    document.getElementById(`thumb_liked${i}`).classList.add('d_none');
    document.getElementById(`thumb_up${i}`).classList.remove('d_none');
  } else {
    books[i].liked = true;
    document.getElementById(`like_counter${i}`).innerHTML = `${(books[i].likes += 1)}`;
    document.getElementById(`thumb_liked${i}`).classList.remove('d_none');
    document.getElementById(`thumb_up${i}`).classList.add('d_none');
  }
}

