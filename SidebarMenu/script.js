fetch('sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar-container').innerHTML = data;

    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });
    }
  })
  .catch(error => {
    console.error('Error loading sidebar:', error);
  });