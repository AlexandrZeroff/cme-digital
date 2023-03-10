import React from "react";
import Userform from "../snippets/Userform";

const Contacts = () => {
  return (
    <section id="contacts" className="p-default my-12">
      <div className="px-6 py-12 md:py-16 rounded-sm flex flex-col bg-gradient-to-r from-th-primary to-th-secondary">
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-white text-center font-bold">SEND US A MESSAGE</h2>
          <h4 className="text-white text-center mt-4">
            Send us a message and we will call you
          </h4>
          <Userform />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
