import React from "react";
import ServicePrev from "../snippets/ServicePrev";
import pic1 from "../assets/service1prev.jpg";
import pic2 from "../assets/service2prev.jpg";
import pic3 from "../assets/service3prev.jpg";
import pic4 from "../assets/service4prev.jpg";

const ServicesPrev = () => {
  return (
    <section id="services" className="py-4 p-default">
      <div className="h-4 border-t border-black"></div>
      <div className="grid grid-cols-2 gap-4 md:flex justify-center flex-wrap">
        <ServicePrev
          link="#software-saas"
          image={pic1}
          header="Software and SaaS development services"
        />
        <ServicePrev
          link="#outsourcing-outstaffing"
          image={pic2}
          header="IT outsourcing and outstaffing, support of IT projects"
        />
        <ServicePrev
          link="#business-consultations"
          image={pic3}
          header="Business consultations and business process automation"
        />
        <ServicePrev
          link="#digital-marketing"
          image={pic4}
          header="Organization of digital marketing activities and consultations"
        />
      </div>
    </section>
  );
};

export default ServicesPrev;
