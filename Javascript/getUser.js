// Récupération du token et de l'id de l'utilisateur

const tokens = localStorage.getItem('Token');
const decodeToken = jwt_decode(tokens)
const userId = decodeToken.id
console.log(userId)




// Récupération du contenu du token

let token = (JSON.parse(tokens).token)

//récupération des données de l'API

fetch(`https://hidden-crag-69413.herokuapp.com/api/users/${userId}.json`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  }
})
.then(async response => {
  if (response.ok){
    response.json().then(data =>{
      document.getElementById('lastName').innerHTML = data.Lastname
      document.getElementById('Name').innerHTML = data.Name
      document.getElementById('email').innerHTML = data.email
    })
  }
})


console.log(`Bearer ${token}`)




