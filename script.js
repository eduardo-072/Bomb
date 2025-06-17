    const menuIcon = document.getElementById('menuIcon');
    const sideMenu = document.getElementById('sideMenu');

    menuIcon.addEventListener('click', () => {
      if (sideMenu.style.width === '250px') {
        sideMenu.style.width = '0';
      } else {
        sideMenu.style.width = '250px';
      }
    });

    window.addEventListener('click', (e) => {
      if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
        sideMenu.style.width = '0';
      }
    });