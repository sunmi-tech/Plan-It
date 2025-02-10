import circle_plus from "../assets/images/circle_plus.svg";
import arrow from "../assets/images/arrow.svg";
import plus from "../assets/images/plus.svg";

function Menu() {
  return (
    <div className="Menu">
      <div className="title">
        <h2>Projects</h2>
        <img src={circle_plus} />
      </div>
      <ul>
        <li>
            <img src={arrow} />
            <h3>Team</h3>
            <img src={plus} />
        </li>
        <li>
            <img src={arrow} />
            <h3>Tasks</h3>
            <img src={plus} />
        </li>
        <li>
          <img src={arrow} />
          <h3>Reminders</h3>
          <img src={plus} />
        </li>
        <li>
          <img src={arrow} />
          <h3>Messengers</h3>
          <img src={plus} />
        </li>
      </ul>
    </div>
  );
}

export default Menu;
