let editUserForm = document.getElementById('editUser')


fetch(`http://127.0.0.1:8000/api/users/${userId}.json`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  }
})
.then(async response => {
  if (response.ok){
    response.json().then(data =>{
      // document.getElementById('editLastname')
      // document.getElementById('editName').value = data.Name
      // document.getElementById('editMail').value = data.email
    })
  }
})

async function postData(url='', data = {}) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
});
  console.log(response.json)
  return response.json();
}


async function editAccount(e) {
  e.preventDefault();
  console.log('entré dans la fonction');
  
  let data = {
    
    Name: editUserForm.elements['editName'].value,
    Lastname: editUserForm.elements['editLastName'].value,
    email: editUserForm.elements['editMail'].value,
  }


  postData(`http://127.0.0.1:8000/api/users/${userId}.json`, data)
  .then(async data=> {
    console.log(data)
    alert('data')
    
  })

}
  
editUserForm.onsubmit = editAccount