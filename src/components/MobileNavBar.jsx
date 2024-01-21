import { flightPrograms, resources, about } from "../consts.ts";
import MobileNavLink from './MobileNavLink.jsx'
import { useState } from 'react';

const MobileNavBar = ({pathname}) => {
  const [active, setActive] = useState("");
  const handleClick = (e) => {
    if (active === e.target.id) {
      setActive("");
    }
    else {
      setActive(e.target.id);
    }
  }

  return (
    <>
      <MobileNavLink menuItem={flightPrograms} pathname={pathname} toggled={flightPrograms.name === active} onShow={handleClick}  />
      <MobileNavLink menuItem={resources} pathname={pathname} toggled={resources.name === active} onShow={handleClick} />
      <MobileNavLink menuItem={about} pathname={pathname} toggled={about.name === active} onShow={handleClick} />
    </>
  )
}

export default MobileNavBar
