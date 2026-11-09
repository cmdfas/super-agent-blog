(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function storedTheme() {
    try {
      var value = localStorage.getItem("theme");
      return value === "light" || value === "dark" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    if (toggle) {
      var isDark = theme === "dark";
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
      );
    }
  }

  applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);

      try {
        localStorage.setItem("theme", next);
      } catch (error) {
        /* Theme still applies for this page view. */
      }
    });
  }

  var onSystemChange = function (event) {
    if (!storedTheme()) {
      applyTheme(event.matches ? "dark" : "light");
    }
  };

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", onSystemChange);
  } else if (typeof media.addListener === "function") {
    media.addListener(onSystemChange);
  }

  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
