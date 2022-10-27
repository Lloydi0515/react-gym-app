import "./About.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
        eveniet hic quis reprehenderit eligendi libero magni voluptates
        voluptatibus iure fuga.
      </Header>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quaerat nisi consequuntur omnis neque impedit quisquam dolor!
              Necessitatibus sint quos vero dolor quasi autem. Nisi dolor,
              voluptatibus corrupti harum aliquid, distinctio, eveniet quisquam
              eius sint inventore culpa voluptas alias quod.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              vel commodi recusandae debitis neque officiis ducimus, doloremque
              soluta? Alias expedita cumque tempore itaque asperiores, incidunt
              quisquam dolorem amet eius! Eaque voluptatem dolore aperiam quod
              debitis fugit impedit magnam laudantium nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              omnis deleniti dolorem, iste asperiores culpa esse laudantium
              perferendis cumque aliquid?
            </p>
          </div>
        </div>
      </section>
      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quaerat nisi consequuntur omnis neque impedit quisquam dolor!
              Necessitatibus sint quos vero dolor quasi autem. Nisi dolor,
              voluptatibus corrupti harum aliquid, distinctio, eveniet quisquam
              eius sint inventore culpa voluptas alias quod.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              vel commodi recusandae debitis neque officiis ducimus, doloremque
              soluta? Alias expedita cumque tempore itaque asperiores, incidunt
              quisquam dolorem amet eius! Eaque voluptatem dolore aperiam quod
              debitis fugit impedit magnam laudantium nesciunt!
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>
      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quaerat nisi consequuntur omnis neque impedit quisquam dolor!
              Necessitatibus sint quos vero dolor quasi autem. Nisi dolor,
              voluptatibus corrupti harum aliquid, distinctio, eveniet quisquam
              eius sint inventore culpa voluptas alias quod.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              vel commodi recusandae debitis neque officiis ducimus, doloremque
              soluta? Alias expedita cumque tempore itaque asperiores, incidunt
              quisquam dolorem amet eius! Eaque voluptatem dolore aperiam quod
              debitis fugit impedit magnam laudantium nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              omnis deleniti dolorem, iste asperiores culpa esse laudantium
              perferendis cumque aliquid?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
