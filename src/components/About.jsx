import React from "react";
import el from "../assets/gradient.svg";

const About = () => {
  return (
    <section id="about">
      <div className="p-default my-8">
        <div className="h-4 border-t border-black"></div>
        <div className="relative md:grid grid-cols-2 gap-x-4">
          <div>
            <img src={el} alt="" className=""></img>
            <h2 className="absolute top-4 left-4 text-white">ABOUT US</h2>
          </div>
          <article className="mt-8 md:mt-0">
            <h4 className="">
              Our mission is to help our clients achieve their goals through
              innovative, reliable, and cost-effective software solutions. We
              believe that technology should be a tool to help businesses
              thrive, and we work closely with our clients to understand their
              specific needs and goals.
            </h4>
            <p className="mt-6">
              Our services include custom software development, SaaS
              development, IT outsourcing, and outstaffing, support of IT
              projects, Business consultations and business process automation,
              and Organization of digital marketing activities and
              consultations. We use the latest technologies and methodologies to
              ensure that our solutions are scalable, secure, and user-friendly.
            </p>
            <p className="mt-6">
              At our core, we are a customer-focused company, and we pride
              ourselves on providing exceptional service and support to our
              clients. We believe that communication and collaboration are key
              to successful project outcomes, and we work closely with our
              clients to ensure that their needs are met every step of the way.
            </p>
            <p className="mt-6">
              We are passionate about what we do, and we are dedicated to
              helping businesses succeed through innovative software solutions.
              If you are looking for a reliable, experienced, and
              customer-focused partner for your software development needs, look
              no further than our team. Contact us today to learn more about our
              services and how we can help your business thrive.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
