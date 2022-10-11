
// Récupération du token et de l'id de l'utilisateur

const tokens = localStorage.getItem('Token');
const decodeToken = jwt_decode(tokens)
const userId = decodeToken.id
console.log(userId)

// Récupération du contenu du token

let token = (JSON.parse(tokens).token)

function dateFormat(date){
  let year = date.substring(0,4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  let result = day + ' '+ month +' '+ year;
  return result;
}



//récupération des données de l'API

fetch(`http://127.0.0.1:8000/api/users/${userId}.json`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  }
})
.then(async response => {
  if (response.ok){
    response.json().then(data =>{
      loanData = data.Loans;
      document.getElementById("userLoan").innerHTML = loanData.map(
        (loan) =>
        `<div>
        <span>${loan.Copy.book.title}</span>
        <span>par${loan.Copy.book.authors.Name}</span>
    </div>
    
    <div>
        <span>genre : ${loan.Copy.book.type.name}</span>
        <span>ISBN :  ${loan.Copy.book.ISBN}</span>
    </div>
    
    <div>
        <span>Date de publication :  ${loan.Copy.book.PublishedDate}</span>
        <span>Editeur :  ${loan.Copy.book.editor.name}</span>
    </div>
    
    <div>
        <span>Début du prêt :  ${dateFormat(loan.BeginDate)} 
        - Fin du prêt :  ${dateFormat(loan.EndDate)}  </span>
        <button>Prolonger la durée du prêt</button>
    </div>
    <span>---------------------------------</span>`
  
      ).join('');
    
    })
  }
})











