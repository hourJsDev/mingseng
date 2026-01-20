import React, { useMemo } from "react";
import { Timeline } from "@/components/ui/timeline";
const Education = () => {
  const educations = [
    {
      name: "Short Course at Global University",
      description: "Attended skill training course with Global University.",
      tags: [],
      date: "2020",
      image: [],
    },
    {
      name: "Short Course at Mixral plus",
      description: "Graduate short course at Mixral plus.",
      tags: ["Photoshop", "Adobe premiere", "Adobe AI"],
      date: "2022",
      image: [],
    },
    {
      name: "Bachelor Degree of Creative Multimedia at Norton University",
      description: "I was graduation at Norton University.",
      tags: ["Film directing", "Photography", "Video editing", "3D Animation"],
      date: "2025",
      image: [],
    },
  ];
  const data = useMemo(() => {
    return educations.map((edu) => ({
      title: edu.date,
      content: (
        <div>
          <p className="mb-[2px] font-semibold sm:text-[20px]  text-neutral-800  dark:text-neutral-200">
            {edu.name}
          </p>
          <p className="text-[13px]">{edu.description}</p>
          <ul className="flex mt-[10px] gap-[10px]">
            {edu.tags.map((tag) => (
              <li className="border  text-[13px] px-[7px]" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          {!!edu.image.length && (
            <div className="grid grid-cols-2 gap-4">
              {edu.image.map((img, index) => (
                <img
                  key={index}
                  src="https://assets.aceternity.com/templates/startup-1.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              ))}
            </div>
          )}
        </div>
      ),
    }));
  }, []);

  return (
    <div id="education" className="relative w-full overflow-clip">
      <Timeline title={"My Education"} description={""} data={data} />
    </div>
  );
};

export default Education;
