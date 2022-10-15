// On récupère le formulaire dans le DOM
let registerForm = document.getElementById('registerForm')

// Création de la fonction affichant les messages d'erreur du formulaire

function errorForm($text, $divId){
  let newDiv = document.createElement('p');
  newDiv.textContent = $text;
  let registerName = document.getElementById($divId);
  registerName.prepend(newDiv)
  console.log('dedans')
  return
}


async function postData(url='', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
});
  return response.json();
}

async function Register(e) {

  let data = {
    Name: registerForm.elements['Name'].value,
    Lastname: registerForm.elements['Lastname'].value,
    email: registerForm.elements['email'].value,
    plainPassword: registerForm.elements['password'].value,
  }

  // Création des différents cas d'erreur du formulaire
  let error = false
  if (registerForm.elements['password'].value !== registerForm.elements['confirmation'].value){
    errorForm('Veuillez renseigner des mots de passe identiques','confirmRegisterForm')
  }
  
  if (registerForm.elements['Name'].value.length < 1){
    errorForm('veuillez renseigner un prènom', 'nameFormRegister');
    error = true
  } 
  
  if (registerForm.elements['Lastname'].value.length < 1){
    errorForm('veuillez renseigner un nom', 'lastnameFormRegister')
    error = true
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerForm.elements['email'].value)){
    console.log('valide mail')
  } else {
    errorForm('Ceci n\'est pas une adresse mail valide', 'mailFormRegister')
    error = true
  }

  if (registerForm.elements['password'].value < 6){
    errorForm('Votre mot de passe doit contenir plus de 6 caractères', 'passwordRegisterForm')
    error = true
  }

  if (error){
    e.preventDefault()
    return
  }

  console.log('dehors');

  postData('https://hidden-crag-69413.herokuapp.com/api/users.json', data)
  .then(data=> {
    if (data.response) {
      alert('data')
      console.log('réussi');
    }
    else {
      console.log('loupé');
      alert('error')
    }
  })
  
}

registerForm.onsubmit = Register
