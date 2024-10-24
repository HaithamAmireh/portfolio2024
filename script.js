let htmlAboutTabs = document.querySelectorAll(".html-about");
let htmlAboutCodeView = document.querySelector("#html-about");

let pythonProjectTabs = document.querySelectorAll(".python-projects");
let pythonAboutCodeView = document.querySelector("#python-projects");

let yamlSkillsTabs = document.querySelectorAll(".yaml-skills");
let yamlAboutCodeView = document.querySelector("#yaml-skills");

// Function to update active tabs and code views
function updateTabsAndCode(activeTabClass, activeCodeView) {
  // Remove active classes from all tabs and code views
  htmlAboutTabs.forEach(tab => tab.classList.remove("active"));
  pythonProjectTabs.forEach(tab => tab.classList.remove("active"));
  yamlSkillsTabs.forEach(tab => tab.classList.remove("active"));
  htmlAboutCodeView.classList.add("hide-code");
  pythonAboutCodeView.classList.add("hide-code");
  yamlAboutCodeView.classList.add("hide-code");

  // Add active class to the clicked tab and its corresponding code view
  document.querySelectorAll(activeTabClass).forEach(tab => {
    tab.classList.add("active");
    activeCodeView.classList.remove("hide-code");
  });
}

// Event listeners for each tab group
htmlAboutTabs.forEach(item => item.addEventListener("click", () => updateTabsAndCode(".html-about", htmlAboutCodeView)));
pythonProjectTabs.forEach(item => item.addEventListener("click", () => updateTabsAndCode(".python-projects", pythonAboutCodeView)));
yamlSkillsTabs.forEach(item => item.addEventListener("click", () => updateTabsAndCode(".yaml-skills", yamlAboutCodeView)));
