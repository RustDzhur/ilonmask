import React from "react";
import titleStyles from "../../app/styles/titleStyles.module.css";
import btnStyles from "../../app/styles/buttons.module.css";
import glass from "../../app/styles/glass.module.css";

interface GlassItemProps {
  title: string;
  number: string;
  description: string;
  isLast?: boolean;
}

const GlassItem: React.FC<GlassItemProps> = ({ title, number, description, isLast }) => (
  <div className={`flex flex-col sm:items-center sm:justify-center  md:justify-start lg:justify-center ${glass.background} ${glass.backgroundline} relative cursor-pointer ${!isLast ? "mb-10" : ""}`}>
    <span>{title}</span>
    <span className="sm:text-40 lg:text-60">{number}</span>
    <span>{description}</span>
  </div>
);

const cardContents: GlassItemProps[] = [
  { title: 'мы', number: '1', description: 'на рынке' },
  { title: 'календарик за', number: '2001', description: 'год в подарок', isLast: true, },
  { title: 'гарантируем', number: '50%', description: 'безопасность' },
  { title: 'путешествие', number: '597', description: 'дней', isLast: true }
];

export const Main: React.FC = () => {
  return (
    <div className="sm:text-center md:text-left md:flex md:justify-between">
      <div className="lg:pt-60">
        <h1 className={`${titleStyles.title} sm:text-40 md:text-40 lg:text-58 font-bold leading-22`}>
          ПУТЕШЕСТВИЕ
        </h1>
        <h2 className={`${titleStyles.subTitle} text-25 leading-22 mb-85`}>
          на красную планету
        </h2>
        <div className="relative overflow-hidden inline-flex sm:mb-85 md:mb-0">
          <a href="#" className={`${btnStyles.linkstyle}`}>
            Начать путешествие
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div className="flex sm:justify-center text-white text-18 leading-22 pb-180">
        <div className="sm:flex sm:flex-col md:block sm:mr-15 md:mr-40 lg:mr-10 lg:justify-center">
          {cardContents.slice(0, 2).map((item, index) => (
            <GlassItem key={index} {...item} />
          ))}
        </div>
        <div className="">
          {cardContents.slice(2).map((item, index) => (
            <GlassItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};