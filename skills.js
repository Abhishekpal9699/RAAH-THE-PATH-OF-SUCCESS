const skills = [
  {
    name: "Frontend Developer",
    description: "Learn HTML, CSS, JavaScript, and React to build amazing user interfaces.",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721296.png",
    link: "frontend.html"
  },
  {
    name: "Backend Developer",
    description: "Master Node.js, Express, and Databases to power web applications.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103665.png",
    link: "#"
  },
  {
    name: "Full Stack Developer",
    description: "Combine frontend and backend skills to build complete web apps.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    link: "#"
  },
  {
    name: "AI & Machine Learning",
    description: "Dive into AI models, neural networks, and intelligent systems.",
    image: "https://cdn-icons-png.flaticon.com/512/3529/3529980.png",
    link: "#"
  },
  {
    name: "Data Science",
    description: "Work with data analytics, visualization, and statistical modeling.",
    image: "https://cdn-icons-png.flaticon.com/512/3208/3208707.png",
    link: "#"
  },
  {
    name: "Software Development Engineer (SDE)",
    description: "Sharpen your problem-solving and system design skills.",
    image: "https://cdn-icons-png.flaticon.com/512/2206/2206368.png",
    link: "#"
  },
  {
    name: "Cyber Security",
    description: "Learn ethical hacking and security testing to protect systems.",
    image: "https://cdn-icons-png.flaticon.com/512/482/482636.png",
    link: "#"
  },
  {
    name: "Cloud Computing",
    description: "Explore AWS, Azure, and Google Cloud platforms.",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149677.png",
    link: "#"
  }
];

// Load skill cards
function loadSkills() {
  const container = document.getElementById("skills");

  skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${skill.image}" alt="${skill.name}">
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
      <a href="${skill.link}" class="skill-link">Explore</a>
    `;
    container.appendChild(card);
  });
}

window.onload = loadSkills;
