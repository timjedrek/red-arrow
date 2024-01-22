const NavLink = ({ menuItem, pathname, toggled, onShow }) => {
  const isActive = menuItem.submenu.some((item) => item.link === pathname);
  return (
    <div className="relative">
      <button
        id={menuItem.name}
        onClick={onShow}
        className={`text-xl w-full flex items-center justify-between text-white py-5 hover:border-b-2 border-main-red whitespace-nowrap ${
          isActive ? "border-b-2" : ""
        }`}
      >
        {menuItem.name}
      </button>
      <div
        className={`overflow-hidden text-white ${
          toggled ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-in-out absolute bg-black flex flex-col whitespace-nowrap`}
      >
        {menuItem.submenu.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`${item.link === pathname ? "bg-main-red" : ""} px-5 py-3 border border-gray-700 hover:bg-main-red`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavLink;
