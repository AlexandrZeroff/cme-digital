import React from "react";
import el_sm from "../assets/gradient-sm-m.svg";

const Service = ({ id, header, image, subheader, texts, tag }) => {
  return (
    <article id={id} className="p-default">
      <div className="h-4 border-t border-black"></div>
      <div className="md:grid grid-cols-2 gap-x-4 mb-8">
        <div className="">
          <h2 className="font-bold uppercase">{header}</h2>
          <div className="relative my-4">
            <img src={el_sm} alt="relative" className="min-w-full"></img>
            <h2 className="absolute bottom-4 right-4 font-bold text-white">
              {tag}
            </h2>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img src={image} alt={header}></img>
          <h4 className="mt-4">{subheader}</h4>
          {texts.map((text, index) => (
            <p className="mt-4" key={index}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Service;
