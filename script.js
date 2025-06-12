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
          "Could not access iframe content (CORS or browser restriction).",
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
function showBtnAnswer1() {
  const answer = document.getElementById("answer1");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer2() {
  const answer = document.getElementById("answer2");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer3() {
  const answer = document.getElementById("answer3");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer4() {
  const answer = document.getElementById("answer4");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer5() {
  const answer = document.getElementById("answer5");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer6() {
  const answer = document.getElementById("answer6");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer7() {
  const answer = document.getElementById("answer7");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer8() {
  const answer = document.getElementById("answer8");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer9() {
  const answer = document.getElementById("answer9");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer10() {
  const answer = document.getElementById("answer10");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer11() {
  const answer = document.getElementById("answer11");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer12() {
  const answer = document.getElementById("answer12");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer13() {
  const answer = document.getElementById("answer13");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer14() {
  const answer = document.getElementById("answer14");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer15() {
  const answer = document.getElementById("answer15");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer16() {
  const answer = document.getElementById("answer16");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer17() {
  const answer = document.getElementById("answer17");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
function showBtnAnswer18() {
  const answer = document.getElementById("answer18");
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
