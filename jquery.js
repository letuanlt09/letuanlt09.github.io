function testn() {
  console.log("here");
}
function aboutClick() {
  $("#projectContainer, #workContainer, #resumeContainer").addClass("hidden");
  $("#aboutContainer").removeClass("hidden");
}
function projectClick() {
  $("#aboutContainer, #workContainer, #resumeContainer").addClass("hidden");
  $("#projectContainer").removeClass("hidden");
}
function workClick() {
  $("#aboutContainer, #projectContainer, #resumeContainer").addClass("hidden");
  $("#workContainer").removeClass("hidden");
}
function resumeClick() {
  $("#aboutContainer, #projectContainer, #workContainer").addClass("hidden");
  $("#resumeContainer").removeClass("hidden");
}
