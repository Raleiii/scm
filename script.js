function initializePage() {
  const statusElement = document.getElementById("page-status");

  if (!statusElement) {
    return;
  }

  statusElement.textContent = "Page loaded successfully. Lint and tests are ready.";
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePage);
  } else {
    initializePage();
  }
}

if (typeof module !== "undefined") {
  module.exports = { initializePage };
}
