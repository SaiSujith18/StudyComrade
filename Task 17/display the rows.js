<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cards in a Row</title>
  <style>
    .card-container {
      display: flex;
      gap: 20px;
      padding: 20px;
      justify-content: center;
    }

    .card {
      width: 200px;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
      background-color: #f9f9f9;
    }

    .card h3 {
      margin: 10px 0;
    }
  </style>
</head>
<body>

  <div class="card-container" id="cards"></div>

  <script>
    const cardData = [
      { title: "Card 1", content: "This is the first card." },
      { title: "Card 2", content: "This is the second card." },
      { title: "Card 3", content: "This is the third card." }
    ];

    const container = document.getElementById("cards");

    cardData.forEach(data => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${data.title}</h3><p>${data.content}</p>`;
      container.appendChild(card);
    });
  </script>

</body>
</html>
