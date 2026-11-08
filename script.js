const menuButton=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')})}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const msg=form.querySelector('.form-message');if(msg)msg.textContent='Thank you! Your message is ready. Please email us or call to confirm your enquiry.';form.reset()}));
