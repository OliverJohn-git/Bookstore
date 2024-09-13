function storeTemplate(singleBook, i){
    return /*html*/ `
<div class = book_card>
    <div><h5 id="booktitle" class="bookTitle">${singleBook.name}</h5></div>
    <div class = "img_container"><img src="./img/book.jpg" alt="Bookpicture"></div>
    <div class = "info_comm_section">
        <div class = "information">
              <p>Genre: ${singleBook.genre}</p>
              <p>Autor: ${singleBook.author}</p>
              <p>Erscheinungsjahr ${singleBook.publishedYear}</p>
              <p type="text">Price: ${singleBook.price}€</p>
        </div>
    </div>
    <div class = "like_section">
        <img onclick = "like(${i})" class = "thumbs" id = "thumb_up${i}" src = "./img/thumb_empty.svg">
        <img onclick = "like(${i})" class = "thumbs d_none" id="thumb_liked${i}" src = "./img/thumb_full.svg">
        <p id = 'like_counter${i}'>${singleBook.likes}</p>
    </div>
    <div class = "comments_section">
      <div id = "add_comments">
        <input id = "comment_input${i}" type="text" placeholder="Kommentar">
        <button id ="button_comment${i}" onclick = "addComment(${i})" >Senden</button>
      </div>
      <div id = "comments">
        <table id="comments_id${i}"></table>
      </div>
    </div>
  </div>
`;
}

function commentsTemplate(singleBook){
  return /*html*/`
      <p id = "username">${singleBook.user}</p>
      <p id = "comment">${singleBook.comment}</p>
  `
}