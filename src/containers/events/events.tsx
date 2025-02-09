import React from "react";
import { useState } from "react";
import SectionHeading from "../../components/sectionHeading/sectionHeading";
import "./events.css";
import event1 from "../../assets/events/event1.png";
import event2 from "../../assets/events/event2.png";
import event3 from "../../assets/events/event3.png";
import event4 from "../../assets/events/event4.png";
import event5 from "../../assets/events/event5.png";
import event6 from "../../assets/events/event6.png";
import event7 from "../../assets/events/event7.png";
import event8 from "../../assets/events/event8.png";
import event9 from "../../assets/events/event9.png";
import event10 from "../../assets/events/event10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Popup } from "../../components/popup/popup";
import img from "../../assets/payments/qr-code.jpeg"

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

  // declare title and body markup for learn more popup 
  const DONATE_NOW_POPUP_TITLE = `Bank Details for MAA-The Foundation`;
  const DONATE_NOW_POPUP_MARKUP = `
      <p className="text-justify text-base lg:text-lg text-black">
          Account Name: <strong>MAA The Foundation</strong>
      </p>
      <p className="text-justify text-base lg:text-lg text-black">
          Account Number: <strong>50100684245536</strong>
      </p>
      <p className="text-justify text-base lg:text-lg text-black">
          Branch code: <strong>8264</strong>
      </p>
      <p className="text-justify text-base lg:text-lg text-black">
          IFSC Code: <strong>HDFC0008264</strong>
      </p>
      <p className="text-justify text-base lg:text-lg text-black">
          MICR: <strong>305240040</strong>
      </p>
      <p className="text-justify text-base lg:text-lg text-black">
          Branch Name: <strong>Panchsheel Nagar, Ajmer</strong>
      </p>
      <p className="text-justify text-base lg:text-lg text-black">
          UPI ID: <strong>vyapar.169031342254@hdfcbank</strong>
      </p>
      <p className="text-justify text-base lg:text-lg text-black">
          80G Registration Number: <strong>AAJAM0166HF20231</strong>
      </p>
      <p className="text-justify text-base lg:text-lg text-black">
          QR Code: 
      </p>
      <img src=${img} alt="QR Code" />
      `;

  // declare component states
  const [openPopup, setOpenPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupBody, setPopupBody] = useState("");

  // generic click handler to open popup for both donate now and learn more
  const clickHandler = (event: React.MouseEvent) => {
    setPopupTitle(DONATE_NOW_POPUP_TITLE)
    setPopupBody(DONATE_NOW_POPUP_MARKUP);
    setOpenPopup(true);
  }

  return (
    <div id="events" className="flex flex-col bg-yellow-100 pt-8">
      {openPopup ? (<Popup title={popupTitle} body={popupBody} setIsOpen={setOpenPopup} />) : null}
      <SectionHeading title={sectionTitle} />
      <Slider {...settings} className="mx-14 flex items-stretch">
        {/* 0. Foundation Day */}
        <div className="m-4 w-auto-imp bg-green-700 rounded h-450-px">
          <img src={event2} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Foundation Day, 18th March, 2025
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            Come join us in putting the stepping stone of our Gurukul for the students!
          </p>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90 italic underline cursor-pointer" onClick={clickHandler}>
            Help us in building the Gurukul by donating money or raw materials.
          </p>
        </div>
        {/* 1. Republic day celebration, Jan. 2025 */}
        <div className="m-4 w-auto-imp bg-yellow-300 rounded h-450-px">
          <img src={event1} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-900 pt-4 pb-2 mx-4">
            Republic day celebration, Jan. 2025
            <hr className="h-px mr-4 bg-gray-900 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-900 mx-4 pb-4 opacity-90">
            Celebrated the adoption of our constitution in high spirits with our students.
          </p>
        </div>
        {/* 2. Free Medical Camp with Samarpan Hospital, Dec. 2024 */}
        <div className="m-4 w-auto-imp bg-green-700 rounded h-450-px">
          <img src={event10} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Free Medical Camp with Samarpan Hospital, Dec. 2024
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            We organised free health camp with Samarpan Hospital and the hospital team conducted full-body health check-up of our students as well.
          </p>
        </div>
        {/* 3. Diwali Celebration, Nov. 2024 */}
        <div className="m-4 w-auto-imp bg-yellow-300 rounded h-450-px">
          <img src={event3} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-900 pt-4 pb-2 mx-4">
            Diwali Celebration, Nov. 2024
            <hr className="h-px mr-4 bg-gray-900 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-900 mx-4 pb-4 opacity-90">
            We celebrated Diwali with our students by bursting crackers and sharing sweets.
          </p>
        </div>
        {/* 4. Shastri Jayanti and Gandhi Jayanti Celebration at Mayo College, Oct. 2024 */}
        <div className="m-4 w-auto-imp bg-green-700 rounded h-450-px">
          <img src={event4} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Shastri Jayanti and Gandhi Jayanti Celebration at Mayo College, Oct. 2024
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            With Mayo College, Ajmer, we taught children about our freedom fighters' sacrifices.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-yellow-300 rounded h-450-px">
          <img src={event8} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-900 pt-4 pb-2 mx-4">
            Annual Day, 2024
            <hr className="h-px mr-4 bg-gray-900 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-900 mx-4 pb-4 opacity-90">
            Come join us on 18th March, 2024 to celebrate our annual day.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-green-700 rounded h-450-px">
          <img src={event5} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Distribution of Uniform 2024
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            Its a new year and we are gifting all our students new uniforms to start the year afresh.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-yellow-300 rounded h-450-px">
          <img src={event6} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-900 pt-4 pb-2 mx-4">
            Distribution of Uniform 2023
            <hr className="h-px mr-4 bg-gray-900 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-900 mx-4 pb-4 opacity-90">
            Our volunteers conducted a drive to distribute our newly designed uniforms to all of our lovely kids.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-green-700 rounded h-450-px">
          <img src={event9} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Winter Trip 2023
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            We never let the fun stop, so we took a batch of our students for an educational trip!
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-yellow-300 rounded h-450-px">
          <img src={event7} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-900 pt-4 pb-2 mx-4">
            Winter Skill Classes 2023
            <hr className="h-px mr-4 bg-gray-900 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-900 mx-4 pb-4 opacity-90">
            2 week winter classes for all our students to learn about music, dance, acting, pottery, yoga and drawing.
          </p>
        </div>
      </Slider>
      <hr className="h-px my-12 mx-14 bg-gray-900 border-0 opacity-30 rounded-lg"></hr>
    </div>
  );
}
