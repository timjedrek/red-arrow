const NavLink = ({ object }) => {
  return (
    <div class="relative">
      <a
        class={`${object.className} nav-link cursor-pointer text-xl text-white py-5 hover:border-b-2 border-main-red whitespace-nowrap`}
        data-link-container={`${object.className}-links`}
      >
        {object.name}
      </a>
      <ul
        class={`${object.className}-links links-container absolute bg-white hidden p-5 flex-col gap-2 w-60 top-12`}
      >
        {object.submenu.map((item) => (
          <div>
            <a href={item.link} class="hover:border-b-2 border-main-red">
              {item.name}
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NavLink;
