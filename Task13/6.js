<!DOCTYPE html>
<html>
<body>
  <ul id="list"></ul>

  <script>
    let fruits = ["Apple", "Banana", "Cherry", "Date"];
    let ul = document.getElementById("list");

    fruits.slice(0, 3).forEach(fruit => {
      let li = document.createElement("li");
      li.textContent = fruit;
      ul.appendChild(li);
    });
  </script>
</body>
</html>
