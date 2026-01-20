import { useMemo } from "react";
import { Timeline } from "@/components/ui/timeline";
const Experience = () => {
  const educations = [
    {
      name: "Graphic Designer at NLF",
      description:
        "I am a graphic designer volunteering at New Life Fellowship Toulsangke.",
      tags: [],
      date: "2021",
      image: [],
    },
    {
      name: "Video Editor at R Plus Studio",
      description:
        "I have the opportunity to work with R Plus Studio as a video production specialist.",
      tags: [],
      date: "2022",
      image: [],
    },

    {
      name: "Video editor and Videographer at Need Studio",
      description:
        "I have the opportunity to work with Need Studio as Video editing and Videographer.",
      tags: [],
      date: "2025",
      image: [],
    },
    {
      name: "Media Production Digital at Chip Mong Group",
      description:
        "I have the opportunity to work with Chip Mong Group as a Media production for digital.",
      tags: [],
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
    <div id="experience" className="relative w-full overflow-clip">
      <Timeline title={"My Experience"} description={""} data={data} />
    </div>
  );
};

export default Experience;
