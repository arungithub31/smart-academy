import "./about.css";
import HVAC from "../images/HVAC.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about-block1">
        <h1 className="about-h1"> About Us</h1>
        <p className="about-p1">
          Smart Academy is a reputed Educational Institution providing training
          in Instrumentation Technology. It is one of the most hopeful areas for
          employment in the present age of recent technology industries and
          labs. Smart Academy is able to give the best training with the help of
          expensive modern equipment and well-experienced faculty.
        </p>
      </div>

      <div className="about-block2">
        <div className="about-block2-left">
          <h3 className="about-h2">Our Mission</h3>
          <p className="about-p2">
            To up to date the knowledge of the students through the different
            training programs and collaboration with industries.
            <br /> To educate the students to be professionally accomplished to
            meet the present need of industries and higher education.
          </p>
        </div>

        <div className="about-block2-right">
          <h3 className="about-h2">Our Vision</h3>
          <p className="about-p2">
            Be a dynamic contributor to the world society through the
            development of proficiency and dispersal of recent knowledge in the
            field of Instrumentation.
          </p>
        </div>
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
  );
}
