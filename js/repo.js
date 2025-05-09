// Fetch projects from the JSON file and render them
const fetchAndRenderProjects = async () =>
{
  try
  {
    const response = await fetch("http://localhost:8000/projects.json"); // Fetch the JSON file
    const projects = await response.json(); // Parse the JSON data

    let output = "";
    projects.forEach((project) =>
    {
      output += `
        <div class="col-sm-4 mb-40">
          <div class="mdl-card mdl-shadow--2dp pa-0 repo-card">
            <div class="mdl-card__media">
              <img src="${project.imagen}" alt="${project.nombre}" class="project-image" />
            </div>
            <div class="mdl-card__supporting-text relative">
              <h4 class="mt-15 mb-20">${project.nombre}</h4>
              <p>${project.descripcion}</p>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById("repo-card").innerHTML = output; // Render the cards
  } catch (error)
  {
    console.error("Error fetching projects:", error);
  }
};

// Call the function to fetch and render projects
fetchAndRenderProjects();
