import React from "react";

const Header = () => {
  return (
    <section id="start" className="p-default">
      <div className="flex flex-col p-4 lg:p-8 bg-header bg-cover overflow-hidden h-[50vh] md:h-[65vh] lg:h-[80vh] bg-center rounded-sm">
        <h1 className="hidden md:block text-center tex-white mt-auto max-w-4xl mx-auto uppercase text-white">
          Innovative solutions for a changing world
        </h1>
      </div>
      <h1 className="md:hidden text-center mt-6 max-w-2xl mx-auto uppercase mb-12">
        Innovative solutions for a changing world
      </h1>
    </section>
  );
};

export default Header;
