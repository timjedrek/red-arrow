import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TrainingCourseList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const courses = [
    {
      id: "0",
      imagePath: "/img/training-courses/private-pilot.webp",
      alt: "Cessna 172 at Red Arrow Santa Teresa, NM",
      title: "Private Pilot Certificate",
    },
    {
      id: "1",
      imagePath: "/img/training-courses/instrument-panel.webp",
      alt: "Simulator AATD being used for instrument training Las Cruces, NM",
      title: "Instrument Rating",
    },
    {
      id: "2",
      imagePath: "/img/training-courses/commercial-pilot.webp",
      alt: "Red Arrow Flight Academy graduate flying corporate charter",
      title: "Commercial Pilot Certificate",
    },
    {
      id: "3",
      imagePath: "/img/training-courses/cfi.webp",
      alt: "Become a CFI at Red Arrow Flight Academy and teach student pilots from El Paso, TX",
      title: "Certified Flight Instructor (CFI)",
    },
    {
      id: "4",
      imagePath: "/img/training-courses/cfi-instrument.webp",
      alt: "Become a CFII at Red Arrow Flight Academy and mentor instrument pilots",
      title: "Certified Flight Instructor Instrument (CFII)",
    },
    {
      id: "5",
      imagePath: "/img/training-courses/military.webp",
      alt: "Many of our students come from Ft. Bliss and complete their pilot training at Red Arrow Flight Academy",
      title: "Military Rotor/Transition",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 relative">
      {courses.map((course) => (
        <motion.div
          className="flex bg-black text-white flex-col rounded-xl cursor-pointer shadow-lg"
          layoutId={course.id}
          onClick={() => setSelectedId(course.id)}
          key={course.id}
        >
          <motion.img
            src={course.imagePath}
            alt={course.alt}
            className="h-64 w-full object-cover rounded-t-xl"
          />
          <motion.p className="text-xl font-medium text-center py-3 tracking-wider">
            {course.title}
          </motion.p>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="h-screen backdrop-blur-sm w-screen p-20 fixed z-50 top-0 left-0 flex items-start gap-2 shadow-lg text-white"
            key={selectedId}
          >
            <motion.div
              className="bg-white text-black h-full w-full rounded-xl"
              layoutId={selectedId}
            >
              <motion.h4>{courses[selectedId].title}</motion.h4>
              <motion.img
                src={courses[selectedId].imagePath}
                alt={courses[selectedId].alt}
                className="h-96 w-full object-cover rounded-t-xl"
              />
            </motion.div>
            <motion.button
              className="bg-main-red rounded-full p-5"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingCourseList;
