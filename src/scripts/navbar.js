const navLinks = document.querySelectorAll('.nav-link');

function toggleNavLink(navLink) {
  const linkContainerClass = navLink.dataset.linkContainer;
  const clickedLinkContainer = linkContainerClass ? document.querySelector(`.${linkContainerClass}`) : null;

  document.querySelectorAll('.links-container').forEach(linkContainer => {
    if (linkContainer !== clickedLinkContainer) {
      linkContainer.classList.add('hidden');
      linkContainer.classList.remove('flex');
    }
  });

  if (clickedLinkContainer) {
    clickedLinkContainer.classList.toggle('hidden');
    clickedLinkContainer.classList.toggle('flex');
  }
}

function closeOpenLinkContainers() {
  document.querySelectorAll('.links-container').forEach(linkContainer => {
    linkContainer.classList.add('hidden');
    linkContainer.classList.remove('flex');
  });
}

navLinks.forEach(navLink => {
  navLink.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleNavLink(navLink);
  });
});

document.addEventListener('click', (event) => {
  const isNavLink = event.target.matches('.nav-link') || event.target.closest('.nav-link');
  const isLinkContainer = event.target.matches('.links-container') || event.target.closest('.links-container');

  if (!isNavLink && !isLinkContainer) {
    closeOpenLinkContainers();
  }
});

const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const xIcon = document.getElementById('x-icon');
const hamburgerIcon = document.getElementById('hamburger-icon');

function toggleNavIcons() {
  xIcon.classList.toggle('hidden');
  hamburgerIcon.classList.toggle('hidden');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('hidden');
}

mobileMenuButton.addEventListener('click', (event) => {
  toggleNavIcons();
  toggleMobileMenu();
});
