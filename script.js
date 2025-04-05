// Resume Modal Functionality
document.getElementById("resumeButton").onclick = function() {
  document.getElementById("resumeModal").style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function() {
  document.getElementById("resumeModal").style.display = "none";
}
