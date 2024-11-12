<!DOCTYPE html>
<html>
  <head>  
        <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../Tengahan/transisi.js"></script>
    <link href="..\Daleman\" rel="stylesheet" />
    <title>YourHealth</title>
  </head>
  <body>
      <!--Navbar-->
      <div class="container-fluid container1outer">
        <nav class="navbar navbar-expand-lg opacity-100">
          <div class="container-fluid ms-5 container1inner">
            <a
              class="navbar-brand text-warning fw-bold fs-1 textyourhealth linktransisi"
              href="index.html"
              >YourHealth</a
            >
          </div>
        </nav>
      </div>
      <!---->

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz4fnFO9gybBogGzCiIq7lInZ4AiO1XkApV4K5WIIt9j4v0x2aVHtIaxV9" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>



.textyourhealth {
    text-shadow: 
      2px 2px 0px black,  /* bayangan ke kanan bawah */
     -2px 2px 0px black,  /* bayangan ke kiri bawah */
      2px -2px 0px black, /* bayangan ke kanan atas */
     -5px -5px 0px black; /* bayangan ke kiri atas */
}


body {
    /* CSS lainnya */
    transition: opacity 0.5s ease; /* Durasi transisi */
    opacity: 1; /* Awalnya, opacity 1 (tidak transparan) */
}

body.fade-out {
    opacity: 0; /* Saat fade-out, opacity menjadi 0 (transparan) */
}

body.fade-in {
    opacity: 0; /* Saat halaman baru dimuat, opacity awalnya 0 */
}

/* Animasi fade-in saat halaman baru dimuat */
body.fade-in-active {
    opacity: 1; /* Ketika fade-in aktif, opacity menjadi 1 */
    transition: opacity 0.5s ease; /* Durasi transisi yang sama */
}


