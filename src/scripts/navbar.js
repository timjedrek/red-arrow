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

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    toggleNavLink(navLink);
  });
});
