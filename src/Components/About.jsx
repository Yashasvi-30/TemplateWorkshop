/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  " I am a btech third year student at UPES Dehradun.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Web Developer",
  "Content writer",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a web developer and a content writer. I am passionate about web design and user experience. I am a creative person and I love to design mobile user interfaces. I am also a graphic designer. I am a hardworking person and I love to work in a team. I am a quick learner and I am always ready to learn new things. I am a good listener and I am always ready to help others. I am a good communicator and I am always ready to communicate with others. I am a good leader and I am always ready to lead a team. I am a good problem solver and I am always ready to solve problems. I am a good decision maker and I am always ready to make decisions. I am a good planner and I am always ready to plan things. I am a good organizer and I am always ready to organize things. I am a good time manager and I am always ready to manage time. I am a good team player and I am always ready to play in a team. I am a good motivator and I am always ready to motivate others. I am a good mentor and I am always ready to mentor others. I am a good coach and I am always ready to coach others. I am a good teacher and I am always ready to teach others. I am a good learner and I am always ready to learn new things. I am a good listener and I am always ready to listen to others. I am a good communicator and I am always ready to communicate with others. I am a good leader and I am always ready to lead a team. I am a good problem solver and I am always ready to solve problems. I am a good decision maker and I am always ready to make decisions. I am a good planner and I am always ready to plan things. I am a good organizer and I am always ready to organize things. I am a good time manager and I am always ready to manage time. I am a good team player and I am always ready to play in a team. I am a good motivator and I am always ready to motivate others. I am a good mentor and I am always ready to mentor others. I am a good coach and I am always ready to coach others. I am a good teacher and I am always ready to teach others. I am a good learner and I am always ready to learn new things. I am a good listener and I am always ready to listen to others.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
