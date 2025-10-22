const video = document.getElementById("video");
const playPauseBtn = document.getElementById("play-pause");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const muteBtn = document.getElementById("mute");
const fullscreenBtn = document.getElementById("fullscreen");
const playIcon = playPauseBtn.querySelector("i");

// ▶️ Play or Pause Video
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.classList.replace("fa-play", "fa-pause");
  } else {
    video.pause();
    playIcon.classList.replace("fa-pause", "fa-play");
  }
});

// 🔄 Update Progress Bar
video.addEventListener("timeupdate", () => {
  progress.value = (video.currentTime / video.duration) * 100;
});

// ⏩ Seek Video
progress.addEventListener("input", () => {
  video.currentTime = (progress.value / 100) * video.duration;
});

// 🔊 Volume Control
volume.addEventListener("input", () => {
  video.volume = volume.value;
});

// 🔇 Mute / Unmute
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.innerHTML = video.muted
    ? '<i class="fas fa-volume-mute"></i>'
    : '<i class="fas fa-volume-up"></i>';
});

// 🖥️ Fullscreen
fullscreenBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    video.parentElement.requestFullscreen();
  }
});
