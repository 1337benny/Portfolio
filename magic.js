// const { createElement } = require("react");

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

  //project pop up images
  const overlay = document.getElementById("overlay");
  const pclProject = document.getElementById("project1");
  const portfolioProject = document.getElementById("project2");
  const hatProject = document.getElementById("project3");
  const cvProject = document.getElementById("project4");
  const podcastProject = document.getElementById("project5");
  const popUpContainer = document.getElementById("projectInfoPopUp");
  popUpContainer.style.display = "none";
  let picArray = [];
  let imgShowingIndex = 0;

  //show pop up
  function showPopUp(picArray) {
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
    popUpContainer.style.display = "block";

    const oldPictures = popUpContainer.querySelector(".popUpPictures");
  if (oldPictures) {
    oldPictures.remove();
  }
    const pictureContainer = document.createElement("div");
    pictureContainer.classList.add("popUpPictures");
    popUpContainer.appendChild(pictureContainer);

    const imgShowing = document.createElement("img");
    imgShowing.classList.add("popUpPicture");
    imgShowing.id = "imgShowing";
    imgShowing.src = picArray[0];
    pictureContainer.appendChild(imgShowing);
    
  }
  //event on each project div
  pclProject.addEventListener('click', () => {
    const images = [
      "pictures/pclProject/pcl-landing-page.png",
      "pictures/pclProject/pcl-homepage.png",
      "pictures/pclProject/pcl-my-projects.png",
      "pictures/pclProject/pcl-my-checklists.png",
      "pictures/pclProject/pcl-edit-checklist.png",
      "pictures/pclProject/pcl-customers.png",
      "pictures/pclProject/pcl-my-projects.png",
      "pictures/pclProject/pcl-checklist-in-project.png",
      "pictures/pclProject/pcl-checklist-in-project-print.png",
      "pictures/pclProject/pcl-print.png",
      "pictures/pclProject/pcl-my-profile.png",
      ]
    picArray = images;
    showPopUp(images)
  })

  hatProject.addEventListener('click', () => {
    
      const images = [
      "pictures/hatProject/hat-startpage.png",
      "pictures/hatProject/hat-standard-hats.png",
      "pictures/hatProject/hat-new-order.png",
      "pictures/hatProject/hat-orders.png",
      "pictures/hatProject/hat-sales.png"
      ]
    picArray = images;
    showPopUp(images)
  })

  cvProject.addEventListener('click', () => {
    const images = [
      "pictures/cvProject/cv-startpage.png",
      "pictures/cvProject/cv-profile.png",
      "pictures/cvProject/cv-conversations.png",
      "pictures/cvProject/cv-conversation.png",
      "pictures/cvProject/cv-search.png",
      ]
    picArray = images;
    showPopUp(images)
  })

  podcastProject.addEventListener('click', () => {
    const images = [
      "pictures/podProject/pod-startpage.png",
      "pictures/podProject/pod-subscribe.png",
      "pictures/podProject/pod-edit.png",
      "pictures/podProject/pod-category.png",
      ]
    picArray = images;
    showPopUp(images)
  })

  //Handle picture selection
  const nextArrow = document.getElementById("arrowNext");
  const backArrow = document.getElementById("arrowBack");

  nextArrow.addEventListener('click', () => {
    imgShowingIndex += 1;
    if (imgShowingIndex >= picArray.length){
      imgShowingIndex = 0;
    }

    const imgShowing = document.getElementById("imgShowing");
    imgShowing.src = picArray[imgShowingIndex];
    
  })

  backArrow.addEventListener('click', () => {
    imgShowingIndex -= 1;
    if (imgShowingIndex < 0){
      imgShowingIndex = (picArray.length - 1);
    }

    const imgShowing = document.getElementById("imgShowing");
    imgShowing.src = picArray[imgShowingIndex];
    
    
  })

  //Handle close pop up

  const closeButton = document.getElementById("closePopUp");

  closeButton.addEventListener('click', () => {
    document.body.style.overflow = "";
    overlay.style.display = "none";
    popUpContainer.style.display = "none";
  })

