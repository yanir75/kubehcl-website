// load navigation bar
fetch('./nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementsByClassName('sidebar').innerHTML = data;
  });