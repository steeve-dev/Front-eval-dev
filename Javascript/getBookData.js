

fetch('http://127.0.0.1:8000/api/books.json')
  .then(async response => {
    if (response.ok){
      response.json().then(data => {
        
      booksData = data;
      document.getElementById("BookCard").innerHTML = booksData.map(
        (book) =>
        `<div
        class="main-book-presentation">
        <span
          id="titleBook">Titre : ${book.title}</span>
        <span>par ${book.authors.Name}<span id="authorBook"></span></span>
        </div>
        
        <div
        class="main-book-presentation">
          <span>genre : ${book.type.name}</span>
          <span>ISBN : ${book.ISBN}</span>
        </div>
        
        <div
        class="main-book-presentation">
          <span>Date de publication : ${book.PublishedDate}</span>
          <span>Editeur : ${book.editor.name}</span>
        </div>
        
        <div
        class="description-book"
        id="BookDescription">
          Desciption : ${book.description}
        </div>
        
        <div
        class="section-dispo-book">
          Diponibilité :
          <ul>
              <li>biblio 1 : XX</li>
              <li>Biblio 2 : XX</li>
          </ul>
          </div>
          <div
          class="book-division">--------------------------------------------------------</div>
        `



      ).join('');
    }
        
    )
      
    } else {
      console.log('error')
    }
  })
  