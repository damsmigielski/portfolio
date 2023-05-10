document.addEventListener("DOMContentLoaded", function () {
  var photos = [
    "/photos/FOLIO_00001.jpg",
    "/photos/FOLIO_00002.jpg",
    "/photos/FOLIO_00003.jpg",
    "/photos/FOLIO_00004.jpg",
    "/photos/FOLIO_00005.jpg",
    "/photos/FOLIO_00006.jpg",
    "/photos/FOLIO_00007.jpg",
    "/photos/FOLIO_00008.jpg",
    "/photos/FOLIO_00009.jpg",
    "/photos/FOLIO_00010.jpg",
    "/photos/FOLIO_00011.jpg",
    "/photos/FOLIO_00012.jpg",
    "/photos/FOLIO_00013.jpg",
    "/photos/FOLIO_00014.jpg",
    "/photos/FOLIO_00015.jpg",
    "/photos/FOLIO_00016.jpg",
    "/photos/FOLIO_00017.jpg",
    "/photos/FOLIO_00018.jpg",
    "/photos/FOLIO_00019.jpg",
    "/photos/FOLIO_00020.jpg",
    "/photos/FOLIO_00021.jpg",
    "/photos/FOLIO_00022.jpg",
    "/photos/FOLIO_00023.jpg",
    "/photos/FOLIO_00024.jpg",
    "/photos/FOLIO_00025.jpg",
    "/photos/FOLIO_00026.jpg",
    "/photos/FOLIO_00027.jpg",
    "/photos/FOLIO_00028.jpg",
    "/photos/FOLIO_00029.jpg",
    "/photos/FOLIO_00030.jpg",
    "/photos/FOLIO_00031.jpg",
    "/photos/FOLIO_00032.jpg",
    "/photos/FOLIO_00033.jpg",
    "/photos/FOLIO_00034.jpg",
    "/photos/FOLIO_00035.jpg",
    "/photos/FOLIO_00036.jpg",
    "/photos/FOLIO_00037.jpg",
    "/photos/FOLIO_00038.jpg",
    "/photos/FOLIO_00039.jpg",
    "/photos/FOLIO_00040.jpg",
    "/photos/FOLIO_00041.jpg",
  ];

  var index = 0;
  var interval = setInterval(function () {
    index = Math.floor(Math.random() * photos.length);
    document.getElementById("photo").src = photos[index];
  }, 450);

  var photo = document.getElementById("photo");
  photo.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
  photo.addEventListener("mouseleave", function () {
    interval = setInterval(function () {
      index = Math.floor(Math.random() * photos.length);
      document.getElementById("photo").src = photos[index];
    }, 450);
  });
});

var textContainer = document.getElementById("text-container");
var cursor = document.getElementById("cursor");

textContainer.addEventListener("mousemove", function (e) {
  cursor.style.display = "block";
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

textContainer.addEventListener("mouseleave", function (e) {
  cursor.style.display = "none";
});

var textContainer = document.getElementById("text-container");
var cursor = document.getElementById("cursor");

textContainer.addEventListener("mousemove", function (e) {
  cursor.style.display = "block";
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

textContainer.addEventListener("mouseleave", function (e) {
  cursor.style.display = "none";
});

function showImage() {
  document.getElementById("myImage").style.display = "flex";
}

function hideImage() {
  document.getElementById("myImage").style.display = "none";
}
