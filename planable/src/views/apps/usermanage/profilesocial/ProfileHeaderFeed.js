import React from "react";
import {
  Button,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Edit2, Settings, Menu, X } from "react-feather";
import coverImg from "../../../../assets/img/profile/user-uploads/cover.jpg";
import profileImg from "../../../../assets/img/profile/user-uploads/user-13.jpg";
import "../../../../assets/scss/pages/usersocial.scss";

class ProfileHeaderFeed extends React.Component {
  state = {
    isOpen: false,
    fbimage: "",
    fbname: "",
    fbemail: "",
    fbid: "",
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  componentDidMount() {
    this.setState({ fbimage: localStorage.getItem("fbimage") });
    this.setState({ fbname: localStorage.getItem("name") });
    this.setState({ fbemail: localStorage.getItem("email") });
    this.setState({ fbid: localStorage.getItem("fbid") });

    // const name = localStorage.getItem("name");
    // const fbemail = localStorage.getItem("email");
    // const fbid = localStorage.getItem("fbid");
  }
  render() {
    return (
      <div className="profile-header mb-2">
        <div className="position-relative">
          <div className="cover-container">
            <img
              src={coverImg}
              // width="100%"
              // height={250}
              alt="CoverImg"
              className="img-fluid bg-cover w-100 rounded-0 fbimagefix"
            />
          </div>
          <div className="profile-img-container d-flex align-items-center justify-content-between">
            <img
              src={this.state.fbimage}
              alt="porfileImg"
              className="img-fluid img-border rounded-circle box-shadow-1 ht-1
              "
            />
            {/* <div className="float-right">
              <Button color="primary" className="btn-icon rounded-circle mr-1">
                <Edit2 size={17} />
              </Button>
              <Button color="primary" className="btn-icon rounded-circle">
                <Settings size={17} />
              </Button>
            </div> */}
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center profile-header-nav">
          {/* <Navbar expand="sm" className="w-100 pr-0">
            <NavbarToggler onClick={this.toggle}>
              {this.state.isOpen ? <X size={20} /> : <Menu />}
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="justify-content-around w-75 ml-sm-auto navbar-nav">
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    Timeline
                  </NavLink>
                </NavItem>
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    About
                  </NavLink>
                </NavItem>
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    Photos
                  </NavLink>
                </NavItem>
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    Friends
                  </NavLink>
                </NavItem>
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    Videos
                  </NavLink>
                </NavItem>
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    Events
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar> */}
        </div>
      </div>
    );
  }
}
export default ProfileHeaderFeed;
