import React from "react";
import Navbar from "../../containers/navbar/navbar";
import ContactUs from "../../containers/contactUs/contactUs";
import { Footer } from "../../containers/footer/footer";
import ImageBanner from "../../containers/internship/internship";

function Internship() {
  
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])

  return (
    <div className="flex flex-col">
      <Navbar props={{ atPageTop: false, fromGallery: true }} />
      <ImageBanner />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Internship;