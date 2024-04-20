import React from 'react';
import SectionHeading from '../../components/sectionHeading/sectionHeading';

const InternshipContent = () => {
  const sectionTitle = "Join Our Mission";
  return (
    <div id="about" className="flex flex-col bg-yellow-100 pt-6">
      <SectionHeading title={sectionTitle} headingSize={"text-5xl"} />
      <div className="flex px-14">
        <p className="text-left lg:text-justify text-lg mb-6">
        Are you passionate about making a difference in the lives of underprivileged students? Do you believe in the power of education to create lasting change? We are offering internship opportunities for dedicated individuals who share our vision of transforming lives through education.
        </p>
      </div>
      <SectionHeading title="About Us" />
      <div className="flex px-14">
        <p className="text-left lg:text-justify text-lg mb-6">
        MAA The Foundation is committed to transforming the lives of underprivileged students from economically disadvantaged backgrounds. We believe that every child deserves access to quality education, regardless of their financial circumstances. Our mission is to bridge the educational gap and create equal opportunities for deserving students.
        </p>
      </div>
      <SectionHeading title="Internship Description" />
      <div className="flex px-14">
        <p className="text-left lg:text-justify text-lg mb-6">
        As an intern at MAA The Foundation, you will have the opportunity to be part of our efforts to provide comprehensive support to students facing financial constraints. You will work closely with our team to assist in various aspects of our programs, including teaching classes at our various locations. This internship will provide you with hands-on experience in the non-profit sector and the opportunity to make a tangible difference in the lives of underprivileged students.
        </p>
      </div>
      <SectionHeading title="Qualifications" />
      <div className="flex px-14">
        <ul className="text-left lg:text-justify text-lg mb-6 list-disc">
          <li>Passion for our mission of transforming lives through education.</li>
          <li>Excellent communication and interpersonal skills.</li>
          <li>Ability to work effectively in a team and independently.</li>
          <li>Strong organizational and time management skills.</li>
        </ul>
      </div>
      <SectionHeading title="Benefits" />
      <div className="flex px-14">
        <ul className="text-left lg:text-justify text-lg mb-6 list-disc">
          <li>Gain practical experience in the non-profit sector.</li>
          <li>You'll be awarded with an internship certificate.</li>
          <li>Work closely with experienced professionals.</li>
          <li>Develop valuable skills in specific areas, such as project management, fundraising, etc.</li>
          <li>Make a meaningful impact in the lives of underprivileged students.</li>
          <li>Flexible schedule.</li>
        </ul>
      </div>
      <div className="flex px-14">
        <p className="text-left lg:text-justify text-lg mb-14">
        <strong>Join us now</strong> in our mission to transform lives through education and create a brighter future for underprivileged students. Apply now by contacting us at <strong>maathefoundation@gmail.com</strong> or <strong>+91 6377773134</strong> and be part of our journey to make a difference!
        </p>
      </div>
    </div>
  );
};

export default InternshipContent;