let registerForm = document.getElementById('registerForm')


async function postData(url='', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
});
  return response.json();
}

async function Register() {

  
  let data = {
    Name: registerForm.elements['Name'].value,
    Lastname: registerForm.elements['Lastname'].value,
    email: registerForm.elements['email'].value,
    plainPassword: registerForm.elements['password'].value,
  }

  if (registerForm.elements['password'].value == registerForm.elements['confirmation'].value){

  postData('http://127.0.0.1:8000/api/users.json', data)
  .then(data=> {
    if (data.response) {
      alert('data')
    }
    else {
      alert('error')
    }
  })
  
  } else {

    alert('Erreur dans le formulaire')
    
  }
  
}

registerForm.onsubmit = Register
