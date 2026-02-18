import { abilities } from "../constants";

const FeatureCards = () => (
  <section className="padding-x mt-20 md:mt-32">
    <div className="grid-3-cols-md-tight">
      {abilities.map((ability, index) => (
        <div key={index} className="flex flex-col gap-6">
          <div className="w-16 h-16 rounded-full flex-center bg-black-200 border border-black-50">
            <img src={ability.imgPath} alt={ability.title} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-xl">{ability.title}</h3>
            <p className="text-white-50">{ability.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureCards;