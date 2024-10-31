format dasar {

<!DOCTYPE html>
<html>
  <head>  
    <title>Document</title>
  </head>
  <body>
<div id="header"></div> <!-- Placeholder for the header -->


<div id="footer"></div> <!-- Placeholder for the footer -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz4fnFO9gybBogGzCiIq7lInZ4AiO1XkApV4K5WIIt9j4v0x2aVHtIaxV9" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        loadComponent("header", "header.html");
        loadComponent("footer", "footer.html");
    });

    function loadComponent(elementId, fileName) {
        fetch(fileName)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error("There was a problem with the fetch operation:", error));
    }
</script>
  </body>
</html>

}
