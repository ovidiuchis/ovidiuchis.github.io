document.addEventListener('DOMContentLoaded', function() {
  // Email obfuscation
  const username = 'ovidiuchis';
  const domain = 'icloud.com';
  const emailElement = document.getElementById('contact-email');
  const emailLink = document.getElementById('email-link');
  
  function updateEmail() {
    const email = `${username}@${domain}`;
    emailElement.textContent = email;
    emailLink.href = `mailto:${email}`;
  }

  // Set initial email
  updateEmail();

  // Language switching
  const languageSelector = document.getElementById('language-selector');

  function updateLanguage(lang) {
    // Add transition class
    document.body.classList.add('language-transition');
    
    // Update content
    document.title = translations[lang].title;
    document.getElementById('tagline').innerHTML = `${translations[lang].tagline} <a href="https://asw.ro/" style="color: #ed3c47" target="_blank">@Alfa Software</a>`;
    document.getElementById('skills-title').textContent = translations[lang].skills;
    document.getElementById('experience-title').textContent = translations[lang].experience;
    document.getElementById('contact-title').textContent = translations[lang].contact;
    document.getElementById('contact-text').textContent = translations[lang].reachOut;
    document.getElementById('from-cluj').textContent = translations[lang].fromCluj;

    // Update skills list
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = translations[lang].skillsList.map(skill => `<li>${skill}</li>`).join('');

    // Update experience list
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = translations[lang].experienceList.map(exp => `<li>${exp}</li>`).join('');

    // Remove transition class after animation
    setTimeout(() => {
      document.body.classList.remove('language-transition');
      // Update email after transition is complete
      updateEmail();
    }, 300);
  }

  languageSelector.addEventListener('change', function() {
    updateLanguage(this.value);
  });

  // Set initial language
  updateLanguage(languageSelector.value);
}); 