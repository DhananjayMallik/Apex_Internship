// Contact Form
const btn = document.getElementById("btn-submit");
const toastRef = document.getElementById("toast");
const form = document.getElementById("form");


// add event listener from my form element 
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim(); // get reference from my name part
  const email = document.getElementById("email").value.trim();// get reference from my email part
  const phone = document.getElementById("phone").value.trim();// get reference from my phone part
  const password = document.getElementById("password").value.trim();// get reference from my password part

  // if not enter all the details
  if (!name || !email || !phone || !password) {
    alert("please fill all the details!!");
  }
  // if email pattern not matched 
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("please enter valid email format");
  }
  // if matched all required details
  function showMessage() {
    toastRef.classList.add("show");
    setTimeout(() => {
      toastRef.classList.remove("show");
    }, 4000);
  }
  showMessage();
  form.reset();
 
});
// To Do List
// get reference 
const AddTaskBtn = document.getElementById('addTask');
const TaskInput = document.getElementById('taskInput');
const TaskList = document.getElementById('taskList');


function renderTask(){
    // get task
    const task = TaskInput.value.trim();
    if(!task){
        alert('First Enter Your Task List');
        return;
    }
    // if the task will occur
    // render a list
    const li = document.createElement('li');
   
    li.textContent = task;
    // delete button
   const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.style='background-color:red';
      // apply delete functionality
      delBtn.onclick = () => li.remove();
      li.appendChild(delBtn);
      TaskList.appendChild(li);
    TaskInput.value = "";
}
AddTaskBtn.addEventListener('click',renderTask);