import React, { Component } from "react";
import { FiClock, FiUsers } from "react-icons/fi";
import { IoMdGitNetwork } from "react-icons/io";

const iconList = [
  {
    icon: <FiClock />,
    title: "35 years",
    description: "More than 35 years of experience",
  },
  {
    icon: <FiUsers />,
    title: "500+",
    description: "More than 500+ clients worldwide",
  },
  {
    icon: <IoMdGitNetwork />,
    title: "Network",
    description: "Well established business across the globe ",
  },
];

class HomeIconList extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = iconList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="service-area ptb--30 bg_color--1">
          <div className="container">
            <div className="row service-one-wrapper">
              <div className="row">
                {ServiceContent.map((val, i) => (
                  <div className={`${column}`} key={i}>
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomeIconList;
