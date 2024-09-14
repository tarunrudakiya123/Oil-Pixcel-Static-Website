import React, { useEffect, useRef, useState } from "react";
import Slider from "../../components/slider/Slider";
import "./homeScreen.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactPlayer from "react-player";
import { Loader } from "./../../components/loader/Loader";
import apiHelper from "../../Common/ApiHelper.js";
import MessageBox from "../../components/massageBox/MessageBox";

//small slider component--

function extractTextFromHTML(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  return tempDiv.textContent || tempDiv.innerText;
}

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
            <img src={image?.url} alt={`Slider ${index + 1}`} />
          </div>
        ))}
      </div>
      <button
        className="next-button"
        onClick={goToNext}
        disabled={currentIndex >= images?.length - 1}
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

const HomeScreen = () => {
  const [product, SetProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [section1Data, setSection1Data] = useState([]);
  const [section2Data, setSection2Data] = useState([]);
  const [section3Data, setSection3Data] = useState([]);
  const [content, setContent] = useState(null);

  // Get Product Data From BackEnd Server

  console.log(section3Data, "section3Data--------------");

  const GETProduct = async () => {
    try {
      setIsLoading(true);
      const result = await apiHelper.ProductDetails();

      if (result?.status === 200) {
        SetProduct(result?.data?.Product);
      } else {
        setError("Failed to fetch product data.");
      }
    } catch (error) {
      if (
        error?.response &&
        error?.response?.data &&
        error?.response?.data.message
      ) {
        setError(error.response.data.message);
        setError("An error occurred: " + error?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GETProduct();
  }, []);

  useEffect(() => {
    const section1 = product?.filter((x) => x?.category?.name === "Section 1");
    setSection1Data(section1);

    const section2 = product?.filter((x) => x?.category?.name === "Section 2");
    setSection2Data(section2);

    const section3 = product?.filter((x) => x?.category?.name === "Section 3");
    setSection3Data(section3);

    const ContentPart = product?.filter(
      (x) => x?.category?.name === "Content Part"
    );
    setContent(ContentPart);
  }, [product]);

  return (
    <>
      {/* Section-1-----master Slider----------------------- */}

      <Loader isLoading={isLoading} />
      <MessageBox error={error} seterror={setError} />

      <div>
        <Slider items={section1Data} />
      </div>

      {/* Section-2 ----------Product listing------------------*/}
      <div className="new-section">
        {/* Left */}

        <div className="left-fixed-section">
          <br />
          <br />
          <br />
          <br />
          <h2>{content && content[0]?.title}</h2>

          <div className="leftside-btn">
            <button className="left-side-paintBtn  masterButton">
              {content && content[0]?.Brand}
            </button>
          </div>
        </div>

        {/* Right*/}

        <div className="right-scrollable-section">
          <p>
            {extractTextFromHTML((content && content[0]?.description) || "")}
          </p>

          {/* right side small slider part */}

          {/* Sliders */}
          {section2Data &&
            section2Data?.map((x) => {
              return (
                <>
                  <div className="smallSlider-division">
                    <h4 className="ms-2 ">{x?.title}</h4>

                    <SmallSlider images={x?.RelevantImages} />
                  </div>
                </>
              );
            })}
        </div>
      </div>

      {/* Section-3-------Review Section----------------------- */}

      <div className="review-container">
        {/* Left Section */}
        <div className="review-left">
          <h2>{section3Data && section3Data[0]?.title}</h2>

          <div className="review-button-container">
            <p>{section3Data && section3Data[0]?.brand}</p>

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
