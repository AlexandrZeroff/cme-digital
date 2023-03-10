import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="flex flex-col md:flex-row md:justify-between p-default my-8">
        <p className="text-base">© Copyright 2022</p>
        <div className="mt-4 md:mt-0">
          <a href="tel:+380985525943">+380 98 552 5943</a>
          <a href="mailto:partnership@inseed.marketing" className="block mt-2">
            partnership@inseed.marketing
          </a>
          <p className="text-base mt-2">
            1089 Budapest, Korányi Sándor utca 4. 4. Ajtó, Hungary
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center md:items-start">
          <a
            href="https://drive.google.com/file/d/1qJEgG4c7e78UAAwCJO_hKeGWQLUXYqUM/view?usp=sharing"
            target="_blank"
            rel="nofollow"
          >
            Privacy Policy
          </a>
          <a
            href="https://drive.google.com/file/d/1k5moEED-76bU_4PTqukL4m_TKLQB126k/view?usp=sharing"
            target="_blank"
            rel="nofollow"
            className="ml-4"
          >
            Cookies Policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
