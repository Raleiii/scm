const checkButton = document.querySelector("#check-button");
const statusTitle = document.querySelector("#status-title");
const statusMessage = document.querySelector("#status-message");

checkButton.addEventListener("click", () => {
  statusTitle.textContent = "Page check passed";
  statusMessage.textContent = "The JavaScript interaction ran successfully. ESLint checks source-code rules during the GitHub Actions workflow.";
});
