import React, { useEffect, useRef, useState } from "react";

import photo1 from "../assets/photo/1.jpg"
import photo2 from "../assets/photo/2.jpg"
import photo3 from "../assets/photo/3.jpg"
import photo4 from "../assets/photo/4.jpg"

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

import streePhoto1 from "../assets/streetphoto/1.jpg";
import streePhoto2 from "../assets/streetphoto/2.jpg";
import streePhoto3 from "../assets/streetphoto/3.jpg";
import streePhoto4 from "../assets/streetphoto/4.jpg";
import streePhoto5 from "../assets/streetphoto/5.jpg";
import streePhoto6 from "../assets/streetphoto/6.jpg";
import streePhoto7 from "../assets/streetphoto/7.jpg";
import streePhoto8 from "../assets/streetphoto/8.jpg";

import photoAds1 from "../assets/photo-ads/1.jpg";
import photoAds2 from "../assets/photo-ads/2.jpg";
import photoAds3 from "../assets/photo-ads/3.jpg";
import photoAds4 from "../assets/photo-ads/4.jpg";

import photoEvent1 from "../assets/photo-event/1.jpg";
import photoEvent2 from "../assets/photo-event/2.jpg";
import photoEvent3 from "../assets/photo-event/3.jpg";

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
    {
      id: 8,
      name: "Street Photo",
    },
    {
      id: 9,
      name: "Photo Ads",
    },
    {
      id: 10,
      name: "Documentary",
    },
  ];
  const source = [
    {
      src: photo1,
      categoryId: [3]
    },
    {
      src: photo2,
      categoryId: [3]
    },
    {
      src: photo3,
      categoryId: [3]
    },
    {
      src: photo4,
      categoryId: [3]
    },
    {
      categoryId: [2,10],
      src: "https://www.youtube.com/embed/El_50xesCck",
    },
    {
      categoryId: [2, 1],
      src: "https://www.youtube.com/embed/-NycqJOb_tM",
    },
    {
      categoryId: [2, 1],
      src: "https://www.youtube.com/embed/y7HRG7OazmM",
    },
    {
      categoryId: [2, 1],
      src: "https://www.youtube.com/embed/ot3aVMCruaQ",
    },
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
      categoryId: [3, 8],
      src: streePhoto1,
    },
    {
      categoryId: [3, 8],
      src: streePhoto2,
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
      categoryId: [3],
      src: photoDonation1,
    },
    {
      categoryId: [3],
      src: photoDonation2,
    },
    {
      categoryId: [3],
      src: photoDonation3,
    },
    {
      categoryId: [3],
      src: photoDonation4,
    },
    {
      categoryId: [3],
      src: photoDonation5,
    },
    {
      categoryId: [3],
      src: photoDonation6,
    },

    {
      categoryId: [3, 8],
      src: streePhoto3,
    },
    {
      categoryId: [3, 8],
      src: streePhoto4,
    },
    {
      categoryId: [3, 8],
      src: streePhoto5,
    },
    {
      categoryId: [3, 8],
      src: streePhoto6,
    },
    {
      categoryId: [3, 8],
      src: streePhoto7,
    },
    {
      categoryId: [3, 8],
      src: streePhoto8,
    },
    {
      categoryId: [3, 9],
      src: photoAds1,
    },
    {
      categoryId: [3, 9],
      src: photoAds2,
    },
    {
      categoryId: [3, 9],
      src: photoAds3,
    },
    {
      categoryId: [3, 9],
      src: photoAds4,
    },
    {
      categoryId: [3, 7],
      src: photoEvent1,
    },
    {
      categoryId: [3, 7],
      src: photoEvent2,
    },
    {
      categoryId: [3, 7],
      src: photoEvent3,
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
    <div className="px-[10px] pb-[20px] sm:px-[10%] pt-[80px] flex flex-col gap-[10px]">
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
