import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each project card
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 * index, // Staggered delay
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=50",
            },
          }
        );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div id="work" ref={sectionRef} className="section-padding">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          My <span className="text-white-50">Work</span>
        </h2>

        <div className="grid-3-cols">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={addToRefs}
              className="group cursor-pointer block bg-black-200 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 border border-black-50 hover:border-white-50"
            >
              <div className="h-64 overflow-hidden relative bg-black-100 flex items-center justify-center">
                {/* Replaced Image with 3D Model */}
                <div className="w-full h-full">
                  <TechIconCardExperience model={project} />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-50 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white-50 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-50 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  View Project
                  <span className="text-lg">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
