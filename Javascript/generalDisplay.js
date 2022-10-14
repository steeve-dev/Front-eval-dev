// Affichage du menu en fonction de la connexion utilisateur


if (!localStorage.getItem('Token')) {
  
  document.getElementById('logoutNav').style.display = 'none';
  document.getElementById('userLoanNav').style.display = 'none';
  document.getElementById('userInfoNav').style.display = 'none';
  } else {
  document.getElementById('loginNav').style.display = 'none';
  document.getElementById('createAccountNav').style.display = 'none';
    
  
}

// deconnexion de l'utilisateur
function logout() {
  localStorage.removeItem('Token')
}

const userLogout = document.getElementById('logout')
userLogout.onclick = logout

const vérification = localStorage.getItem('Token');
let verifToken = JSON.parse(vérification)
// if (verifToken.code){
//   localStorage.removeItem('Token')
// }