import React from "react";
import Heading from "./Components/Heading";
import Card from "./Components/Card";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";

const Gallery = () => {
  const galleryData = [
    {
      title: <img src={img2} width={150} height={180} />,
      desc: "Photo1 Caption",
    },
    {
      title: <img src={img3} width={150} height={180} />,
      desc: "Photo2 Caption",
    },
    {
      title: <img src={img6} width={150} height={190} />,
      desc: "Photo3 Caption",
    },
    {
      title: <img src={img7} width={150} height={180} />,
      desc: "Photo4 Caption",
    },
    {
      title: <img src={img8} width={150} height={180} />,
      desc: "Photo5 Caption",
    },
  ];

  return (
    <>
      <Heading head="Gallery Page" subhead="Gallery Sub-Head" />

      <h5> Gallery images here:- </h5>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {galleryData.map((g) => (
          <Card title={g.title} desc={g.desc} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
