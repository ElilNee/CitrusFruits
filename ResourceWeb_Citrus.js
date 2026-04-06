let currentFruit = "";

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var pomImg = document.getElementById("pomelo");
var manImg = document.getElementById("mandarin");
var citImg = document.getElementById("citron");
var papImg = document.getElementById("papeda");
var kumImg = document.getElementById("kumquat");
var graImg = document.getElementById("grapefruit");
var meyImg = document.getElementById("meyerlemon");
var sweImg = document.getElementById("sweetorange");
var budImg = document.getElementById("buddhashand");
var tanImg = document.getElementById("tangelo");
var bitImg = document.getElementById("bitterorange");
var lemImg = document.getElementById("lemon");
var keyImg = document.getElementById("keylime");
var limqImg = document.getElementById("limequat");
var limeImg = document.getElementById("lime");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var captionTabs = document.getElementsByClassName("tab");
var appearenceTab = document.getElementById("Appearence");
var tasteTab = document.getElementById("Taste");
var nutritionalinfoTab = document.getElementById("NutritionalInfo");
var healthbenefitsTab = document.getElementById("HealthBenefits");

const images = document.querySelectorAll(".Evolution img");

images.forEach(img => {
  img.onclick = function () {
    const fruitId = this.id;

    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    currentFruit = fruitId;
    showFruitContent(fruitId);
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

function updateTabs(fruitId) {
  const data = fruitData[fruitId];
  if (!data) return;

  document.getElementById("Appearence").innerHTML =
    "<p>" + data.appearance + "</p>";

  document.getElementById("Taste").innerHTML =
    "<p>" + data.taste + "</p>";

  document.getElementById("NutritionalInfo").innerHTML =
    "<p>" + data.nutrition + "</p>";

  document.getElementById("HealthBenefits").innerHTML =
    "<p>" + data.health + "</p>";

  // Show first tab first
  document.getElementById("Appearence").style.display = "block";

  // reset active tab
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  tablinks[0].classList.add("active");
}

function showFruitContent(fruitId) {
  // hide all fruit sections
  const allFruits = document.getElementsByClassName("fruit-content");
  for (let i = 0; i < allFruits.length; i++) {
    allFruits[i].style.display = "none";
  }

  // show selected fruit
  document.getElementById(fruitId + "-content").style.display = "block";

  // show first tab (Appearance)
  openTab(null, fruitId + "-Appearence");
}

function openTab(evt, tabName) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  var tablinks = document.getElementsByClassName("tablinks");

  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";

  if (evt) {
    evt.currentTarget.classList.add("active");
  }
}

