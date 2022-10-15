let loginForm = document.getElementById('loginForm')



async function postData(url='', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
});
  return response.json();
}

async function login(e) {
  e.preventDefault()
  

  let data = {
    email: loginForm.elements['mail-login'].value,
    password: loginForm.elements['password-login'].value,
  }
  console.log(data)

  postData('https://hidden-crag-69413.herokuapp.com/api/login_check', data)
  .then(data=> {
    if(data){
      console.log(data.response)
      localStorage.setItem('Token', JSON.stringify(data))
      
      const vérification = localStorage.getItem('Token');
      let verifToken = JSON.parse(vérification)
      if (verifToken.code){
        localStorage.removeItem('Token')
        let newDiv = document.createElement('p');
        newDiv.textContent = 'Identifiants de connexion incorrects';
        let loginFail = document.getElementById('loginForm');
        loginFail.prepend(newDiv)
      } else{
        document.location.href = 'index.html'
      }
    }
    
  }
)}

loginForm.onsubmit = login
