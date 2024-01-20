const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
    event.target.removeEventListener("progress", onProgress);
  } else {
    progressBar.classList.remove("hide");
  }
};
const modelViewer = document.querySelector("model-viewer");
modelViewer.addEventListener("progress", onProgress);
window.switchSrc = (element, name) => {
  const base = "assets/" + name;
  modelViewer.src = base + ".glb";
  modelViewer.poster = base + ".webp";
  const slides = document.querySelectorAll(".slide");
  slides.forEach((element) => {
    element.classList.remove("selected");
  });
  element.classList.add("selected");
};

document.querySelector(".slider").addEventListener("beforexrselect", (ev) => {
  // Keep slider interactions from affecting the XR scene.
  ev.preventDefault();
});
