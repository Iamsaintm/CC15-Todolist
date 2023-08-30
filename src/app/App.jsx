import "./App.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

function App() {
  const generalList = [
    {
      id: 1,
      text: "Inbox",
      icon: <FaInbox />,
      active: true,
    },
    {
      id: 2,
      text: "Today",
      icon: <FaCalendar />,
      active: false,
    },
    {
      id: 3,
      text: "Next 7 days",
      icon: <FaCalendarAlt />,
      active: false,
    },
  ];
  const projectList = [
    {
      id: 1,
      text: "Project-A",
      icon: <FaInbox />,
      active: true,
    },
    {
      id: 2,
      text: "Project-B",
      icon: <FaInbox />,
      active: false,
    },
  ];
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category"></section>
          <ul className="list">
            {generalList.map((obj) => (
              <ListItem
                key={obj.id}
                text={obj.text}
                icon={obj.icon}
                active={obj.active}
              />
            ))}
          </ul>
          <section className="sidebar__category">
            <div className="accordion">
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Project</p>
                </li>
              </div>

              <ul className="side__category">
                {projectList.map((obj) => (
                  <ListItem
                    key={obj.id}
                    text={obj.text}
                    icon={obj.icon}
                    active={obj.active}
                  />
                ))}
              </ul>
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
