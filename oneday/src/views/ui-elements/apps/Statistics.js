import React from "react";
import { Row, Col } from "reactstrap";
// import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import SessionByDevice from "../cards/analytics/SessionByDevice";
import ProductOrders from "../cards/analytics/ProductOrders";
import Customers from "../cards/analytics/Customers";
import Sales from "../cards/analytics/Sales";
import SupportTracker from "../cards/analytics/SupportTracker";
import Revenue from "../cards/analytics/Revenue";
import GoalOverview from "../cards/analytics/GoalOverview";
import AvgSession from "../cards/analytics/Analytics";
import Tasks from "../cards/analytics/Tasks";
import Sales2 from "../cards/analytics/Sales2";
import Funds from "../cards/analytics/Funds";
import BrowserStats from "../cards/analytics/BrowserStatistics";
import ClientRetention from "../cards/analytics/ClientRetention";
import "../../../assets/scss/pages/card-analytics.scss";
// import "../../../../assets/scss/pages/card-analytics.scss";

let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#b9c3cd",
  $label_color = "#e7eef7",
  $purple = "#df87f2",
  $white = "#fff";

class Statistics extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Breadcrumbs
          breadCrumbTitle="Analytics Cards"
          breadCrumbParent="Card"
          breadCrumbActive="Analytics Cards"
        /> */}
        <Row>
          <Col lg="12" sm="12">
            <SessionByDevice
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          {/* <Col lg="4" sm="12">
            <ProductOrders
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col> */}
          {/* <Col lg="4" sm="12">
            <Customers
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col> */}
          {/* <Col lg="6" sm="12">
            <Sales
              strokeColor={$stroke_color}
              infoLight={$info_light}
              primary={$primary}
              info={$info}
            />
          </Col> */}
          {/* <Col lg="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
          <Col lg="8" sm="12">
            <Revenue
              primary={$primary}
              dangerLight={$danger_light}
              strokeColor={$stroke_color}
              labelColor={$label_color}
            />
          </Col> */}
          {/* <Col lg="4" sm="12">
            <GoalOverview strokeColor={$stroke_color} success={$success} />
          </Col>
          <Col lg="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col lg="6" sm="12">
            <Tasks />
          </Col> */}
          {/* <Col lg="9" md="12" sm="12">
            <Sales2
              strokeColor={$stroke_color}
              primary={$primary}
              purple={$purple}
              labelColor={$label_color}
            />
          </Col> */}
          {/* <Col lg="3" md="12" sm="12">
            <Funds />
          </Col>
          <Col lg="4" md="12">
            <BrowserStats />
          </Col> */}
          {/* <Col lg="8" md="12">
            <ClientRetention
              strokeColor={$stroke_color}
              primary={$primary}
              danger={$danger}
              labelColor={$label_color}
            /> */}
          {/* </Col> */}
        </Row>
      </React.Fragment>
    );
  }
}

export default Statistics;
