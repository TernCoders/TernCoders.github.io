window.addEventListener("DOMContentLoaded", () => {
  const e = document.getElementById("courses");
  e &&
    (e.onload = () => {
      try {
        e.contentDocument.querySelectorAll("a").forEach((e) => {
          e.setAttribute("target", "_top");
        });
      } catch (e) {
        console.warn(
          "Could not access iframe content (CORS or browser restriction)."
        );
      }
    });
});
const hamburger = document.querySelector(".hamburger"),
  navMenu = document.querySelector(".nav-menu");
function hideElements() {
  [
    "contact-us",
    "contact-link",
    "nav-login-link",
    "nav-register-link",
    "footer-buttons",
    "fqc",
    "fqc2",
  ].forEach((e) => {
    const t = document.getElementById(e);
    t && (t.style.display = "none");
  }),
    ["fkmau", "fkmau2"].forEach((e) => {
      const t = document.getElementById(e);
      t && (t.style.display = "block");
    });
}
function toggleAnswer(e) {
  const t = document.getElementById(`answer${e}`);
  t &&
    (t.style.display =
      "none" === t.style.display || "" === t.style.display ? "block" : "none");
}
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"), navMenu.classList.toggle("active");
}),
  window.addEventListener("DOMContentLoaded", () => {
    const e = document.getElementById("contact-us");
    fetch("contact.php")
      .then((e) => e.text())
      .then((t) => {
        !t || t.length < 20 || t.includes("<?php") || t.includes("Fatal error")
          ? hideElements()
          : e && ((e.src = "contact.php"), (e.style.display = "block"));
      })
      .catch(() => hideElements());
  });
for (let e = 1; e <= 18; e++)
  window[`showBtnAnswer${e}`] = () => toggleAnswer(e);
document.addEventListener("DOMContentLoaded", () => {
  window.innerWidth > window.innerHeight &&
    document.querySelectorAll(".kmau-main-box-h3").forEach((e) => {
      const t = e.textContent.trim();
      (e.innerHTML = ""), (e.style.position = "relative");
      const n = document.createElement("span");
      (n.style.display = "inline"),
        (n.style.fontFamily = '"Sora",sans-serif'),
        (n.style.fontWeight = "bold");
      const o = document.createElement("span");
      (o.className = "cursor"),
        (o.style.position = "absolute"),
        e.appendChild(n),
        e.appendChild(o);
      let l = 0;
      !(function e() {
        l <= t.length
          ? ((n.textContent = t.slice(0, l)),
            (o.style.left = `${n.offsetWidth}px`),
            l++,
            setTimeout(e, 50))
          : o.remove();
      })();
    });
}),
  document.addEventListener("DOMContentLoaded", () => {
    window.innerHeight >= window.innerWidth &&
      document.querySelectorAll(".kmau-main-box-h3").forEach((e) => {
        const t = e.textContent.trim(),
          n = document.createElement("div");
        (n.style.position = "absolute"),
          (n.style.visibility = "hidden"),
          (n.style.fontFamily = '"Sora",sans-serif'),
          (n.style.fontWeight = "bold"),
          (n.style.fontSize = getComputedStyle(e).fontSize),
          (n.style.width = getComputedStyle(e).width),
          (n.style.whiteSpace = "normal"),
          (n.innerText = t),
          document.body.appendChild(n);
        const o = 1.5 * parseFloat(getComputedStyle(n).fontSize),
          l = Math.ceil(n.clientHeight / o);
        (e.style.minHeight = l * o + "px"), document.body.removeChild(n);
        const s = t.split(/\s+/);
        e.innerHTML = "";
        let i = 0;
        !(function t() {
          if (i >= s.length) return;
          const n = document.createElement("div");
          (n.style.display = "block"),
            (n.style.fontFamily = '"Sora",sans-serif'),
            (n.style.fontWeight = "bold");
          const o = document.createElement("span");
          (o.className = "cursor"), e.appendChild(n);
          let l = s.slice(i, i + 3).join(" "),
            c = 0;
          !(function e() {
            c <= l.length
              ? ((n.textContent = l.slice(0, c)),
                n.appendChild(o),
                c++,
                setTimeout(e, 50))
              : (n.removeChild(o), (i += 3), setTimeout(t));
          })();
        })();
      });
  });
