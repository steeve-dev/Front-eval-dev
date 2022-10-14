let editUserForm = document.getElementById('editUser')

function errorForm($text, $divId){
  let newDiv = document.createElement('p');
  newDiv.textContent = $text;
  let editUser = document.getElementById($divId);
  editUser.prepend(newDiv)
  console.log('dedans')
  return
}


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

  let error = false

  if (editUserForm.elements['editLastName'].value < 1){
    errorForm('veuillez renseigner un nom', 'lastnameEdit');
    error = true
  }

  if (editUserForm.elements['editName'].value < 1){
    errorForm('veuillez renseigner un prènom', 'nameEdit');
    error = true
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(editUserForm.elements['editMail'].value)){
    console.log('valide mail')
  } else {
    errorForm('Ceci n\'est pas une adresse mail valide', 'mailEdit')
    error = true
  }

  if (error){
    e.preventDefault()
    return
  }


  postData(`http://127.0.0.1:8000/api/users/${userId}.json`, data)
  .then(async data=> {
    let newDiv = document.createElement('p');
    newDiv.textContent = 'Modifications enregistrées';
    let registerName = document.getElementById('mainEditUser');
    registerName.append(newDiv)
  })

}
  
editUserForm.onsubmit = editAccount