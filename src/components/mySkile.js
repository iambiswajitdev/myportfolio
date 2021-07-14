import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  jsImages,
  reactImages,
  htmlImages,
  cssImages,
  bootImages,
  resImages,
  gitImages,
  jiraImages,
  photoImages,
} from "../utility/commonStaticData";
const MySkile = () => {
  const mySkil = [
    {
      box: "JavaScript",
      img: jsImages,
      text: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    },
    {
      box: "React Js",
      img: reactImages,
      text: "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    },
    {
      box: "html",
      img: htmlImages,
      text: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
    },
    {
      box: "css,sass",
      img: cssImages,
      text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. ",
    },
    {
      box: "bootstrap",
      img: bootImages,
      text: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    },
    {
      box: "media query",
      img: resImages,
      text: "Media queries are a key part of responsive web design, as they allow you to create different layouts depending on the size of the viewport, but they can also be used to detect other things about the environment your site is running on, for example whether the user is using a touchscreen rather than a mouse.",
    },
    {
      box: "git",
      img: gitImages,
      text: "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
    },
    {
      box: "jira",
      img: jiraImages,
      text: "JIRA is a tool developed by Australian Company Atlassian. This software is used for bug tracking, issue tracking, and project management. ... The basic use of this tool is to track issue and bugs related to your software and Mobile apps. It is also used for project management.",
    },
    {
      box: "photoshop",
      img: photoImages,
      text: "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.",
    },
  ];
  return (
    <>
      <div className="mySkil">
        <Row>
          {mySkil.map((item, index) => (
            <Col lg={4}>
              <div className="skliBoks" key={index}>
                <span className="skilImg">
                  <img src={item.img} alt="" />
                  <h4 className="mainSkil">{item.box}</h4>
                </span>
                <p className="skilText">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default MySkile;
