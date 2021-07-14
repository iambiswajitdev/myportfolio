import React from "react";
import { Link } from "react-router-dom";
import {
  faceIcon,
  instaIcon,
  whatappIcon,
  githubIcon,
  linkIcon,
} from "../utility/commonStaticData";
const Mysocal = () => {
  const socalMedia = [
    {
      name: faceIcon,
      mediaLink: "https://www.facebook.com/profile.php?id=100020837345632",
    },
    { name: instaIcon },
    { name: whatappIcon },
    { name: githubIcon },
    { name: linkIcon },
  ];
  return (
    <>
      <ul className="my_socalMedia">
        {socalMedia.map((item, index) => (
          <li key={index}>
            <Link to={item.mediaLink} target="_blank">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Mysocal;
