<script>
  function setRandomBackground() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  // Example: run it immediately
  setRandomBackground();
</script>
