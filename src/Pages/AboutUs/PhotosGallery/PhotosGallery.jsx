import { useState } from "react";
import img1 from "../../../assets/image/img1.jpg";
import img2 from "../../../assets/image/img2.jpg";
import img3 from "../../../assets/image/img3.jpg";
import img4 from "../../../assets/image/img4.jpg";
import img5 from "../../../assets/image/img5.jpg";
import img6 from "../../../assets/image/img6.jpg";
import img7 from "../../../assets/image/img7.jpg";
import img8 from "../../../assets/image/img9.jpg";
import img9 from "../../../assets/image/img10.jpg";

const PhotosGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h1 className="uppercase text-2xl font-bold text-center py-10 ">Madrasah Photos Gallery</h1>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="gallery-image"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="selected-image">
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}
    </div>
  );
};

export default PhotosGallery;
