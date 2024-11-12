document.addEventListener("DOMContentLoaded", function () {
  // Select the 'YOURHEALTH' link
  const sidebarLink = document.getElementById("sidebar-link");

  // Select the sidebar
  const sidebar = document.getElementById("sidebar");

  // When the link is clicked, trigger the animation and then navigate
  sidebarLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent immediate navigation

    // Get all elements with the 'fall-out-trigger' class
    const fallOutElements = document.querySelectorAll(".fall-out-trigger");

    // Trigger animation on all elements
    fallOutElements.forEach((element) => {
      element.classList.add("fall-out"); // Add the 'fall-out' class to trigger animation
    });

    // Add the 'fall-out' animation to the sidebar as well
    sidebar.classList.add("fall-out");

    // After the animation duration (adjust based on your CSS), navigate to the target link
    setTimeout(() => {
      window.location.href = sidebarLink.href; // Navigate to the 'YOURHEALTH' page
    }, 1500); // Adjust the timeout to match the duration of your animation
  });

  // Prevent the animation from triggering when clicking anywhere else
  document.body.addEventListener("click", function (event) {
    // If the click is not on the sidebar link, remove any added animation classes
    if (!event.target.closest("#sidebar-link")) {
      const fallOutElements = document.querySelectorAll(".fall-out-trigger");
      fallOutElements.forEach((element) => {
        element.classList.remove("fall-out"); // Remove the animation class if clicked outside
      });

      // Also remove the 'fall-out' animation from the sidebar
      sidebar.classList.remove("fall-out");
    }
  });
});
