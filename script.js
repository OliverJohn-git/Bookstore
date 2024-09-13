function init() {
  renderBooks();
}

function renderBooks() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    const singleBook = books[i];

    contentRef.innerHTML += storeTemplate(singleBook, i)

  }
 // Jetzt, nachdem das HTML eingefügt wurde, die Kommentare für jedes Buch rendern
 for (let i = 0; i < books.length; i++) {
  renderComments(i);
}
}

function renderComments(index) {
  const commentsElement = document.getElementById('comments_id' + index);
  const comments = books[index].comments;

  if (comments && comments.length > 0) {
      let commentsHtml = '';
      for (let i = 0; i < comments.length; i++) {
          const comment = comments[i];
          commentsHtml += commentsTemplate(comment);
      }
      commentsElement.innerHTML = commentsHtml;
  } else {
      commentsElement.innerHTML = "<p>Kommentiere als erstes</p>";
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

function addComment(i) {
  let commentInputRef = document.getElementById("comment_input" + i);
  let commentInput = commentInputRef.value;
  const commentName = "Du";
  const commentText = commentInput.trim();
  const newComment = {
    name: commentName,
    comment: commentText,
  };
    
  if (commentInput == "") {
    alert(
      "Schreib einen Kommentar um einen absenden zu können!"
    );
    return;
  } else {
    books[i].comments.push(newComment);
    
    commentInputRef.value = "";
    
    renderComments(i);
  }
}