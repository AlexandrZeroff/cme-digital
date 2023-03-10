import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ServicePrev = ({ link, image, header }) => {
  return (
    <article className="flex flex-col max-w-[340px]">
      <AnchorLink href={link}>
        <img className="" src={image} alt={header}></img>
      </AnchorLink>
      <h3 className="my-2 md:my-4 uppercase">{header}</h3>
    </article>
  );
};

export default ServicePrev;
