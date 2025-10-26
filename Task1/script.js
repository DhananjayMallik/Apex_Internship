const btnref = document.getElementById('btn');

const toastref = document.getElementById('toast');

// here we add our toaster functionality --->
function showmessage(){
   toastref.classList.add('show');
   setTimeout(()=>{
    toastref.classList.remove('show'); // remove toast
   },3000);
}
btnref.addEventListener('click',showmessage);