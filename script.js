var tags = ["coder", "artist", "baker"]
var currentTagIndex = 0;

var subtitleElement = document.getElementById("subtitles")

function updateSubtitle() {
  subtitleElement.innerHTML = tags[currentTagIndex]
  currentTagIndex = (currentTagIndex + 1) % tags.length
  setTimeout(updateSubtitle, 5000)
}

updateSubtitle();