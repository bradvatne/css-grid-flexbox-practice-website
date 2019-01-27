function dropDown() {
  var navbar = document.getElementById('navbar');
  var arrow = document.getElementById('arrow');
  var dropbar = document.getElementById('dropbar');

  if (arrow.classList.contains('fa-angle-down')) {
    dropbar.classList.add('fade-in')
    navbar.classList.remove('dropup')
    navbar.classList.add('drop-down')
    navbar.classList.add('animate-drop-down')
    arrow.classList.remove('fa-angle-down')
    arrow.classList.add('fa-angle-up')
    dropbar.classList.remove('hidden')
    dropbar.classList.remove('fade-out')
  } 

 else {
    dropbar.classList.remove('fade-in')
    dropbar.classList.add('fade-out')
    navbar.classList.remove('animate-drop-down')
    navbar.classList.remove('drop-down')
    navbar.classList.add('dropup')
    arrow.classList.toggle('fa-angle-down')
    arrow.classList.toggle('fa-angle-up')
    dropbar.classList.toggle('hidden')
 }

}
