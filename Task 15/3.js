<script>
  let p = parseFloat(prompt("Enter Principal amount:"));
  let r = parseFloat(prompt("Enter Rate:"));
  let t = parseFloat(prompt("Enter Time:"));

  let result = ((p / r) * t) / 100;

  alert("Calculated Interest: " + result);
</script>
