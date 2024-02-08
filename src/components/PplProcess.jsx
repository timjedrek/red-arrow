import { useState } from "react";
import PplStep from "./PplStep";
import { pplProcess } from "../data/pplProcess";

const PplProcess = () => {
  const [open, setOpen] = useState("");
  const handleClick = (e) => {
    if (open === e.target.id) {
      setOpen("");
    } else {
      setOpen(e.target.id);
    }
  };

  return (
    <div className="lg:pl-10 mt-5 flex flex-col gap-2 ">
      {pplProcess.map((step) => (
        <PplStep
          key={step.title}
          step={step}
          toggled={step.title === open}
          onShow={handleClick}
        />
      ))}
    </div>
  );
};

export default PplProcess;
