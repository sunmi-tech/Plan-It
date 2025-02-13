import search from "../assets/images/search.svg";
import calendar from "../assets/images/calendar.svg";
import profile from "../assets/images/profile.svg";

function Header() {
  return (
    <header>
      <div className="header">
        <h2>Welcome back, Vincent 👍</h2>
        <div>
          <img src={search} />
          <p>
            <img src={calendar} />
            <span>19 May 2025</span>
          </p>
          <img src={profile} />
        </div>
      </div>
    </header>
  );
}

export default Header;
