$(document).ready(function () {
  // Tambahkan kelas fade-in saat halaman dimuat
  $("body").addClass("fade-in");
  setTimeout(function () {
    $("body").addClass("fade-in-active"); // Aktifkan fade-in
  }, 10); // Menambahkan sedikit delay agar efek terlihat

  // Ketika mengklik link
  $(".linktransisi").click(function (event) {
    event.preventDefault(); // Mencegah perilaku default dari link

    // Tambahkan kelas fade-out untuk memulai efek transisi
    $("body").removeClass("fade-in-active").addClass("fade-out");

    // Ambil URL untuk berpindah halaman
    var targetUrl = $(this).attr("href");

    // Ganti ke halaman setelah efek selesai
    setTimeout(function () {
      window.location.href = targetUrl;
    }, 500); // Durasi harus sama dengan durasi transisi
  });
});

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
