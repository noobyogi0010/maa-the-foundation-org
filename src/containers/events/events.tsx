import React from "react";
import SectionHeading from "../../components/sectionHeading/sectionHeading";
import "./events.css";
import img52 from "../../assets/images/img52.jpeg";
import img57 from "../../assets/images/img57.jpeg";
import img58 from "../../assets/images/img58.jpeg";
import img54 from "../../assets/images/img54.jpg";
import img56 from "../../assets/images/img56.jpg";
import img11 from "../../assets/images/img11.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Events() {
  const sectionTitle = "Events & Updates";
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="events" className="flex flex-col bg-yellow-100 pt-8">
      <SectionHeading title={sectionTitle} />
      <Slider {...settings} className="mx-14">
        <div className="m-4 w-auto-imp bg-green-700 rounded">
          <img src={img56} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Republic Day 2024 Celebration
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            Come join our students in flag hoisting ceremany for this Republic Day!
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-green-700 rounded">
          <img src={img57} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Annual Day, 2024
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            Come join us on 18th March, 2024 to celebrate our annual day.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-yellow-300 rounded">
          <img src={img52} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-900 pt-4 pb-2 mx-4">
            Distribution of Uniform 2024
            <hr className="h-px mr-4 bg-gray-900 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-900 mx-4 pb-4 opacity-90">
            Its a new year and we are gifting all our students new uniforms to start the year afresh.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-yellow-300 rounded">
          <img src={img11} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-900 pt-4 pb-2 mx-4">
            Distribution of Uniform 2023
            <hr className="h-px mr-4 bg-gray-900 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-900 mx-4 pb-4 opacity-90">
            Our volunteers conducted a drive to distribute our newly designed uniforms to all of our lovely kids.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-yellow-300 rounded">
          <img src={img58} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-900 pt-4 pb-2 mx-4">
            Winter Trip 2023
            <hr className="h-px mr-4 bg-gray-900 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-900 mx-4 pb-4 opacity-90">
            We never let the fun stop, so we took a batch of our students for an educational trip!
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-green-700 rounded">
          <img src={img54} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Winter Skill Classes 2023
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            2 week winter classes for all our students to learn about music, dance, acting, pottery, yoga and drawing.
          </p>
        </div>
      </Slider>
      <hr className="h-px my-12 mx-14 bg-gray-900 border-0 opacity-30 rounded-lg"></hr>
    </div>
  );
}
