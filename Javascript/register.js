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
    password: registerForm.elements['password'].value,
  }

  console.log(data)
  postData('http://127.0.0.1:8000/api/users', data)
  .then(data => {
    if (data.success) {
      alert('données envoyées')
    }
    else {
      alert('erreur')
    }
  })
}

registerForm.onsubmit = Register
