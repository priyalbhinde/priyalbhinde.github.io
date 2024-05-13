const skillsData = [
  {
    title: "Programming",
    experience: "3+ Years XP",
    icon: "uil-brackets-curly",
    skills: [
      { name: "C & C++", percentage: 95 },
      { name: "Java", percentage: 95 },
      { name: "Python", percentage: 85 },
      { name: "SQL", percentage: 95 },
      { name: "Bash", percentage: 90 },
    ],
  },
  {
    title: "Web Development",
    experience: "2+ Years XP",
    icon: "uil-globe",
    skills: [
      { name: "HTML", percentage: 95 },
      { name: "CSS", percentage: 95 },
      { name: "React JS", percentage: 85 },
      { name: "Node JS, Express JS", percentage: 80 },
      { name: "JavaScript", percentage: 90 },
      { name: "PHP", percentage: 90 },
      { name: ".Net", percentage: 90 },
      { name: "AJAX, jQuery", percentage: 75 },
      { name: "Python - Django, Flask, Fast API", percentage: 75 },
    ],
  },
  {
    title: "Machine Learning",
    experience: "1+ Years XP",
    icon: "uil-brain",
    skills: [
      { name: "Frameworks & Libraries", percentage: 95 },
      // { name: "Computer Vision", percentage: 90 },
      { name: "Recurrent Neural Networks", percentage: 90 },
      { name: "Convolutional Neural Networks", percentage: 90 },
      // { name: "Natural Language Processing", percentage: 85 },
      { name: "Artificial Neural Networks", percentage: 85 },
      { name: "TensorFlow & PyTorch", percentage: 85 },
    ],
  },
  {
    title: "Cloud Technology",
    experience: "1+ Years XP",
    icon: "uil-cloud-computing",
    skills: [
      { name: "Git", percentage: 90 },
      // { name: "Linux", percentage: 90 },
      { name: "Amazon Web Services", percentage: 85 },
      { name: "IBM Watson Studio", percentage: 85 },
      // { name: "Firebase", percentage: 80 },
      // { name: "Google Cloud Platform", percentage: 75 },
      // { name: "DevOps", percentage: 75 },
      { name: "Docker", percentage: 75 },
      { name: "Kubernetes", percentage: 70 },
      { name: "Jenkins", percentage: 70 },
    ],
  },
  {
    title: "Co Curricular",
    experience: "10+ Years XP",
    icon: "uil-analysis",
    skills: [
      { name: "Empathy", percentage: 95 },
      { name: "Public Speaking", percentage: 95 },
      // { name: "Time Management", percentage: 90 },
      { name: "Communication", percentage: 90 },
      { name: "Negotiation", percentage: 88 },
      // { name: "Influencing", percentage: 85 },
      { name: "Networking", percentage: 85 },
      { name: "Leadership", percentage: 80 },
      { name: "Storytelling", percentage: 80 },
    ],
  },
];

// Function to dynamically generate skills sections
function generateSkillsSections() {
  const skillsContainer = document.getElementById("skillsContainer");

  skillsData.forEach((section) => {
    const sectionElement = document.createElement("div");
    sectionElement.classList.add("skills__content", "skills__close");

    sectionElement.innerHTML = `
            <div class="skills__header">
                <i class="uil ${section.icon} skills__icon"></i>
                <div>
                    <h1 class="skills__title">${section.title}</h1>
                    <span class="skills__subtitle">${section.experience}</span>
                </div>
                <i class="uil uil-angle-down skills__arrow"></i>
            </div>
            <div class="skills__list grid">
                ${section.skills
                  .map(
                    (skill) =>
                      `<div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">${skill.name}</h3>
                            <span class="skills__number">${
                              skill.percentage
                            }%</span>
                        </div>
                        <div class="skills__bar">
                        <span class="skills__percentage skills__${skill.name
                          .replace(/\s+/g, "-")
                          .toLowerCase()}" style="width: ${
                        skill.percentage
                      }%"></span>
                        </div>
                    </div>`
                  )
                  .join("")}
            </div>`;

    skillsContainer.appendChild(sectionElement);
  });
}

// Function to toggle skills sections
function toggleSkills() {
  const skillsContent = document.getElementsByClassName("skills__content");
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

// Add event listeners to skills headers
function addEventListenersToHeaders() {
  const skillsHeader = document.querySelectorAll(".skills__header");
  skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
  });
}

// Generate skills sections and add event listeners
generateSkillsSections();
addEventListenersToHeaders();
