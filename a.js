const f = document.getElementById('f');
const d = document.getElementById('d');
f.addEventListener('input', g);
function g() {
  const h = f.value.trim();
  const i = d.getElementsByTagName('li');
  for (let j of i) {
    if (j.textContent.includes(h)) {
      j.style.display = 'block';
    } else {
      j.style.display = 'none';
    }
  }
}