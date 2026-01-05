import React from "react";
import ProjectSlider from "../components/ProjectSlider";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "HELLO WORLD",
      image:
        "https://www.angkortourguides.com/uploads/images/Gallery/Angkor-Tour-Guides-SlideShow/main-photo2.jpg",
    },
    {
      id: 2,
      name: "HELLO WORLD",
      image:
        "https://www.angkortourguides.com/uploads/images/Gallery/Angkor-Tour-Guides-SlideShow/main-photo2.jpg",
    },
    {
      id: 3,
      name: "HELLO WORLD",
      image:
        "https://www.angkortourguides.com/uploads/images/Gallery/Angkor-Tour-Guides-SlideShow/main-photo2.jpg",
    },
    {
      id: 4,
      name: "HELLO WORLD",
      image:
        "https://www.angkortourguides.com/uploads/images/Gallery/Angkor-Tour-Guides-SlideShow/main-photo2.jpg",
    },
    {
      id: 5,
      name: "HELLO WORLD",
      image:
        "https://www.angkortourguides.com/uploads/images/Gallery/Angkor-Tour-Guides-SlideShow/main-photo2.jpg",
    },
    {
      id: 6,
      name: "HELLO WORLD",
      image:
        "https://www.angkortourguides.com/uploads/images/Gallery/Angkor-Tour-Guides-SlideShow/main-photo2.jpg",
    },
  ];
  return (
    <div
      className="max-w-7xl flex px-4 flex-col gap-[30px] mt-[90px] mx-auto"
      id="project"
    >
      <div>
        <p className="text-2xl sm:text-4xl">My Freelance Project</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
          corporis!
        </p>
      </div>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-3 items-center gap-[30px]">
        {projects.map((p) => (
          <div className="flex border p-[10px] flex-col gap-[5px]">
            <div>
              <img src={p.image} />
            </div>
            <div className="flex justify-between items-center">
              <p>{p.name}</p>
              <span className="underline cursor-pointer px-[10px] py-[5px]">
                View detail
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
