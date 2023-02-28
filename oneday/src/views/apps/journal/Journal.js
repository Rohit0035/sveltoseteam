import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
} from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";

import { CgChevronLeftO, CgChevronRightO } from "react-icons/cg";

// import Buyimg from "../../../assets/img/boy-img.png";
// import Countdown from "react-countdown";
// import ChatAppList from "./ChatAppList";
// import ChatAppMassage from "./ChatAppMassage";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import JournalList from "./JournalList";
import JournalDetails from "./JournalDetails";
import JourDetailList from "./JourDetailList";
import AddJournal from "./AddJournal";

class Journal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openjournal: "",
      closediv: "on",
    };
  }
  handledivClose = (e) => {
    const on = e.split(" ")[0];
    const off = e.split(" ")[1];

    this.setState({ closediv: off });

    if (this.state.closediv == "off") {
      this.setState({ closediv: on });
      console.log(this.state.closediv);
    } else if (this.state.closediv == "on") {
      this.setState({ closediv: off });
      console.log(this.state.closediv);
    }
    // if (this.state.closediv == "off") {
    //   this.setState({ closediv: on });
    // } else if (this.state.closediv == "on") {
    //   this.setState({ closediv: off });
    // }
  };

  handleAddJournal = (data) => {
    console.log(data);
    this.setState({ openjournal: data });
  };

  handleCallback = (childData) => {
    this.setState({ openjournal: childData });
  };
  render() {
    return (
      <>
        <section className="app-chatbg">
          <div class="app rt-chat">
            {this.state.closediv == "on" ? (
              <>
                <div class="contact-list1">
                  <div>
                    <CgChevronLeftO
                      className="leftbtncollapse"
                      // style={{
                      //   display: `${
                      //     this.state.closediv === "on" ? "visible" : "none"
                      //   }`,
                      // }}
                      onClick={() => this.handledivClose("on off")}
                      size={25}
                    />
                  </div>
                  <h1 class="title mt-3">My Journal</h1>
                  <ul>
                    <li>
                      <div className="lst-con">
                        <p className="journalstext">Journal </p>
                      </div>
                    </li>

                    <p className="addnewcatmain ">
                      <Button
                        onClick={() => this.handleAddJournal("Open")}
                        className="categorybtntext"
                      >
                        +New Journal
                      </Button>
                    </p>
                    <li className="mt-3">
                      <h5 className="textstyle"> All (5)</h5>

                      <h5 className="textstyle"> Personal</h5>

                      <h5 className="textstyle"> Business</h5>

                      <h5 className="textstyle"> Notes</h5>
                    </li>

                    <p className="addnewcatmain ">
                      <Button className="categorybtntext">
                        +Add New Category
                      </Button>
                    </p>
                  </ul>
                </div>
              </>
            ) : null}

            <div class="contact-list">
              <div className="container">
                <CgChevronRightO
                  className="rightbtncollapse"
                  // style={{
                  //   display: `${
                  //     this.state.closediv == "on" ? "none" : "visible"
                  //   }`,
                  // }}
                  onClick={() => this.handledivClose("on off")}
                  size={25}
                />
                {/* <CustomInput
                  type="switch"
                  className="mt-2 ml-1 custonswitchforhidediv "
                  id="exampleCustomSwitch"
                  name="customSwitch"
                  inline
                  onClick={() => this.handledivClose("on off")}
                ></CustomInput> */}
                <h1 class="title">Journal</h1>
                <JournalList />
              </div>
            </div>
            <div class="messages messaagehead">
              <div class=" jounaldetailsmainhead">
                {this.state.openjournal === "Open" ? (
                  <>
                    <AddJournal parentCallback={this.handleCallback} />
                  </>
                ) : (
                  <>
                    <JournalDetails />
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Journal;
