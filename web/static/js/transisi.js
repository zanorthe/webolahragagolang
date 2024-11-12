document.addEventListener("DOMContentLoaded", function () {
  const link = document.querySelector(".linknya"); // The link that triggers the page transition

  if (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior

      // Add the class to trigger the page sliding effect
      document.body.classList.add("transition-active");

      // Set a timeout for navigation after animation completes
      setTimeout(function () {
        const targetHref = link.getAttribute("href");
        window.location.href = targetHref; // Navigate to the target page after animation
      }, 700); // Duration of the animation in milliseconds (1 second)
    });
  }
});

// $(document).ready(function () {
//   // Tambahkan kelas fade-in saat halaman dimuat
//   $("body").addClass("fade-in");
//   setTimeout(function () {
//     $("body").addClass("fade-in-active"); // Aktifkan fade-in
//   }, 10); // Menambahkan sedikit delay agar efek terlihat

//   // Ketika mengklik link
//   $(".linktransisi").click(function (event) {
//     event.preventDefault(); // Mencegah perilaku default dari link

//     // Tambahkan kelas fade-out untuk memulai efek transisi
//     $("body").removeClass("fade-in-active").addClass("fade-out");

//     // Ambil URL untuk berpindah halaman
//     var targetUrl = $(this).attr("href");

//     // Ganti ke halaman setelah efek selesai
//     setTimeout(function () {
//       window.location.href = targetUrl;
//     }, 500); // Durasi harus sama dengan durasi transisi
//   });
// });

// $(document).ready(function () {
//   $(".linktransisi").click(function (event) {
//     event.preventDefault(); // Mencegah perilaku default dari link

//     // Tambahkan kelas fade-out untuk memulai efek transisi
//     $("body").addClass("fade-out");

//     // Ambil URL untuk berpindah halaman
//     var targetUrl = $(this).attr("href");

//     // Ganti ke halaman setelah efek selesai
//     setTimeout(function () {
//       window.location.href = targetUrl;
//     }, 500); // Durasi harus sama dengan durasi transisi
//   });
// });
