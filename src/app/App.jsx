import "./App.scss";
import Header from "../components/Header";
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

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
              <li className="list__item">
                  <FaInbox className="list__item__icon"/>
                <p className="list__item__text">Inbox</p>
              </li>
              <li className="list__item">
                  <FaCalendar className="list__item__icon"/>
                <p className="list__item__text">Today</p>
              </li>
              <li className="list__item">
                  <FaCalendarAlt className="list__item__icon"/>
                <p className="list__item__text">Next 7 days</p>
              </li>
            </ul>
          <section className="sidebar__category"></section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
