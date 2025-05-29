document.addEventListener('DOMContentLoaded', () => {
    fetch('/SidebarMenu/sidebar.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('sidebar-container').innerHTML = html;
      })
      .catch(err => console.error('Sidebar failed to load:', err));
  });