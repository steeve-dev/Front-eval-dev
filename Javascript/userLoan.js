
// Récupération du token et de l'id de l'utilisateur

const tokens = localStorage.getItem('Token');
const decodeToken = jwt_decode(tokens.token)
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

// fonction d'affichage du bouton en fonction du prêt

function diplayLoanButton(renew){
  if (renew){
    let text = "Plus de prolongement de prêt possible"
    return text;
  } else {
    let text = "Prolonger la durée du prêt"
    return text;
  }
}

function idNameForm(id){
  return 'loanForm'+id
}

function idNameButton(id){
  return 'loanButton'+id
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
          let mainLoan = document.getElementById('userLoan')
          for (loan in loanData){
          console.log(loanData);
          let newDiv = document.createElement('div');
          newDiv.innerHTML = `<div 
          class="userLoan-main">
          <div
          class="loan-info-book">
          <span>Titre : ${loanData[loan].Copy.book.title}</span>
          <span>par ${loanData[loan].Copy.book.authors.Name}</span>
          </div>

          <div
          class="loan-info-book">
              <span>genre : ${loanData[loan].Copy.book.type.name}</span>
              <span>ISBN :  ${loanData[loan].Copy.book.ISBN}</span>
          </div>

          <div
          class="loan-info-book">
              <span>Date de publication :  ${loanData[loan].Copy.book.PublishedDate}</span>
              <span>Editeur :  ${loanData[loan].Copy.book.editor.name}</span>
          </div>

          <div
          class="loan-info-book">
              <span>Début du prêt :  ${dateFormat(loanData[loan].BeginDate)} 
              - Fin du prêt :  ${dateFormat(loanData[loan].EndDate)}</span>
              <form
              id="${idNameForm(loan.id)}">
                <button id="${idNameButton(loanData[loan].id)}"
            >${diplayLoanButton(loanData[loan].Renewal)}</button>
               </form>
          </div>
          <span class="loan-division">---------------------------------</span>
          </div>`

          
          mainLoan.append(newDiv)
          eventLoan(idNameButton(loanData[loan].id), loanData[loan].id)
          }
          })
      }
  }
)


function eventLoan(buttonId, loanId) {
  let loanEvent = document.getElementById(buttonId)
  loanEvent.addEventListener('click', function() {
    loanRenewal(loanId);
  })
}



async function postData(url='', data = {}) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
});
  return response.json();
}

async function loanRenewal(loanId) {
  let data = {
    Renewal: true
  }
  postData(`https://hidden-crag-69413.herokuapp.com/api/loans/${loanId}.json`, data)
    .then(async data=> {
      console.log('entré dans la fonction de renouvellement')
      
    })
}









