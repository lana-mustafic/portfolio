const stage = document.querySelector(".hero__stage");
const video = document.querySelector(".hero__video");
const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

video.muted = true;
video.defaultMuted = true;
video.volume = 0;

function playVideo() {
  if (motion.matches) return;

  const play = video.play();
  if (play && typeof play.catch === "function") {
    play.catch(() => {});
  }
}

const hints = [...document.querySelectorAll(".hint")];
const bursts = [...document.querySelectorAll(".hero__callout .burst")];
const cta = document.querySelector(".line--cta");
const hintAt = [3.35, 3.68, 4.02, 4.36];
const talkStart = 2.15;
const pointAt = 2.4;

function showHints(time) {
  hints.forEach((hint, index) => {
    if (time < hintAt[index]) return;
    hint.classList.add("is-in");
    bursts.forEach((burst) => burst.children[index].classList.add("is-in"));
  });
  if (time >= talkStart) cta.classList.add("is-in");
}
let watching = false;

function showButton() {
  stage.classList.add("is-done");
}

function sync() {
  const time = video.currentTime;
  if (time >= pointAt) showButton();
  showHints(time);
}

function watch() {
  sync();
  if (!video.paused && !video.ended) {
    requestAnimationFrame(watch);
    return;
  }
  watching = false;
}

function startWatch() {
  if (watching) return;
  watching = true;
  requestAnimationFrame(watch);
}

video.addEventListener("play", startWatch);
video.addEventListener("timeupdate", sync);
video.addEventListener("ended", () => {
  showButton();
  showHints(99);
});

const folders = document.querySelector(".folders");
const doing = document.querySelector(".doing");
const doingVideo = document.querySelector(".doing__video");

doingVideo.muted = true;
doingVideo.defaultMuted = true;
doingVideo.volume = 0;
doingVideo.loop = true;

function playDoing() {
  if (motion.matches) return;

  doingVideo.currentTime = 0;
  const play = doingVideo.play();
  if (play && typeof play.catch === "function") {
    play.catch(() => {});
  }
}

function openFolders(button) {
  const rect = button.getBoundingClientRect();
  folders.style.setProperty("--open-x", `${rect.left + rect.width / 2}px`);
  folders.style.setProperty("--open-y", `${rect.top + rect.height / 2}px`);
  folders.hidden = false;
  document.body.classList.add("is-folders");
  video.pause();
  doingVideo.pause();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      folders.classList.add("is-open");
    });
  });
}

document.querySelector(".hero__button").addEventListener("click", (event) => {
  openFolders(event.currentTarget);
});

document.querySelector(".doing__button").addEventListener("click", (event) => {
  openFolders(event.currentTarget);
});

document.querySelector(".folders__back").addEventListener("click", () => {
  video.pause();
  doing.hidden = false;
  doing.classList.remove("is-live");
  requestAnimationFrame(() => {
    doing.classList.add("is-open");
    requestAnimationFrame(() => doing.classList.add("is-live"));
  });
  playDoing();
  folders.classList.remove("is-open");

  const hideFolders = (event) => {
    if (event && event.target !== folders) return;
    folders.hidden = true;
    document.body.classList.remove("is-folders");
    folders.removeEventListener("transitionend", hideFolders);
  };

  if (motion.matches) {
    hideFolders();
    return;
  }

  folders.addEventListener("transitionend", hideFolders);
});

playVideo();
if (!video.paused) startWatch();
