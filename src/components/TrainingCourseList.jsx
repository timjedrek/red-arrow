import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { courses } from "../data/courses";

const TrainingCourseList = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 relative"
      id="courseList"
    >
      {courses.slice(0, 5).map((course) => (
        <motion.div
          className="flex bg-gradient-to-br from-white to-gray-200 text-black flex-col rounded-xl cursor-pointer shadow-lg"
          layoutId={course.id}
          onClick={() => {
            setSelectedId(course.id);
            document.body.style.overflow = "hidden";
          }}
          key={course.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={course.imagePath}
            alt={course.alt}
            className="h-64 w-full object-cover rounded-t-xl"
          />
          <p className="text-xl font-medium text-center p-3 tracking-wider">
            {course.title}
          </p>
        </motion.div>
      ))}

      <motion.a
        href="/flight-programs/military-rotor-transition"
        className="flex bg-gradient-to-br from-white to-gray-200 text-black flex-col rounded-xl cursor-pointer shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={courses[5].imagePath}
          alt={courses[5].alt}
          className="h-64 w-full object-cover rounded-t-xl"
        />
        <p className="text-xl font-medium text-center p-3 tracking-wider">
          {courses[5].title}
        </p>
      </motion.a>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="h-screen backdrop-blur-sm bg-black/50 w-screen p-5 pr-10 lg:p-20 fixed z-50 top-0 left-0 flex items-start justify-center gap-2 shadow-lg text-white"
            key={selectedId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black h-full w-full max-w-3xl overflow-y-auto relative"
              layoutId={selectedId}
            >
              <img
                src={courses[selectedId].imagePath}
                alt={courses[selectedId].alt}
                className="h-[28rem] w-full object-cover"
              />
              <div className="bg-black/50 absolute p-5 top-0 w-full h-[28rem] text-white flex flex-col justify-center items-center">
                <h4 className="text-5xl font-bold tracking-tighter text-center">
                  {courses[selectedId].banner_title}
                </h4>
                <h5 className="text-3xl pt-5 tracking-wide text-center">
                  {courses[selectedId].banner_subtitle}
                </h5>
              </div>
              <div className="p-5 relative flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h6 className="font-semibold">
                    What is {courses[selectedId].title}?
                  </h6>
                  <p className="text-sm">{courses[selectedId].content[0]}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h6 className="font-semibold">
                    What to expect during {courses[selectedId].title}?
                  </h6>
                  <p className="text-sm">{courses[selectedId].content[1]}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h6 className="font-semibold">
                    Why get a {courses[selectedId].title}?
                  </h6>
                  <p className="text-sm">{courses[selectedId].content[2]}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h6 className="font-semibold">Get started today</h6>
                  <p className="text-sm">{courses[selectedId].content[3]}</p>
                </div>
                {courses[selectedId].note && (
                  <div className="flex flex-col gap-1 mt-3">
                    <p className="text-sm font-semibold">
                      *{courses[selectedId].note}
                    </p>
                  </div>
                )}
                <a
                  href="/enrollment"
                  target="_blank"
                  className="btn-red mx-auto my-5"
                >
                  Enroll Today
                </a>
              </div>
              <div class="flex flex-col gap-5 m-5 mt-0 rounded-xl border-2 border-main-red shadow-gray-500 text-black bg-gradient-to-bl from-gray-200 to-gray-300 p-5">
                <h4 class="font-semibold text-xl text-center">
                  Flight Program Application
                </h4>
                <p class="text-center">
                  If you are interested in enrolling in one of our flight
                  programs, please download and fill out this application. You
                  may bring it in to our office or email it to us at{" "}
                  <a
                    href="mailto:info@flyredarrow.com"
                    class="text-blue-600 hover:underline hover:text-blue-800"
                  >
                    info@flyredarrow.com
                  </a>
                </p>
                <a
                  href="/files/red-arrow-us-application.pdf"
                  download="red-arrow-us-application.pdf"
                  class="btn-red self-center"
                >
                  Download
                </a>
              </div>
            </motion.div>
            <motion.button
              className="bg-main-red rounded-full p-1 absolute lg:static top-8 right-14"
              onClick={() => {
                setSelectedId(null);
                document.body.style.overflow = "auto";
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoMdClose className="text-3xl" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingCourseList;
