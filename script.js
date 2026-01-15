// ===============================
// SECTION TOGGLE LOGIC (FIXED)
// ===============================
function toggle(activeId) {
  const sections = ["home", "skills", "projects", "contact", "resume", "projectDetails"];

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;

    if (id === activeId) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });
}

function showHome() {
  toggle("home");
}

function showSkills() {
  toggle("skills");
}

function showProjects() {
  toggle("projects");
}

function showContact() {
  toggle("contact");
}

function showResume() {
  toggle("resume");
}

// ===============================
// PROJECT MODAL DATA
// ===============================
const projectData = {
  kart: {
    title: "Kart Chase",
    desc: "Description: A branded VR experience for Kraft on Meta Quest, featuring controller-based gameplay where players collect Kraft products by steering a cart left and right through a virtual supermarket before the timer runs out.",
    img1: "assets/screenshots/Kartchase-1.png",
    img2: "assets/screenshots/Kartchase-2.png",
    img3: "assets/screenshots/Kartchase-3.png",
    img4: "assets/screenshots/Kartchase-4.png",
    img5: "assets/screenshots/Kartchase-5.png",
    tech: ["Technologies: Unity3D · C# · Meta XR SDKs · SOLID Principles"],
    video:
      "https://drive.google.com/file/d/1E88vxMcBxCANPEa7Rn_2LmegO0KLvynC/view?usp=drive_link"
  },
  ludo: {
    title: "Ultimate Ludo",
    desc: "Description: A real-time Ludo multiplayer game, featuring 1v1 and 4-player modes, smooth gameplay, and animated dice mechanics for an engaging user experience.",
    img1: "assets/screenshots/Ultimateludo-1.png",
    img2: "assets/screenshots/Ultimateludo-2.png",
    img3: "assets/screenshots/Ultimateludo-3.png",
    img4: "assets/screenshots/Ultimateludo-4.png",
    img5: "assets/screenshots/Ultimateludo-5.png",
    tech: ["Technologies: Unity3D · C# · Photon Fusion · Client Host Mode, Design Patterns"],
    video:
      "https://drive.google.com/file/d/1GVB7KsdSluYTNgEbJ-ls8pvW1hjIH-y_/view"
  },
  fps: {
    title: "Counter Cover Killer",
    desc: "Description: An offline mobile FPS game with 20 mission-based levels, enemy AI, and dynamic battlegrounds. Implemented weapon upgrade systems, intuitive FPS controls, in-app purchases, and optimized 3D graphics.",
    img1: "assets/screenshots/Countercover-1.png",
    img2: "assets/screenshots/Countercover-2.png",
    img3: "assets/screenshots/Countercover-3.png",
    img4: "assets/screenshots/Countercover-4.png",
    img5: "assets/screenshots/Countercover-5.png",
    tech: ["Technologies: Unity3D · C# · Object-Oriented Programming (OOP) · Performance Optimization · Unity Asset Management"],
    video:
      "https://drive.google.com/file/d/1W44FSYVKmj_NML-BYbOyji5Rw0sYx4Kw/view"
  },
  ar: {
    title: "Football City Hunt",
    desc: "Description: A location-based AR application with five games that can be placed and played across city locations using GPS coordinates, triggering AR interactions within a 50-meter radius of landmarks.",
    img1: "assets/screenshots/Footballcity-1.png",
    img2: "assets/screenshots/Footballcity-2.png",
    img3: "assets/screenshots/Footballcity-3.png",
    img4: "assets/screenshots/Footballcity-4.png",
    img5: "assets/screenshots/Footballcity-5.png",
    tech: ["Technologies: Unity3D · C# · AR Foundation · ARCore · ARKit · Cross-Platform Deployment"],
    video:
      "https://drive.google.com/file/d/19THQRLgNxU46AYri50gZtNV6CLvnBUFY/view"
  },
  christmas: {
    title: "Christmas Virtual Cheer",
    desc: "Description: A Mixed Reality Christmas application contains three games: Decorate a Christmas tree, build toys by fixing the toy parts, and build a gift box stack.",
    img1: "assets/screenshots/Christmas-1.png",
    img2: "assets/screenshots/Christmas-2.png",
    img3: "assets/screenshots/Christmas-3.png",
    img4: "assets/screenshots/Christmas-4.png",
    img5: "assets/screenshots/Christmas-5.png",
    tech: ["Technologies: Unity3D · C# · Meta XR SDKs · Performance Optimization"],
    video:
      "https://drive.google.com/file/d/1iORHtjJeBH37y2L7N5fpWtIy-2LrbYiG/view"
  }
};

// ===============================
// MODAL OPEN / CLOSE LOGIC
// ===============================
function openProject(key) {
  const project = projectData[key];
  if (!project) return;

  document.getElementById("detailsTitle").innerText = project.title;
  document.getElementById("detailsDesc").innerText = project.desc;
  document.getElementById("detailsTech").innerText = project.tech;

  const img1 = document.getElementById("detailsImg1");
  const img2 = document.getElementById("detailsImg2");
  const img3 = document.getElementById("detailsImg3");
  const img4 = document.getElementById("detailsImg4");
  const img5 = document.getElementById("detailsImg5");

    // Handle images (1–5)
  for (let i = 1; i <= 5; i++) {
    const img = document.getElementById(`detailsImg${i}`);
    const imgKey = `img${i}`;

    if (project[imgKey]) {
      img.src = project[imgKey];
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }

  document.getElementById("detailsVideo").href = project.video;

  toggle("projectDetails");
}


function closeProjectDetails() {
  toggle("projects");
}

// ===============================
// INITIAL STATE
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  showHome();
});
