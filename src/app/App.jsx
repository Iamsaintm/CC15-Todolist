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
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category"></section>
          <ul className="list">
            <ListItem
              text="Inbox"
              icon={<FaInbox className="list__item__icon" />}
              active={true}
            />
            <ListItem
              text="Today"
              icon={<FaCalendar className="list__item__icon" />}
              active={false}
            />
            <ListItem
              text="Next 7 days"
              icon={<FaCalendarAlt className="list__item__icon" />}
              active={false}
            />
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
                <ListItem
                  text="Project-A"
                  icon={<FaInbox className="list__item__icon" />}
                  active={true}
                />
                <ListItem
                  text="Project-B"
                  icon={<FaInbox className="list__item__icon" />}
                  active={false}
                />
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
