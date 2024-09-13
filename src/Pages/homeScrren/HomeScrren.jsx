import React, { useRef, useState } from "react";
import Slider from "../../components/slider/Slider";
import "./homeScreen.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactPlayer from "react-player";
import { Tune } from "@mui/icons-material";

//small slider component--

const SmallSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < images?.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="small-image-slider">
      <button
        className="prev-button"
        onClick={goToPrev}
        disabled={currentIndex === 0}
      >
        &#8249;
      </button>
      <div
        className="small-slider-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images?.map((image, index) => (
          <div key={index} className="small-slider-item">
            <img src={image?.img} alt={`Slider ${index + 1}`} />
          </div>
        ))}
      </div>
      <button
        className="next-button"
        onClick={goToNext}
        disabled={currentIndex >= images.length - 1}
      >
        &#8250;
      </button>
    </div>
  );
};

const ReviewVideoSlider = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRefs = useRef([]);

  const goToNext = () => {
    if (currentIndex < videos?.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleVideoPlay = (index) => {
    playerRefs.current.forEach((player, idx) => {
      if (player && idx !== index) player.seekTo(0);
    });
  };

  return (
    <div className="review-video-slider">
      <button
        className="review-prev-button"
        onClick={goToPrev}
        disabled={currentIndex === 0}
        aria-label="Previous video"
      >
        <ArrowBackIcon />
      </button>
      <div className="review-slider-container">
        <div
          className="review-slider-content"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {videos?.map((video, index) => (
            <div
              key={index}
              className="review-slider-item"
              onClick={() => handleVideoPlay(index)}
            >
              <ReactPlayer
                ref={(el) => (playerRefs.current[index] = el)}
                url={video?.src}
                playing={currentIndex === index}
                controls={true}
                width="100%"
                height="100%"
                className="review-slider-video"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="review-next-button"
        onClick={goToNext}
        disabled={currentIndex >= videos?.length - 1}
        aria-label="Next video"
      >
        <ArrowForwardIcon />
      </button>
    </div>
  );
};

const videoData = [
  {
    src: "https://youtu.be/5FJaP75YUhY?si=oX3eNa0NEKtpyvao",
  },
  {
    src: "https://youtu.be/i3_NQSk09Cc?si=mMBFgearqMykcvmx",
  },
  {
    src: "https://youtu.be/dyDJgg_pBTM?si=PVCfFF9Gbgsgwtb0",
  },
];

const items = [
  {
    img: "/Img/P-1.png",
    content: "RESTORE YOUR RARE PICTURE",
    buttonText: "Order Your Digital Painting",
  },
  {
    img: "/Img/P-2.png",
    content: "REJOICE YOUR MEMORIES OF YOUR KIDS",
    buttonText: "Order Today!",
  },
  {
    img: "/Img/P-3.png",
    content: "RLIVE YOUR WEDDING DAY",
    buttonText: "Explore Now",
  },
  {
    img: "/Img/P-4.png",
    content: "RETAIN YOUR FAMILY PHOTO",
    buttonText: "Order Your Digital Painting",
  },
];

const smallSlider1 = [
  { img: "/Img/I-1.jpg" },
  { img: "/Img/I-2.jpg" },
  { img: "/Img/I-3.jpg" },
  { img: "/Img/I-4.jpg" },
  { img: "/Img/I-5.jpg" },
  { img: "/Img/I-6.jpg" },
  { img: "/Img/I-7.jpg" },
  ,
];

const smallSlider2 = [
  { img: "/Img/I-5.jpg" },
  { img: "/Img/I-6.jpg" },
  { img: "/Img/I-7.jpg" },
  { img: "/Img/I-8.jpg" },
  { img: "/Img/I-14.jpg" },
  { img: "/Img/I-15.jpg" },
];

const smallSlider3 = [
  { img: "/Img/I-10.jpg" },
  { img: "/Img/I-11.jpg" },
  { img: "/Img/I-12.jpg" },
  { img: "/Img/I-13.jpg" },
];

const HomeScreen = () => {
  return (
    <>
      {/* Section-1-----master Slider----------------------- */}
      <div>
        <Slider items={items} />
      </div>

      {/* Section-2 ----------Product listing------------------*/}
      <div className="new-section">
        {/* Left */}

        <div className="left-fixed-section">
          <br />
          <br />
          <br />
          <br />
          <h2>
            WE
            <br />
            CREATE
            <br />
            BEAUTIFUL
            <br />
            WORKS
            <br />
            OF ART
            <br />
            FROM YOUR
            <br />
            FAVORITE PHOTOS
          </h2>

          <div className="leftside-btn">
            <button className="left-side-paintBtn  masterButton">
              {" "}
              Paint My Picture
            </button>
          </div>
        </div>

        {/* Right*/}

        <div className="right-scrollable-section">
          <p>
            OilPixel, a digital painting studio, paints your story on a blank
            canvas, vividly manifesting every single bit of your persona. Our
            digital brush strokes gracefully create the work of art- portrait
            painting, photo restoration, photo finishing or photo manipulation,
            bringing out your emotions dramatically. With the extensive
            experience of a decade, our masterpieces captivate both your heart
            and soul.
          </p>

          <p>
            Be it self portrait, couple portrait, child portrait, pet portrait,
            festive paintings or like, our deft artist paint it to perfection,
            bringing that beautiful smile on your face. Your every piece of art
            is important to us. We make sure, it is safely and securely
            delivered to your doorstep bringing that beautiful smile on your
            face.
          </p>

          {/* Sliders */}

          <div className="smallSlider-division">
            <h4 className="ms-2 ">Self portrait paintings</h4>

            <SmallSlider images={smallSlider1} />
          </div>

          <div className="smallSlider-division">
            <h4 className="ms-2">Children porttrait paintings</h4>

            <SmallSlider images={smallSlider2} />
          </div>

          <div className="smallSlider-division">
            <h4 className="ms-2">Photo Restoration</h4>
            <SmallSlider images={smallSlider3} />
          </div>
        </div>
      </div>

      {/* Section-3-------Review Section----------------------- */}

      <div className="review-container">
        {/* Left Section */}
        <div className="review-left">
          <h2>
            Our customer
            <br />
            stories near to our heart
          </h2>

          <div className="review-button-container">
            <p>It keeps us motivated</p>

            <button className="masterButton">Read More...</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="review-right">
          <div className="review-slider-container">
            <div className="d-flex align-item-center justify-content-between">
              <h4 className="review-slider-title">Nisha Panchal</h4>

              <div className="star-rating me-3">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="star">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>

            <h6> Ahemdabad, India</h6>
            <ReviewVideoSlider videos={videoData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
