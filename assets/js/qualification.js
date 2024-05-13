/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    {
      id: "education",
      name: "Academic",
      icon: "graduation-cap",
      active: false,
    },
    { id: "work", name: "Professional", icon: "briefcase-alt", active: true },
    // Add more sections as needed
  ];

  const qualifications = [
    {
      title: "BTech, Computer Science & Engineering",
      subtitle: "Nirma University, India",
      date: "2023 - 2026",
      type: "education",
    },
    {
      title: "Diploma",
      subtitle: "Tolani FG Polytechnic, Adipur",
      date: "2020 - 2023",
      type: "education",
    },
    {
      title: "Class XII",
      subtitle: "Navkar Public School, Ahmedabad",
      date: "2020",
      type: "education",
    },
    {
      title: "Class X",
      subtitle: "SUSES, Anjar",
      date: "2018",
      type: "education",
    },
    {
      title: "Executive Member CSI",
      subtitle: "Computer Society of India, Nirma University.",
      date: "Nov 2023 - Present",
      type: "work",
    },
    {
      title: "Web Developer Internship",
      subtitle: "RKAB & Associates LLP",
      date: "Jan 2023 - Jun 2023",
      type: "work",
    },
    {
      title: "Surveying Wedding Patterns of India",
      subtitle: "Nirma University",
      date: "Mar 2024 - Present ",
      type: "work",
    },
    {
      title: "Blockchain Research",
      subtitle: "Nirma University",
      date: "Apr 2024 - Present ",
      type: "work",
    },
  ];

  const buttonsContainer = document.querySelector(".qualification__tabs");
  const contentsContainer = document.querySelector(".qualification__sections");
  const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

  sections.forEach((section) => {
    const button = document.createElement("div");
    button.classList.add("qualification__button", "button--flex");
    if (section.active) {
      button.classList.add("qualification__active");
    }
    button.setAttribute("data-target", `#${section.id}`);
    button.innerHTML = `<i class="uil uil-${section.icon} qualification__icon"></i>${section.name}`;
    buttonsContainer.appendChild(button);

    const content = document.createElement("div");
    content.classList.add("qualification__content");
    if (section.active) {
      content.classList.add("qualification__active");
    }
    content.setAttribute("data-content", "");
    content.setAttribute("id", section.id);
    contentsContainer.appendChild(content);

    button.addEventListener("click", () => {
      sections.forEach((sec) => {
        sec.active = false;
      });
      section.active = true;

      updateSections();
    });
  });

  function updateSections() {
    sections.forEach((section) => {
      const button = document.querySelector(`[data-target="#${section.id}"]`);
      const content = document.querySelector(`#${section.id}`);

      if (section.active) {
        button.classList.add("qualification__active");
        content.classList.add("qualification__active");
      } else {
        button.classList.remove("qualification__active");
        content.classList.remove("qualification__active");
      }
    });
  }

  qualifications.forEach((qualification) => {
    qualification.href = qualification.href || "#experience";
    generateQualificationContent(qualifications, `#${qualification.type}`);
  });

  function generateQualificationContent(qualifications, tabId) {
    const tabContent = document.querySelector(tabId);
    const filteredQualifications = qualifications.filter(
      (qualification) => qualification.type === tabId.slice(1)
    );

    tabContent.innerHTML = qualifications
      .filter((qualification) => qualification.type === tabId.slice(1))
      .map(
        (qualification, index) => `
				<div class="qualification__data">
					<div>
						<span class="qualification__rounder"></span>
						</div>
						${
              index !== filteredQualifications.length - 1
                ? `<span class="qualification__line"></span>`
                : ""
            }
					<div class="qualification__content ${index % 2 === 1 ? "right" : "left"}">
						<a href="${qualification.href}">
							<h3 class="qualification__title">${qualification.title}</h3>
							<p class="qualification__subtitle">${qualification.subtitle}</p>
							<div class="qualification__calendar">
								<i class="uil uil-calendar-alt"></i>
								<span>${qualification.date}</span>
							</div>
						</a>
					</div>
				</div>
			`
      )
      .join("");
  }

  // Set the default tab as active
  tabs[1].classList.add("qualification__active");
  tabContents[1].classList.add("qualification__active");

  // Add click event listener to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Get the target tab content based on the data-target attribute
      const target = document.querySelector(tab.dataset.target);

      // Remove active class from all tab contents
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("qualification__active");
      });

      // Add active class to the clicked tab content
      target.classList.add("qualification__active");

      // Remove active class from all tabs
      tabs.forEach((tab) => {
        tab.classList.remove("qualification__active");
      });

      // Add active class to the clicked tab
      tab.classList.add("qualification__active");
    });
  });
});
