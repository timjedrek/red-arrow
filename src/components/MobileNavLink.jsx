import { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

const MobileNavLink = ({menuItem}) => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!toggled)
  }

  return (
    <div className="flex flex-col items-start">
      <button onClick={handleClick} className="text-xl w-full flex items-center justify-between text-white py-5 hover:border-b-2 border-main-red whitespace-nowrap">
        <p>{menuItem.name}</p>
        {toggled ? <FaMinus /> : <FaPlus />}
      </button>
      <ul className={`overflow-hidden text-white ${toggled ? 'max-h-96' : 'max-h-0'} transition-[max-height] duration-300 ease-in-out`}>
      {menuItem.submenu.map((item) => (
        <li key={item.name} className="m-4"><a href={item.link} className="hover:border-b-2 border-main-red">{item.name}</a></li>
      ))}
      </ul>
      
    </div>
  )
}

export default MobileNavLink


