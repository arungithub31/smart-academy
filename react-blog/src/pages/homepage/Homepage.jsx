import "./homepage.css";
import pressure from "../images/pressure.jpg";
import Engineer from "../images/Engineer.jpg";
import pipe from "../images/pipe.jpeg";
import wheel from "../images/wheel.jpg";
import HVAC from "../images/HVAC.jpg";
import drain from "../images/drain.jpg";
import water from "../images/water.jpg";
import grill from "../images/grill.jpg";

export default function Homepage() {
  return (
    <div className="home">
      <div className="home-block1">
        <div className="block1-left-1">
          <h1 className="header-1">Learn Instrumentation from the experts</h1>
          <div className="block1-left-2">
            Instrumentation is one of the most hopeful areas for employment in
            the present age of recent technology industries and labs.
          </div>
          <div className="block1-left-3">CALL US</div>
        </div>
        <div className="block1-right-1">
          <div className="image1-container">
            <img className="homeImage1" src={pressure} alt="image1" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="home-block2">
          <div className="block2-left-1">
            <div className="image2-container">
              <img className="homeImage2" src={Engineer} alt="image2" />
            </div>
          </div>
          <div className="block2-right-1">
            <div className="header1-b2"> Who We Are </div>
            <div className="header2-b2">
              We provides training in Instrumentation and Industrial Automation
            </div>
            <p className="block2-right-2-1">
              We are a team of young, efficient, qualified and hardcore
              professionals with a broad spectrum of consultancy and industrial
              backgrounds
            </p>
            <div className="block2-right-2-2">CALL US</div>
          </div>
        </div>
        <div className="header2">Courses</div>
        <div className="home-block3">
          <div className="container-b3">
            <img className="homeImage3" src={pipe} alt="image3" />
            <p>Diploma in Process Control Instrumentation – 1 Year</p>
            <span className="b3-span"> Eligiblity : Plus Two</span>
          </div>
          <div className="container-b3">
            <img className="homeImage3" src={pipe} alt="image4" />
            <p>Diploma in Process Control Instrumentation – 5 Months</p>
            <span className="b3-span"> Eligiblity : Plus Two</span>
          </div>
          <div className="container-b3">
            <img className="homeImage3" src={wheel} alt="image5" />
            <p>
              Advanced Diploma in Instrumentation & Industrial Automation – 2
              Months
            </p>
            <span className="b3-span">
              Eligibility: B.Tech / B.E / Diploma / Science Graduates / ITI
            </span>
          </div>
        </div>
        <div className="view-courses-button-wrap">
          <div className="view-courses-button">View All Courses</div>
        </div>

        <div className="home-block4">
          <div className="block4-left">
            <h1 className="block4-left-1">Need admission ?</h1>
            <p className="block4-left-2">
              We start new batches every two months.
            </p>
            <button className="call-number">+91 90373 18303</button>
          </div>
          <div className="block4-right">
            <img className="homeImag4" src={HVAC} alt="image1" />
          </div>
        </div>
      </div>
      <div className="header2"> Our Lab</div>

      <div className="home-block5">
        <div>
          <img className="homeImage5" src={drain} alt="image5" />
        </div>
        <div>
          <img className="homeImage5" src={water} alt="image6" />
        </div>
        <div>
          <img className="homeImage5" src={drain} alt="image7" />
        </div>
        <div>
          <img className="homeImage5" src={drain} alt="image8" />
        </div>
      </div>

      <div className="home-block6">
        <div className="home-block6-1">
          <div>
            <img className="homeImage6" src={grill} alt="image5" />
          </div>
          <div className="block6-right">
            <div className="block6-right-1">
              Want to know more details? Contact our course counselors now!
              <div className="block6-button">CALL US</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
