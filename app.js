/*function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}*/

var central = document.querySelector('.central')
  central.addEventListener('click', function(e){
  central.classList.add('active')
  
var panel = document.querySelectorAll('.panel')
for (var i = 0; i < panel.length; i++){
panel[i].classList.add('active')
}

var firstpage = document.querySelector('.firstpage')
  firstpage.classList.add('active')

var mainpage = document.querySelector('.mainpage')
  mainpage.classList.add('active')
})
/*
si element firstpage a la classe 'active'
alors
charger accueil.html
*/
/*
if (firstpage.classlist = active) {
  document.location.href=(accueil.html)
}*/
