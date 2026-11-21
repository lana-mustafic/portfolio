const stage = document.querySelector(".hero__stage");
const video = document.querySelector(".hero__video");
const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

video.muted = true;
video.defaultMuted = true;
video.volume = 0;
video.controls = false;
video.playsInline = true;
video.setAttribute("muted", "");
video.setAttribute("playsinline", "true");
video.setAttribute("webkit-playsinline", "true");

let heroLeft = false;

const still = document.querySelector(".hero__still");

function revealVideo() {
  video.classList.add("is-playing");
  if (still) still.classList.add("is-gone");
}

function playVideo() {
  if (heroLeft || video.ended) return;
  if (!video.paused) return;

  video.muted = true;
  video.playsInline = true;
  const play = video.play();
  if (play && typeof play.then === "function") {
    play.then(revealVideo).catch(() => {});
  }
}

function unlockVideo() {
  playVideo();
}

window.addEventListener("pointerdown", unlockVideo, { capture: true });
window.addEventListener("touchstart", unlockVideo, { capture: true });

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
video.addEventListener("playing", revealVideo);
video.addEventListener("loadedmetadata", playVideo);
video.addEventListener("loadeddata", playVideo);
video.addEventListener("canplay", playVideo);
video.addEventListener("canplaythrough", playVideo);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") playVideo();
});
window.addEventListener("pageshow", playVideo);
video.addEventListener("timeupdate", sync);
video.addEventListener("ended", () => {
  showButton();
  showHints(99);
});

const folders = document.querySelector(".folders");
const doing = document.querySelector(".doing");

function openFolders(button) {
  heroLeft = true;
  const rect = button.getBoundingClientRect();
  folders.style.setProperty("--open-x", `${rect.left + rect.width / 2}px`);
  folders.style.setProperty("--open-y", `${rect.top + rect.height / 2}px`);
  folders.hidden = false;
  folders.classList.add("is-open");
  document.body.classList.add("is-folders");
  video.pause();
}

const heroButton = document.querySelector(".hero__button");

function pressHeroButton(event) {
  if (!stage.classList.contains("is-done")) return;
  event.preventDefault();
  openFolders(heroButton);
}

heroButton.addEventListener("pointerup", pressHeroButton);
heroButton.addEventListener("click", pressHeroButton);

const sheet = document.querySelector(".sheet");
const sheetName = document.querySelector(".sheet__name");
const sheetVia = document.querySelector(".sheet__via");
const pageNames = {
  about: "About",
  skills: "Skills",
  projects: "Projects",
  education: "Education",
};

function openSheet(id, from) {
  if (!pageNames[id]) return;
  sheet.dataset.page = id;
  sheetName.textContent = pageNames[id];
  const viaSkills = id === "projects" && from === "skills";
  sheetVia.hidden = !viaSkills;
  sheet.classList.toggle("is-via", viaSkills);
  if (sheet.contains(document.activeElement)) document.activeElement.blur();
  sheet.hidden = false;
  const pinTop = () => {
    sheet.scrollTop = 0;
  };
  pinTop();
  requestAnimationFrame(pinTop);
}

document.querySelectorAll(".folder").forEach((folder) => {
  folder.addEventListener("click", () => openSheet(folder.dataset.page));
  folder.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openSheet(folder.dataset.page);
  });
});

document.querySelector(".sheet__home").addEventListener("click", () => {
  sheet.hidden = true;
  if (typeof closeWork === "function") closeWork();
});

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-jump]").forEach((item) => item.classList.remove("is-on"));
    button.classList.add("is-on");
    document.getElementById(button.dataset.jump)?.scrollIntoView({ block: "start" });
  });
});

function openContact() {
  heroLeft = true;
  video.pause();
  sheet.hidden = true;
  if (typeof closeWork === "function") closeWork();
  if (typeof closeWin === "function") closeWin();
  doing.hidden = false;
  requestAnimationFrame(() => {
    doing.classList.add("is-open");
  });
  folders.classList.remove("is-open");

  const hideFolders = (event) => {
    if (event && event.target !== folders) return;
    folders.hidden = true;
    document.body.classList.remove("is-folders");
    folders.removeEventListener("transitionend", hideFolders);
  };

  if (motion.matches || folders.hidden) {
    hideFolders();
    return;
  }

  folders.addEventListener("transitionend", hideFolders);
}

document.querySelectorAll(".go-contact").forEach((button) => {
  button.addEventListener("click", openContact);
});

const messageWindow = document.querySelector(".ms-msg");
const messageForm = document.querySelector(".ms-msg__form");
const messageNote = document.querySelector(".ms-msg__note");
const emailAddress = "lana-mustafic@outlook.com";

function showHome() {
  doing.classList.remove("is-open");
  doing.hidden = true;
  folders.classList.remove("is-open");
  folders.hidden = true;
  document.body.classList.remove("is-folders");
}

document.querySelector(".doing__back").addEventListener("click", () => {
  doing.classList.remove("is-open");
  doing.hidden = true;
  folders.hidden = false;
  document.body.classList.add("is-folders");
  folders.classList.add("is-open");
});

document.querySelector('[data-ms="message"]').addEventListener("click", () => {
  messageNote.hidden = true;
  messageWindow.scrollIntoView({ block: "nearest" });
  messageForm.querySelector("input").focus();
});

document.querySelector('[data-ms="home"]').addEventListener("click", showHome);

