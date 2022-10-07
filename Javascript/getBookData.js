




fetch('http://127.0.0.1:8000/api/books.json')
  .then(async response => {
    if (response.ok){
      response.json().then(data => {
        
      for(let book of data){


        document.getElementById('ISBNBook').innerHTML = book.ISBN
        document.getElementById('titleBook').innerHTML = book.title
        document.getElementById('authorBook').innerHTML = book.authors.Name
        document.querySelector('#BookType').innerHTML = book.type.name
        document.querySelector('#BookDescription').innerHTML = book.description
        document.querySelector('#BookPublishDate').innerHTML = book.PublishedDate
        document.querySelector('#BookEditor').innerHTML = book.editor.name

    }

        console.log(data)
    })
    } else {
      console.log('error')
    }
  })
  