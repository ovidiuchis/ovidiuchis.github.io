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
    document.getElementById(
      "tagline"
    ).innerHTML = `${translations[lang].tagline} <a href="https://asw.ro/" style="color: #ed3c47" target="_blank">@Alfa Software</a>`;
    document.getElementById("skills-title").textContent =
      translations[lang].skills;
    document.getElementById("experience-title").textContent =
      translations[lang].experience;

    // Update skills list
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = translations[lang].skillsList
      .map((skill) => `<li>${skill}</li>`)
      .join("");

    // Update experience list
    const experienceList = document.getElementById("experience-list");
    experienceList.innerHTML = translations[lang].experienceList
      .map((exp) => `<li>${exp}</li>`)
      .join("");

    //update quickbuilds
    document.getElementById("quick-builds-title").textContent =
      translations[lang].quickbuilds;
    document.getElementById("quick-builds-description").innerHTML =
      translations[lang].quickbuildsdescription;
    document.getElementById("contact-description").innerHTML =
      translations[lang].contactdescription;
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
  const savedLang =
    localStorage.getItem("preferredLanguage") || languageSelector.value;
  languageSelector.value = savedLang;
  updateLanguage(savedLang, true);
});
