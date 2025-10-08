async function loadSkills() {
  try {
    const res = await fetch("/api/skills");
    const skills = await res.json();
    const container = document.getElementById("skills");
    container.innerHTML = "";

    skills.forEach(skill => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${skill.name}</h3>
        <a href="topics.html?skillId=${skill.id}">Explore</a>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading skills:", err);
  }
}

async function loadCourses() {
  try {
    const res = await fetch("/api/courses");
    const courses = await res.json();
    const container = document.getElementById("courses");
    container.innerHTML = "";

    courses.forEach(course => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading courses:", err);
  }
}
