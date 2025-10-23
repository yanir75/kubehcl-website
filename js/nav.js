fetch('./partials/nav.html')
  .then(response => response.text())
  .then(data => {   
    document.getElementById('sidebar').innerHTML = data;
    }
    )
    
function includeHTML() {
  const elements = document.querySelectorAll("[w3-include-html]");
  elements.forEach(el => {
    const file = el.getAttribute("w3-include-html");
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Could not load ${file}`);
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
        el.removeAttribute("w3-include-html");
        includeHTML(); // recursively handle nested includes
      })
      .catch(err => console.error(err));
  });
}
includeHTML();
