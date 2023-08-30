import "./ListItem.scss";
import { FaInbox, FaCalendar, FaCalendarAlt } from "react-icons/fa";

function ListItem(props) {
  return (
    <li className="list__item">
      {props.icon}
      <p className="list__item__text">{props.text}</p>
    </li>
  );
}

export default ListItem;