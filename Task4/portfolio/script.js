
document.addEventListener("DOMContentLoaded", () => {

  console.log("DOM Loaded");
  
  const menuOpen = document.getElementById("menu-icon");
  const navMenu = document.getElementById("navlinks");

  console.log("menuOpen =", menuOpen);
  console.log("navMenu =", navMenu);
  
  if (menuOpen && navMenu) {
    menuOpen.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      console.log("✅ Menu toggled"); // check in console
    });

    window.addEventListener("scroll", () => {
      navMenu.classList.remove("active");
    });
  } else {
    console.error(" Elements not found!");
  }
});

// project section
// list out all the project details --->
const projectData = [
  {
    title: "Job Listing Website",
    tags: ["ReactJS", "Job", "Tailwind"],
    image: "images/image2 (1).png",
    github: "https://github.com/DhananjayMallik/job-listing-website"
  },
  {
    title: "Portfolio Website",
    tags: ["ReactJS", "Tailwind", "Framer Motion"],
    image: "images/image3.png",
    github: "https://github.com/DhananjayMallik/portfolio-website"
  },
  {
    title: "Doctor Appointment Booking System",
    tags: ["ReactJS", "Tailwind"],
    image: "images/image4.png",
    github: "https://github.com/DhananjayMallik/doctor-appointment-system"
  },
  {
    title: "IDragon Game",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/image5.png",
    github: "https://github.com/DhananjayMallik/IDragon-Game"
  },
  {
    title: "Game Server Website",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/image6.png",
    github: "https://github.com/DhananjayMallik/game-server-website"
  },
  {
    title: "Travel Booking Website",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/image7.png",
    github: "https://github.com/DhananjayMallik/travel-booking-website"
  },
];

// get all the references related to our project section
const projectContainer = document.getElementById('projectsContainer');
const SearchProject = document.getElementById('searchInput');
const ProjectNotFound = document.getElementById('noResult');

// render all projects details
function renderProject(projects) {
 projectContainer.innerHTML = "";
 if(projects.length === 0){
    ProjectNotFound.style.display =  "block";
    return;
 } else{
    ProjectNotFound.style.display = "none";
 }
 // generate all the task list
 projects.forEach((project)=>{
    const card = document.createElement('div');
    card.classList.add('project-card');
    // list out all the
    card.innerHTML = 
    `
     <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">#${tag}</span>`).join("")}
      </div>
      <a href="${project.github}" target="_blank" class="project-btn">View on GitHub</a>
    `;
    projectContainer.appendChild(card);
 })
}
renderProject(projectData);

// Adding search functionality with my portfolio
SearchProject.addEventListener('input',(e)=>{
   const searchItem = e.target.value.toLowerCase(); // here store the search value of any project
  // here we filter out the search item
  const filteredProject = projectData.filter(p=>
      p.title.toLowerCase().includes(searchItem)
  );
  renderProject(filteredProject);
})

// contact form handel section
// handel contact section
// Make sure script runs after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const ContactForm = document.getElementById("contactForm");
  const ToastRef = document.getElementById("toast");

  if (!ContactForm || !ToastRef) {
    console.error("Form or toast not found in DOM");
    return;
  }

  ContactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ToastRef.classList.add("show");

    setTimeout(() => {
      ToastRef.classList.remove("show");
    }, 3000);

    ContactForm.reset();
  });
});