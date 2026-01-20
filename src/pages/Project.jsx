import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import metophoum1 from "../assets/metophoum/1.jpg";
import metophoum2 from "../assets/metophoum/2.jpg";
import metophoum3 from "../assets/metophoum/3.jpg";
import metophoum4 from "../assets/metophoum/4.jpg";
import metophoum5 from "../assets/metophoum/5.jpg";
import metophoum6 from "../assets/metophoum/6.jpg";
import metophoum7 from "../assets/metophoum/7.jpg";

import photoDonation1 from "../assets/photo-donation/1.jpg";
import photoDonation2 from "../assets/photo-donation/2.jpg";
import photoDonation3 from "../assets/photo-donation/3.jpg";
import photoDonation4 from "../assets/photo-donation/4.jpg";
import photoDonation5 from "../assets/photo-donation/5.jpg";
import photoDonation6 from "../assets/photo-donation/6.jpg";

const Project = () => {
  const [categoryId, setCategoryId] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const categories = [
    {
      id: 1,
      name: "Reels",
    },
    {
      id: 2,
      name: "Video",
    },
    {
      id: 3,
      name: "Photo",
    },
    {
      id: 4,
      name: "TVC",
    },
    {
      id: 5,
      name: "Interview",
    },
    {
      id: 6,
      name: "Video Event",
    },
    {
      id: 7,
      name: "Photo Event",
    },
  ];
  const source = [
    {
      categoryId: [2, 1],
      src: "https://www.youtube.com/embed/MR-DVAPjX2M",
    },
    {
      categoryId: [2, 1],
      src: "https://www.youtube.com/embed/KNi_7e4lGw8",
    },
    {
      categoryId: [2, 1],
      src: "https://www.youtube.com/embed/68_mKqxs1IY",
    },
    {
      categoryId: [2, 1, 6],
      src: "https://www.youtube.com/embed/_MamCj0TTNI",
    },
    {
      categoryId: [6, 2],
      src: "https://www.youtube.com/embed/ANKPIf7Uark",
    },
    {
      categoryId: [6, 2],
      src: "https://www.youtube.com/embed/Uvpx9mJPJBg",
    },
    {
      categoryId: [6, 2],
      src: "https://www.youtube.com/embed/x75-BwPxHyg",
    },
    {
      categoryId: [4, 2],
      src: "https://www.youtube.com/embed/6v5-x5bGreo",
    },
    {
      categoryId: [5, 2],
      src: "https://www.youtube.com/embed/sGtnF-iiXy0",
    },
    {
      categoryId: [3],
      src: metophoum1,
    },
    {
      categoryId: [3],
      src: metophoum2,
    },
    {
      categoryId: [3],
      src: metophoum3,
    },
    {
      categoryId: [3],
      src: metophoum4,
    },
    {
      categoryId: [3],
      src: metophoum5,
    },
    {
      categoryId: [3],
      src: metophoum6,
    },
    {
      categoryId: [3],
      src: metophoum7,
    },
    {
      categoryId: [3, 7],
      src: photoDonation1,
    },
    {
      categoryId: [3, 7],
      src: photoDonation2,
    },
    {
      categoryId: [3, 7],
      src: photoDonation3,
    },
    {
      categoryId: [3, 7],
      src: photoDonation4,
    },
    {
      categoryId: [3, 7],
      src: photoDonation5,
    },
    {
      categoryId: [3, 7],
      src: photoDonation6,
    },
  ];
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }

    // Cleanup function: Resets scroll if the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);
  const sourceByCategoryId = source.filter((s) =>
    s.categoryId.includes(categoryId)
  );
  const handleSelectImage = (src) => {
    setSelectedImage(src);
  };
  const handleCloseImage = () => {
    setSelectedImage("");
  };
  return (
    <div className="px-[10px] sm:px-[10%] pt-[80px] flex flex-col gap-[10px]">
      <div>
        <ul className="flex overflow-auto gap-[10px]">
          {categories.map((c, index) => (
            <li
              onClick={() => c.id !== categoryId && setCategoryId(c.id)}
              className={`border whitespace-nowrap cursor-pointer py-[5px] px-[10px] ${
                categoryId === c.id && "border-black bg-black text-white"
              }`}
              key={index}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[10px] mt-[20px]">
        {sourceByCategoryId.map((s) => (
          <Content>
            {s.src.includes("www.youtube.com") ? (
              <Video src={s.src} />
            ) : (
              <div
                onClick={() => handleSelectImage(s.src)}
                className="w-full cursor-zoom-in overflow-hidden aspect-video"
              >
                <img className="w-full h-full object-cover" src={s.src} />
              </div>
            )}
          </Content>
        ))}
      </div>
      <ImageZoom onClose={handleCloseImage} src={selectedImage} />
    </div>
  );
};

const Video = ({ src }) => {
  return (
    <iframe
      src={src}
      className="w-full aspect-video"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      referrerpolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

const Content = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        if (!isVisible) setIsVisible(true);
      },
      { threshold: [0.5] }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);
  return (
    <div ref={ref} className="bg-gray-200">
      {isVisible && children}
    </div>
  );
};

const ImageZoom = ({ src, onClose }) => {
  return (
    <div
      onClick={onClose}
      className={`${
        src ? "flex" : "invisible"
      } fixed overflow-auto z-[99999999999] cursor-zoom-out flex justify-center items-center w-full h-full left-0 top-0 bg-[#00000070]`}
    >
      <img className="w-[98%] sm:w-[70%]" src={src} alt="imageZoom" />
    </div>
  );
};

export default Project;
