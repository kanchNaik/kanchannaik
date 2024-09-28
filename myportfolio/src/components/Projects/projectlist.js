import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectsData = [
  { id: 1, title: "Visualization Project 1", category: ["viz"] },
  { id: 2, title: "Visualization Project 2", category: ["viz"] },
  { id: 3, title: "Machine Learning Project 1", category: ["ml"] },
  { id: 4, title: "Machine Learning Project 2", category: ["ml"] },
  { id: 5, title: "Machine Learning Project 3", category: ["ml"] },
  { id: 6, title: "Visualization Project 3", category: ["viz"] },
  { id: 7, title: "General Project 1", category: ["general"] },
  { id: 8, title: "General Project 2", category: ["general"] },
];

const ProjectCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
  activeCategory === "all"
    ? projectsData
    : projectsData.filter((project) => project.category.includes(activeCategory));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveCategory("all")}>All</button>
        <button onClick={() => setActiveCategory("viz")}>Viz</button>
        <button onClick={() => setActiveCategory("ml")}>ML</button>
      </nav>

      <Slider {...settings}>
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card" style={cardStyle}>
            <h3>{project.title}</h3>
            <p>Category: {project.category}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const cardStyle = {
  padding: "20px",
  background: "#f0f0f0",
  border: "1px solid #ddd",
  borderRadius: "5px",
  textAlign: "center",
};

export default ProjectCarousel;
