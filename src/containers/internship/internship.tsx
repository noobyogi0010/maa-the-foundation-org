import React from 'react';
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import intern1 from '../../assets/interns/intern1.jpg';
import intern2 from '../../assets/interns/intern2.jpg';
import intern3 from '../../assets/interns/intern3.jpg';
import intern4 from '../../assets/interns/intern4.jpg';

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
      <SectionHeading title="Meet Our Previour Interns" />
      <div className="flex flex-1 flex-col lg:flex-row flex-wrap px-14 mb-6">
        <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/6 items-center">
          <img
            src={intern1}
            alt="Intern"
            className="rounded-full w-full lg:w-3/4 content-around lg:content-normal"
          />
          <h4 className="text-center py-1 font-bold">Tanisha Anand</h4>
          <p className="text-center italic">Intern, 2019</p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/6 items-center">
          <img
            src={intern2}
            alt="Inter"
            className="rounded-full w-full lg:w-3/4 content-around lg:content-normal"
          />
          <h4 className="text-center py-1 font-bold">Nitendra</h4>
          <p className="text-center italic">Intern, 2019</p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/6 items-center">
          <img
            src={intern3}
            alt="Inter"
            className="rounded-full w-full lg:w-3/4 content-around lg:content-normal"
          />
          <h4 className="text-center py-1 font-bold">Aditi Srivastava</h4>
          <p className="text-center italic">Bachelors of Journalism and Mass Communication, 1<sub>st</sub> Year</p>
          <p className="text-center italic">Manipal University, Jaipur</p>
          <p className="text-center italic">Intern, 2025</p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/6 items-center">
          <img
            src={intern4}
            alt="Inter"
            className="rounded-full w-full lg:w-3/4 content-around lg:content-normal"
          />
          <h4 className="text-center py-1 font-bold">Diya Pareek</h4>
          <p className="text-center italic">Intern, 2025</p>
        </div>
      </div>
            
      <SectionHeading title="What Are You Waiting For?" />
      <div className="flex px-14">
        <p className="text-left lg:text-justify text-lg mb-14">
        <strong>Join us now</strong> in our mission to transform lives through education and create a brighter future for underprivileged students. Apply now by contacting us at <strong>maathefoundation@gmail.com</strong> or <strong>+91 6377773134</strong> and be part of our journey to make a difference!
        </p>
      </div>
    </div>
  );
};

export default InternshipContent;