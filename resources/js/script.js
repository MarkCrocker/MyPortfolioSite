
//LIGHTBOX//

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img.light')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})



//LOCAL STORAGE CONTACT FORM//

let submitButton = document.getElementById('submit');
let form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
})

submitButton.addEventListener('click', function(e){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    
    name = name.value;
    localStorage.setItem('name', name);
    
    email.value;
    localStorage.setItem('email', email);
    
    message.value;
    localStorage.setItem('message', message);
    
})
