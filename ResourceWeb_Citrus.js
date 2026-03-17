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
pomImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
manImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
citImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
papImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
kumImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
graImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
meyImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
sweImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
budImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
tanImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
bitImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
lemImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
keyImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
limqImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
limeImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

tab.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

function openTab(evt, tabName) {

  // Get all tab content
  var tabcontent = document.getElementsByClassName("tabcontent");

  // Hide all tab content
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the clicked tab
  document.getElementById(tabName).style.display = "block";

}