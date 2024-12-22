import useInterSection from "../../hooks/useInterSection";
import "./home.css";
import React, { useEffect, useState } from "react";
import imgOne from "../../assets/ss1.jpg";
import imgTwo from "../../assets/ss2.jpg";
import imgThree from "../../assets/ss3.jpg";
import imgFour from "../../assets/ss4.jpg";
import { Navigation } from "../../components/navigation";
import { useLocation } from "react-router-dom";

function Home() {
  const [visible, setVisible] = useState(false);
  const [visbleObj, setVisibleObj] = useState({
    key1: false,
    key2: false,
    key3: false,
    key4: false,
  });
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);
  const [sec2v, sectionTwoRef] = useInterSection({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const [sec3v, sectionThreeRef] = useInterSection({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const [sec4v, sectionFourRef] = useInterSection({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const location = useLocation();

  useEffect(() => {
    // console.log("triggered", sec4v);
    if (sec4v) {
      setTimeout(
        () =>
          setVisibleObj((value) => {
            return { ...value, key1: true };
          }),
        1000
      );
      setTimeout(
        () =>
          setVisibleObj((value) => {
            return { ...value, key2: true };
          }),
        1500
      );
      setTimeout(
        () =>
          setVisibleObj((value) => {
            return { ...value, key3: true };
          }),
        2000
      );
      setTimeout(
        () =>
          setVisibleObj((value) => {
            return { ...value, key4: true };
          }),
        2500
      );
    } else {
      setVisibleObj({
        key1: false,
        key2: false,
        key3: false,
        key4: false,
      });
    }
  }, [sec4v]);
  // useEffect(() => console.log(visbleObj), [visbleObj]);
  return (
    <div className="HomeDiv">
      <div className="sectionGrad1">
        <Navigation paths={location.pathname} />
        <div className=" flex-row justify-sb">
          <div className={`fade-in-div ${visible ? "visible" : ""}`}>
            <h1>
              Your Shopping <br />
              Experience made simple
            </h1>
            <p className="sub-text">
              Simple, reliable, available for <br /> customers, retailers and
              shopkeepers
              <br />
              in all over world.
            </p>
            <button className="btn btn-success">
              <a href="../../assets/shoplink.apk" download>
                download
              </a>
            </button>
          </div>
          <div className="fade-in">
            <img src="https://i.ibb.co/XDPwD46/Screenshot-2023-04-08-123655-removebg-preview.png" />
          </div>
        </div>
      </div>
      <div ref={sectionTwoRef} className="sectionWhite">
        <div className="flex-row justify-even billingScan">
          <div className={`fade-top-div ${sec2v ? "visible2" : ""}`}>
            <h3>Billing Made Simple!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
              mattis ipsum. Sed faucibus posuere orci, eu scelerisque erat
              pulvinar vel. Sed commodo eget massa eu auctor. Suspendisse
              aliquam pellentesque pulvinar. Nullam efficitur vitae nunc ac
              scelerisque. Vivamus imperdiet massa eu purus tempus vestibulum.
              Donec ut lorem ac risus feugiat aliquet eget nec diam. Suspendisse
              eu tellus rhoncus, dictum magna nec, maximus est. Pellentesque
              egestas pellentesque dignissim.
            </p>
          </div>
          <div className={`fade-top-div ${sec2v ? "visible2" : ""}`}>
            <h3>Just Scan and Voila!</h3>
            <p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                in mattis ipsum. Sed faucibus posuere orci, eu scelerisque erat
                pulvinar vel. Sed commodo eget massa eu auctor. Suspendisse
                aliquam pellentesque pulvinar. Nullam efficitur vitae nunc ac
                scelerisque. Vivamus imperdiet massa eu purus tempus vestibulum.
                Donec ut lorem ac risus feugiat aliquet eget nec diam.
                Suspendisse eu tellus rhoncus, dictum magna nec, maximus est.
                Pellentesque egestas pellentesque dignissim.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="sectionGrad flex-clmn">
        <h3>Crystal clear UI with easy to use functionality</h3>
        <div className=" flex-row justify-even align-cen" ref={sectionFourRef}>
          <div className="ssimg">
            <img
              src={imgOne}
              className={`${visbleObj.key4 ? "ssimg fade-in-3" : "visib-h"}`}
            />
          </div>
          <div className="ssimg">
            <img
              src={imgTwo}
              className={`${visbleObj.key2 ? "ssimg fade-in-3" : "visib-h"}`}
            />
          </div>
          <div className="ssimg">
            <img
              src={imgThree}
              className={`${visbleObj.key1 ? "ssimg fade-in-3" : "visib-h"}`}
            />
          </div>
          <div className="ssimg">
            <img
              src={imgFour}
              className={`${visbleObj.key3 ? "ssimg fade-in-3" : "visib-h"}`}
            />
          </div>
        </div>
      </div>
      <div className="sectionWhite hidden">
        <h3>Features</h3>
        <div className="flex-row justify-even" ref={sectionThreeRef}>
          <div
            className={`flex-row featureDiv leftDiv ${sec3v ? "visible3" : ""}`}
          >
            <div className="flex-row h-100">
              <div className="flex-row align-cen h-100">
                <div className="flex-row align-cen">
                  <div className="circles mts-1"></div>
                  <h4 className="mts-1 mts-round">Product details</h4>
                </div>
              </div>
              <div className="flex-row align-end h-100">
                <div className="flex-row align-cen">
                  <div className="circles mts-2"></div>
                  <h4 className="mts-2 mts-round">Product category</h4>
                </div>
              </div>
              <div className="flex-row align-start h-100">
                <div className="flex-row">
                  <div className="circles mts-3"></div>
                  <h4 className="mts-3 mts-round">Billing</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex-row featureDiv rightDiv ${
              sec3v ? "visible4" : ""
            }`}
          >
            <div className="flex-row h-100">
              <div className="flex-row align-cen h-100">
                <div className="flex-row align-cen">
                  <div className="circles mts-4"></div>
                  <h4 className="mts-4 mts-round">Expiry management</h4>
                </div>
              </div>
              <div className="flex-row align-end h-100">
                <div className="flex-row align-cen">
                  <div className="circles mts-5"></div>
                  <h4 className="mts-5 mts-round">Price management</h4>
                </div>
              </div>
              <div className="flex-row align-start h-100">
                <div className="flex-row align-cen">
                  <div className="circles mts-1"></div>
                  <h4 className="mts-1 mts-round">Bar code generation</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="sectionGrad"></div> */}
      <div className="sectionBlack">
        <h2 className="navbar-logo">
          Shopitag
          <sup>®</sup>
        </h2>
        <div>
          <h4>Copyright © 2023. LLC</h4>
          <h4>Terms of Service</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
