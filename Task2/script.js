
const btn = document.getElementById('btn-submit');
const toastRef = document.getElementById('toast');
const form = document.getElementById('form');


form.addEventListener('submit',function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    if(!name || !email || !phone || !password){
       alert('please fill all the details!!');
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        alert('please enter valid email format');
    }
    function showMessage(){
    toastRef.classList.add('show');
    setTimeout(()=>{
        toastRef.classList.remove('show');
    },4000);
    
}
  form.reset();
btn.addEventListener('click', showMessage);
});

 

