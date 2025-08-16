
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

  //age calculator
  let age = 0;
  const nowYear = new Date().getFullYear();
  const nowMonth = new Date().getMonth() +1;
  const nowDay = new Date().getDate();
  const ageElement = document.getElementById("age");
  
  age = nowYear - 2000;

  if (nowMonth < 6){
    age -= 1;
  }
  else if (nowMonth == 6){
    if (nowDay < 6){
      age -= 1;
    }
  }
  ageElement.innerHTML = age;
