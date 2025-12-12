import React from "react";
import { ImagePopup } from "../image-popup/image-popup";
import img3 from "../../assets/images/img3.jpg";
import img2 from "../../assets/images/img2.jpg";
import img4 from "../../assets/images/img4.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";
import img10 from "../../assets/images/img10.jpg";
import img11 from "../../assets/images/img11.jpg";
import img22 from "../../assets/images/img22.jpg";
import img23 from "../../assets/images/img23.jpg";
import img24 from "../../assets/images/img24.jpg";
import img26 from "../../assets/images/img26.jpg";
import img27 from "../../assets/images/img27.jpg";
import img29 from "../../assets/images/img29.jpg";
import img30 from "../../assets/images/img30.jpg";
import img31 from "../../assets/images/img31.jpg";
import img32 from "../../assets/images/img32.jpg";
import img33 from "../../assets/images/img33.jpg";
import img34 from "../../assets/images/img34.jpg";
import img35 from "../../assets/images/img35.jpg";
import img36 from "../../assets/images/img36.jpg";
import img37 from "../../assets/images/img37.jpg";
import img38 from "../../assets/images/img38.jpg";
import img40 from "../../assets/images/img40.jpg";
import img41 from "../../assets/images/img41.jpg";
import img42 from "../../assets/images/img42.jpg";
import img43 from "../../assets/images/img43.jpg";
import img44 from "../../assets/images/img44.jpg";
import img45 from "../../assets/images/img45.jpg";
import img46 from "../../assets/images/img46.jpg";
import img47 from "../../assets/images/img47.jpg";
import img48 from "../../assets/images/img48.jpg";
import img49 from "../../assets/images/img49.jpg";
import img60 from "../../assets/images/img60.jpg";
import img61 from "../../assets/images/img61.jpg";
import img62 from "../../assets/images/img62.jpg";
import img63 from "../../assets/images/img63.jpg";
import img64 from "../../assets/images/img64.jpg";
import img65 from "../../assets/images/img65.jpg";
import img66 from "../../assets/images/img66.jpg";
import img67 from "../../assets/images/img67.jpg";
import img68 from "../../assets/images/img68.jpg";
import img69 from "../../assets/images/img69.jpg";
import img70 from "../../assets/images/img70.jpg";
import img71 from "../../assets/images/img71.jpg";
import img72 from "../../assets/images/img72.jpg";
import img73 from "../../assets/images/img73.jpg";
import img74 from "../../assets/images/img74.jpg";
import img75 from "../../assets/images/img75.jpg";
import img76 from "../../assets/images/img76.jpg";
import img77 from "../../assets/images/img77.jpg";
import img78 from "../../assets/images/img78.jpg";
import img79 from "../../assets/images/img79.jpg";
import img80 from "../../assets/images/img80.jpg";
import img81 from "../../assets/images/img81.jpg";
import img82 from "../../assets/images/img82.jpg";
import img83 from "../../assets/images/img83.jpg";
import img84 from "../../assets/images/img84.jpg";
import img85 from "../../assets/images/img85.jpg";
import img86 from "../../assets/images/img86.jpg";
import img87 from "../../assets/images/img87.jpg";
import img88 from "../../assets/images/img88.jpg";
import img89 from "../../assets/images/img89.jpg";
import img90 from "../../assets/images/img90.jpg";
import img91 from "../../assets/images/img91.jpg";
import img92 from "../../assets/images/img92.jpg";
import img93 from "../../assets/images/img93.jpg";
import img94 from "../../assets/images/img94.jpg";
import img95 from "../../assets/images/img95.jpg";
import img96 from "../../assets/images/img96.jpg";
import img97 from "../../assets/images/img97.jpg";
import img98 from "../../assets/images/img98.jpg";
import img99 from "../../assets/images/img99.jpg";
import img100 from "../../assets/images/img100.jpg";
import img101 from "../../assets/images/img101.jpg";
import img102 from "../../assets/images/img102.jpg";
import img103 from "../../assets/images/img103.jpg";
import img104 from "../../assets/images/img104.jpg";
import img105 from "../../assets/images/img105.jpg";
import img106 from "../../assets/images/img106.jpg";
import img107 from "../../assets/images/img107.jpg";
import img108 from "../../assets/images/img108.jpg";
import img109 from "../../assets/images/img109.jpg";
import img110 from "../../assets/images/img110.jpg";
import img111 from "../../assets/images/img111.jpg";
import img112 from "../../assets/images/img112.jpg";
import img113 from "../../assets/images/img113.jpg";
import img114 from "../../assets/images/img114.jpg";
import img115 from "../../assets/images/img115.jpg";

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const images = [
    img11, img10, img9, img8, img2, img4, img3, img22, img23, img24, img26, img27, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img40, img41, img42, img43, img44, img45, img46, img47, img48, img49, img60,
    img61,
    img62,
    img63,
    img64,
    img65,
    img66,
    img67,
    img68,
    img69,
    img70,
    img71,
    img72,
    img73,
    img74,
    img75,
    img76,
    img77,
    img78,
    img79,
    img80,
    img81,
    img82,
    img83,
    img84,
    img85,
    img86,
    img87,
    img88,
    img89,
    img90,
    img91,
    img92,
    img93,
    img94,
    img95,
    img96,
    img97,
    img98,
    img99,
    img100,
    img101,
    img102,
    img103,
    img104,
    img105,
    img106,
    img107,
    img108,
    img109,
    img110,
    img111,
    img112,
    img113,
    img114,
    img115,
  ];

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-14 bg-yellow-100">
        {images.map((image: any, index: any) => (
          <img
            key={index}
            src={image}
            alt="maa the foundation event"
            className="cursor-pointer rounded-lg shadow-md"
            onClick={() => handleImageClick(image)}
          />
        )).reverse()}
      </div>
      {selectedImage ? (
        <ImagePopup image={selectedImage} onClose={handleCloseClick} />
      ) : null}
    </>
  );
}