document.querySelector('[data-ms="copy"]').addEventListener("click", async () => {
  const copied = document.querySelector(".ms__copied");
  try {
    await navigator.clipboard.writeText(emailAddress);
  } catch {
    const field = document.createElement("textarea");
    field.value = emailAddress;
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  }
  copied.hidden = false;
});

messageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(messageForm);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const subjectText = String(data.get("subject") || "").trim();
  const message = String(data.get("message") || "").trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const send = messageForm.querySelector(".ms-msg__send");
  messageNote.hidden = false;
  if (!name || !emailOk || !message) {
    messageNote.textContent = "Fill in your name, a valid email, and a message.";
    messageNote.className = "ms-msg__note is-error";
    return;
  }
  send.disabled = true;
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch("https://formsubmit.co/ajax/lana-mustafic@outlook.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: subjectText || `Message from ${name}`,
        message,
        _captcha: "false",
      }),
      signal: controller.signal,
    });
    let result = {};
    try {
      result = await response.json();
    } catch {
      result = {};
    }
    const sent = response.ok && String(result.success) === "true";
    if (!sent) {
      const detail = String(result.message || "");
      messageNote.textContent = /activat/i.test(detail)
        ? "Almost. Open the Activate Form email in Outlook, click it once, then send again."
        : "The message could not be sent. Use Email Me instead.";
      messageNote.className = "ms-msg__note is-error";
      return;
    }
    messageForm.reset();
    messageNote.textContent = "Message sent. Lana will get it by email.";
    messageNote.className = "ms-msg__note is-ok";
  } catch {
    messageNote.textContent = "The message could not be sent. Use Email Me instead.";
    messageNote.className = "ms-msg__note is-error";
  } finally {
    window.clearTimeout(timer);
    send.disabled = false;
  }
});

const pcWin = document.querySelector(".pc__win");
const pcTitle = document.querySelector(".pc__win-title");
const like = document.querySelector(".like");
const likeCount = document.querySelector(".like__count");

let winTimer = 0;

function closeWin() {
  pcWin.classList.remove("is-open");
  window.clearTimeout(winTimer);
  winTimer = window.setTimeout(() => {
    if (!pcWin.classList.contains("is-open")) pcWin.hidden = true;
  }, 200);
}

function openWin(icon) {
  window.clearTimeout(winTimer);
  pcWin.dataset.tone = icon.dataset.tone || "pink";
  pcTitle.textContent = icon.dataset.title;
  pcWin.querySelectorAll(".pc__pane").forEach((pane) => {
    pane.hidden = pane.dataset.pane !== icon.dataset.win;
  });
  pcWin.hidden = false;
  pcWin.classList.add("is-open");
}

document.querySelectorAll(".pc__icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.dataset.go) {
      closeWin();
      openSheet(icon.dataset.go, "skills");
      return;
    }
    openWin(icon);
  });
});

document.querySelector(".pc__x").addEventListener("click", closeWin);
document.querySelector(".sheet__home").addEventListener("click", closeWin);

document.querySelector(".sheet__back").addEventListener("click", () => {
  if (typeof closeWork === "function") closeWork();
  openSheet("skills");
});

like.addEventListener("click", () => {
  const on = like.classList.toggle("is-on");
  like.setAttribute("aria-pressed", on ? "true" : "false");
  likeCount.hidden = !on;
});

const workGrid = document.querySelector(".works");
const workView = document.querySelector(".work-view");

function closeWork() {
  if (!workView || !workGrid) return;
  workView.hidden = true;
  workGrid.hidden = false;
  workView.querySelectorAll("[data-project]").forEach((panel) => {
    panel.hidden = true;
  });
}

function openWork(id) {
  workGrid.hidden = true;
  workView.hidden = false;
  workView.querySelectorAll("[data-project]").forEach((panel) => {
    panel.hidden = panel.dataset.project !== id;
  });
  document.querySelector(".sheet").scrollTop = 0;
}

document.querySelectorAll(".work__more").forEach((button) => {
  button.addEventListener("click", () => openWork(button.dataset.open));
});

document.querySelector(".work-view__back").addEventListener("click", closeWork);

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (workView && !workView.hidden) closeWork();
  else if (!pcWin.hidden) closeWin();
});

document.querySelectorAll(".fb-post").forEach((post) => {
  const like = post.querySelector(".fb-like");
  const react = post.querySelector(".fb-react");
  const comment = post.querySelector(".fb-comment");
  const composer = post.querySelector(".fb-composer");
  const input = composer.querySelector("input");
  const list = post.querySelector(".fb-comments");

  like.addEventListener("click", () => {
    const on = like.classList.toggle("is-on");
    like.setAttribute("aria-pressed", on ? "true" : "false");
    react.hidden = !on;
  });

  comment.addEventListener("click", () => {
    const open = composer.hidden;
    composer.hidden = !open;
    comment.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) input.focus();
  });

  composer.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const line = document.createElement("p");
    const name = document.createElement("b");
    name.className = "fb-name";
    name.textContent = "Lana";
    line.append(name, document.createTextNode(" " + text));
    list.append(line);
    input.value = "";
  });
});

playVideo();
if (!video.paused) startWatch();
window.setTimeout(showButton, 2600);
const keepPlaying = window.setInterval(() => {
  if (heroLeft || video.ended || !video.paused) {
    window.clearInterval(keepPlaying);
    return;
  }
  playVideo();
}, 300);
window.setTimeout(() => window.clearInterval(keepPlaying), 8000);
