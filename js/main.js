document.addEventListener("DOMContentLoaded", function () {
  // Email obfuscation
  const username = "ovidiuchis";
  const domain = "icloud.com";
  const emailLink = document.getElementById("email-link");

  function updateEmail() {
    const email = `${username}@${domain}`;
    emailLink.href = `mailto:${email}`;
  }

  // Language switching
  const languageSelector = document.getElementById("language-selector");

  function updateLanguage(lang, isInitialLoad = false) {
    if (!isInitialLoad) {
      // Add transition class only for language changes
      document.body.classList.add("language-transition");
    }

    // Update content
    document.title = translations[lang].title;
    document.querySelector(".role").textContent = translations[lang].role;
    document.getElementById(
      "tagline"
    ).innerHTML = `${translations[lang].tagline} <a href="https://asw.ro/" style="color: #ed3c47" target="_blank">@Alfa Software</a>`;
    document.getElementById("skills-title").textContent = translations[lang].skills;
    document.getElementById("experience-title").textContent = translations[lang].experience;

    // Update skills list
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = translations[lang].skillsList.map(skill => `<li>${skill}</li>`).join("");

    // Update experience list
    const experienceList = document.getElementById("experience-list");
    experienceList.innerHTML = translations[lang].experienceList.map(exp => `<li>${exp}</li>`).join("");

    // Update tech contact section
    document.getElementById("tech-contact-title").textContent = translations[lang].techtitle;

    // Update tech contact list
    const techContactList = document.getElementById("tech-contact-list");
    techContactList.innerHTML = translations[lang].techlist.map(item => `<li>${item}</li>`).join("");

    // Update email
    updateEmail();

    if (!isInitialLoad) {
      // Remove transition class after animation
      setTimeout(() => {
        document.body.classList.remove("language-transition");
      }, 300);
    }
  }

  languageSelector.addEventListener("change", function () {
    const selectedLang = this.value;
    localStorage.setItem("preferredLanguage", selectedLang);
    updateLanguage(selectedLang);
  });

  // Set initial language with saved preference
  const savedLang = localStorage.getItem("preferredLanguage") || languageSelector.value;
  languageSelector.value = savedLang;
  updateLanguage(savedLang, true);
});
