fetch('./nav.html')
  .then(response => response.text())
  .then(data => {   
    document.getElementById('sidebar').innerHTML = data;
    }
    );