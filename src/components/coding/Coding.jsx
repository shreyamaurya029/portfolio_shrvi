
import React from "react";
import "./Coding.scss";

const Coding = () => {
  const leetCodeProfileLink = "https://leetcode.com/not_so_dark/";
  const gfgProfileLink = "https://auth.geeksforgeeks.org/user/shreya21ug";

  return (
    <div className="coding-profiles-section">
      <div className="profile-container">
        <div className="profile">
          <a
            href={leetCodeProfileLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="leetcode.png"
              alt="LeetCode Profile"
              className="profile-image"
            />
          </a>
        </div>

        <div className="profile">
          <a href={gfgProfileLink} target="_blank" rel="noopener noreferrer">
            <img
              src="gfg.jpeg"
              alt="GeeksforGeeks Profile"
              className="profile-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Coding;
