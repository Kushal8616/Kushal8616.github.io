// Resume Modal
document.getElementById("resumeButton").onclick = function() {
  document.getElementById("resumeModal").style.display = "flex";
}

document.getElementsByClassName("close")[0].onclick = function() {
  document.getElementById("resumeModal").style.display = "none";
}

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
