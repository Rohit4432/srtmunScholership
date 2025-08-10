document
  .getElementById("showNotificationBtn")
  .addEventListener("click", function () {
    document.getElementById("notificationPanel").classList.add("active");
  });

function closePanel() {
  document.getElementById("notificationPanel").classList.remove("active");
}
