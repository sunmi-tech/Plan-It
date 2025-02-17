import { useState } from "react";
import calendar from "../assets/images/calendar.svg";
import defaultProfile from "../assets/images/profile.svg";

function Header() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleDateString('en-US', {month : "short"})
  const day = date.getDate();
  const formatDate = `${year} ${month} ${day}`

  let [profileImg, setProfileImg] = useState(defaultProfile);
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
      const imageUrl = URL.createObjectURL(file);
      setProfileImg(imageUrl);
    }
  }
  return (
    <header>
    <div className="header_container">
    <h2>Welcome back, Vincent 👍</h2>
    <div>
      <p>
        <img src={calendar} />
        <span>{formatDate}</span>
      </p>
      <label htmlFor="profile-upload">
      <img 
      alt="profile Icon"
      src={profileImg} />
      </label>
      <input type="file" 
        id="profile-upload"
        accept="image/*"
        onChange={handleImageChange}
        style={{display : "none"}} />
    </div>
  </div>
  </header>
  );
}

export default Header;
