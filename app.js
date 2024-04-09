/*Name this external file gallery.js*/

function upDate(previewPic) {
  var src = previewPic.getAttribute("src");
  var alt = previewPic.getAttribute("alt");
  document.getElementById("image").style.backgroundImage = "url('" + src + "')";
  document.getElementById("image").innerHTML = alt;
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "none";
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here";
}

function indexing() {
  cimgs = document.querySelectorAll("img.preview");
  console.log(cimgs);
  for (var i = 0; i < cimgs.length; i++) {
    console.log(i);
    cimgs[i].setAttribute("tabindex", "0");
  }
}
