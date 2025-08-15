
//Translation
let translations = {};
let currentLanguage = "SV";

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.innerText = translations[lang][key] || key;
  });
}

fetch("translation.json")
  .then(response => response.json())
  .then(data => {
    translations = data;
    setLanguage(currentLanguage); 
  })
  .catch(error => console.error("Fel vid inläsning av översättningar:", error));

  document.getElementById("translate").addEventListener("click", () => {
  currentLanguage = currentLanguage === "SV" ? "EN" : "SV";
  setLanguage(currentLanguage);});

  
  //Back to top button
  const backToTopButton = document.getElementById("topButton");
  backToTopButton.style.display = 'none';

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })