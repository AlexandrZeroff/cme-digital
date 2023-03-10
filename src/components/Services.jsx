import React from "react";
import Service from "../snippets/Service";
import pic1 from "../assets/service1.jpg";
import pic2 from "../assets/service2.jpg";
import pic3 from "../assets/service3.jpg";
import pic4 from "../assets/service4.jpg";

const Services = () => {
  const services = [
    {
      id: "software-saas",
      header: "Software and SaaS development services",
      image: pic1,
      subheader:
        "We are committed to providing our clients with exceptional service and support throughout the entire software development process. We believe that communication and collaboration are key to successful outcomes, and we work closely with our clients to ensure that their needs are met every step of the way.",
      texts: [
        "Whether you are a small business looking to improve your operations, or a large enterprise looking to streamline your processes and increase efficiency, we have the expertise and experience to help you achieve your goals through innovative software solutions. Contact us today to learn more about how we can help your business succeed.",
      ],
      tag: "01.",
    },
    {
      id: "outsourcing-outstaffing",
      header: "IT outsourcing and outstaffing, support of IT projects",
      image: pic2,
      subheader:
        "Our IT outsourcing services enable businesses to delegate their IT needs to our team of experienced professionals. We offer a range of services, including software development, application support, network management, and more. Our outsourcing services are designed to provide businesses with the expertise and support they need to manage their IT projects effectively while reducing costs.",
      texts: [
        "Our outstaffing services provide businesses with access to a team of dedicated IT professionals who work exclusively for them. This model enables businesses to have complete control over their IT operations while also benefiting from the expertise of our team. We provide our clients with a range of IT professionals, including developers, QA specialists, project managers, and more.",
        "We also offer IT project support services, including project management, quality assurance, and testing. Our team of experienced professionals works closely with clients to ensure that their IT projects are completed on time, within budget, and to the highest standards.",
      ],
      tag: "02.",
    },
    {
      id: "business-consultations",
      header: "Business consultations and business process automation",
      image: pic3,
      subheader:
        "Our business consultation services are designed to help businesses identify areas for improvement and to develop a customized plan to address their unique needs and goals. Our experienced consultants work closely with our clients to understand their business objectives and to develop a tailored solution that can streamline their operations, reduce costs, and improve efficiency.",
      texts: [
        "We offer a range of business process automation services to help businesses automate their manual processes and operations. Our team of experts leverages the latest automation technologies to optimize business processes, increase efficiency, and reduce human error. We can help businesses automate a range of processes, including finance and accounting, human resources, customer service, and more.",
        "If you are looking for a trusted partner to help optimize your business processes, reduce costs, and improve efficiency, look no further than our team. Contact us today to learn more about our business consultation and process automation services and how we can help your business thrive.",
      ],
      tag: "03.",
    },
    {
      id: "digital-marketing",
      header: "Organization of digital marketing activities and consultations",
      image: pic4,
      subheader:
        "We offer a range of digital marketing services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and more. Our team of experts leverages the latest technologies and tools to optimize digital marketing campaigns, increase conversions, and improve ROI.",
      texts: [
        "We believe that communication and collaboration are key to successful outcomes, and we work closely with our clients to ensure that their needs are met every step of the way. Our team of consultants and digital marketing experts works collaboratively with our clients to develop and implement customized solutions that can help them achieve their business goals.",
        "We would love to hear from you! If you have any questions about our services or would like to learn more about how we can help your business succeed, please don't hesitate to contact us today.",
      ],
      tag: "04.",
    },
  ];
  return (
    <section id="services-detailed" className="py-8">
      {services.map((service, index) => (
        <Service
          key={index}
          id={service.id}
          header={service.header}
          image={service.image}
          subheader={service.subheader}
          texts={service.texts}
          tag={service.tag}
        />
      ))}
    </section>
  );
};

export default Services;
