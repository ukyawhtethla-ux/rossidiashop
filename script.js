function calculate() {
  let uc = document.getElementById("uc").value;
  let rate = document.getElementById("rate").value;

  let total = uc * rate;

  document.getElementById("result").innerText = "Result: " + total + " MMK";
}
