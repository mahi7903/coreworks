// Jhalak Core Drilling — shared site behavior

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Contact form: AJAX submit to Netlify Forms so we can show an inline
  // success message instead of redirecting to a new page.
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      })
        .then(function () {
          var success = document.getElementById("form-success");
          if (success) success.classList.add("visible");
          form.reset();
          form.style.display = "none";
        })
        .catch(function () {
          // Fallback: let the browser submit normally if the AJAX post fails.
          form.submit();
        });
    });
  }

  // Set active nav link based on current page
  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
