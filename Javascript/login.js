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

  postData('http://127.0.0.1:8000/api/login_check', data)
  .then(data=> {
    console.log(data)
    localStorage.setItem('Token', JSON.stringify(data))
    document.location.href = 'index.html'
  }
  
)}

loginForm.onsubmit = login
