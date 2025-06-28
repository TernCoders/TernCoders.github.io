window.addEventListener("DOMContentLoaded", () => {
  const iframeCourses = document.getElementById("courses");
  if (iframeCourses) {
    iframeCourses.onload = () => {
      try {
        const links = iframeCourses.contentDocument.querySelectorAll("a");
        links.forEach((link) => {
          link.setAttribute("target", "_top");
        });
      } catch (e) {
        console.warn(
          "Could not access iframe content (CORS or browser restriction)."
        );
      }
    };
  }
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
function hideElements() {
  const idsToHide = [
    "contact-us",
    "contact-link",
    "nav-login-link",
    "nav-register-link",
    "footer-buttons",
    "fqc",
    "fqc2",
  ];
  const idsToShow = ["fkmau", "fkmau2"];
  idsToHide.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
  idsToShow.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
  });
}
window.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("contact-us");
  fetch("contact.php")
    .then((r) => r.text())
    .then((html) => {
      if (
        !html ||
        html.length < 20 ||
        html.includes("<?php") ||
        html.includes("Fatal error")
      ) {
        hideElements();
      } else if (iframe) {
        iframe.src = "contact.php";
        iframe.style.display = "block";
      }
    })
    .catch(() => hideElements());
});
function toggleAnswer(num) {
  const answer = document.getElementById(`answer${num}`);
  if (answer) {
    answer.style.display =
      answer.style.display === "none" || answer.style.display === ""
        ? "block"
        : "none";
  }
}
for (let i = 1; i <= 18; i++) {
  window[`showBtnAnswer${i}`] = () => toggleAnswer(i);
}
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > window.innerHeight) {
    const els = document.querySelectorAll(".kmau-main-box-h3");
    els.forEach((el) => {
      const text = el.textContent.trim();
      el.innerHTML = "";
      el.style.position = "relative";
      const line = document.createElement("span");
      line.style.display = "inline";
      line.style.fontFamily = '"Sora",sans-serif';
      line.style.fontWeight = "bold";
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      cursor.style.position = "absolute";
      el.appendChild(line);
      el.appendChild(cursor);
      let charIndex = 0;
      function typeChar() {
        if (charIndex <= text.length) {
          line.textContent = text.slice(0, charIndex);
          cursor.style.left = `${line.offsetWidth}px`;
          charIndex++;
          setTimeout(typeChar, 50);
        } else {
          cursor.remove();
        }
      }
      typeChar();
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerHeight >= window.innerWidth) {
    const els = document.querySelectorAll(".kmau-main-box-h3");
    els.forEach((el) => {
      const full = el.textContent.trim();
      const test = document.createElement("div");
      test.style.position = "absolute";
      test.style.visibility = "hidden";
      test.style.fontFamily = '"Sora",sans-serif';
      test.style.fontWeight = "bold";
      test.style.fontSize = getComputedStyle(el).fontSize;
      test.style.width = getComputedStyle(el).width;
      test.style.whiteSpace = "normal";
      test.innerText = full;
      document.body.appendChild(test);
      const lineHeight = parseFloat(getComputedStyle(test).fontSize) * 1.5;
      const lines = Math.ceil(test.clientHeight / lineHeight);
      el.style.minHeight = `${lines * lineHeight}px`;
      document.body.removeChild(test);
      const words = full.split(/\s+/);
      el.innerHTML = "";
      let wordIndex = 0;
      function typeLine() {
        if (wordIndex >= words.length) return;
        const line = document.createElement("div");
        line.style.display = "block";
        line.style.fontFamily = '"Sora",sans-serif';
        line.style.fontWeight = "bold";
        const cursor = document.createElement("span");
        cursor.className = "cursor";
        el.appendChild(line);
        let group = words.slice(wordIndex, wordIndex + 3).join(" ");
        let charIndex = 0;
        function typeChar() {
          if (charIndex <= group.length) {
            line.textContent = group.slice(0, charIndex);
            line.appendChild(cursor);
            charIndex++;
            setTimeout(typeChar, 50);
          } else {
            line.removeChild(cursor);
            wordIndex += 3;
            setTimeout(typeLine);
          }
        }
        typeChar();
      }
      typeLine();
    });
  }
});
