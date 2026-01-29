async function loadProjects() {
  try {
    const res = await fetch("http://localhost:5000/api/projects");
    const projects = await res.json();

    const projectList = document.getElementById("projectList");
    projectList.innerHTML = "";

    projects.forEach((p) => {
      const isDataScience = p.title.toLowerCase().includes("data science");

      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p><b>Tech:</b> ${p.tech}</p>
        <p>
          <a href="${p.github}" target="_blank" onclick="event.stopPropagation()">GitHub</a> |
          <a href="${p.live}" target="_blank" onclick="event.stopPropagation()">Live</a>
        </p>
      `;

      // click on card open page
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        if (isDataScience) {
          window.location.href = "data-science.html";
        }
      });

      projectList.appendChild(card);
    });
  } catch (error) {
    console.log("Error loading projects:", error);
  }
}

loadProjects();

