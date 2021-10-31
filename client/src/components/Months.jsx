import React from 'react';

class Months extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.getJanuaryCOAs = this.getJanuaryCOAs.bind(this);
    this.getFebruaryCOAs = this.getFebruaryCOAs.bind(this);
    this.getMarchCOAs = this.getMarchCOAs.bind(this);
    this.getAprilCOAs = this.getAprilCOAs.bind(this);
    this.getMayCOAs = this.getMayCOAs.bind(this);
    this.getJuneCOAs = this.getJuneCOAs.bind(this);
    this.getJulyCOAs = this.getJulyCOAs.bind(this);
    this.getAugustCOAs = this.getAugustCOAs.bind(this);
    this.getSeptemberCOAs = this.getSeptemberCOAs.bind(this);
    this.getOctoberCOAs = this.getOctoberCOAs.bind(this);
    this.getNovemberCOAs = this.getNovemberCOAs.bind(this);
    this.getDecemberCOAs = this.getDecemberCOAs.bind(this);
  }
  /////////////////////////////////////////////////
  // TODO - refactor to eliminate mutliple props //
  /////////////////////////////////////////////////
  getJanuaryCOAs(january) {
    this.props.handleMonthClick(january);
  };

  getFebruaryCOAs(february) {
    this.props.handleMonthClick(february);
  };

  getMarchCOAs(march) {
    this.props.handleMonthClick(march);
  };

  getAprilCOAs(april) {
    this.props.handleMonthClick(april);
  };

  getMayCOAs(may) {
    this.props.handleMonthClick(may);
  };

  getJuneCOAs(june) {
    this.props.handleMonthClick(june);
  };

  getJulyCOAs(july) {
    this.props.handleMonthClick(july);
  };

  getAugustCOAs(august) {
    this.props.handleMonthClick(august);
  };

  getSeptemberCOAs(september) {
    this.props.handleMonthClick(september);
  };

  getOctoberCOAs(october) {
    this.props.handleMonthClick(october);
  };

  getNovemberCOAs(november) {
    this.props.handleMonthClick(november);
  };

  getDecemberCOAs(december) {
    this.props.handleMonthClick(december);
  };

  render() {
  
    return (
      <div className="months">
        <h3 className="month_title">2021</h3>
        <ul className="month" onClick={() => this.getJanuaryCOAs('01')}>January</ul>
        <ul className="month" onClick={() => this.getFebruaryCOAs('02')}>February</ul>
        <ul className="month" onClick={() => this.getMarchCOAs('03')}>March</ul>
        <ul className="month" onClick={() => this.getAprilCOAs('04')}>April</ul>
        <ul className="month" onClick={() => this.getMayCOAs('05')}>May</ul>
        <ul className="month" onClick={() => this.getJuneCOAs('06')}>June</ul>
        <ul className="month" onClick={() => this.getJulyCOAs('07')}>July</ul>
        <ul className="month" onClick={() => this.getAugustCOAs('08')}>August</ul>
        <ul className="month" onClick={() => this.getSeptemberCOAs('09')}>September</ul>
        <ul className="month" onClick={() => this.getOctoberCOAs('10')}>October</ul>
        <ul className="month" onClick={() => this.getNovemberCOAs('11')}>November</ul>
        <ul className="month" onClick={() => this.getDecemberCOAs('12')}>December</ul>
        <ul className="archive">archive</ul>
      </div>
    )
  }
}

export default Months;