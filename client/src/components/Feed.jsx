import React from 'react';
import jsPDF from 'jspdf'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.openPDF = this.openPDF.bind(this);
    this.deleteCOA = this.deleteCOA.bind(this);
  }

  // coa clicked
  // open new window with pdf url
  openPDF(lot) {
    console.log('openPDF function clicked!', lot)
    const url = `http://127.0.0.1:8887/${lot}.pdf`;
    // const url = `/Users/robinjeng/Downloads/J2104A.pdf`;
    // const url = `/Users/robinjeng/Downloads/hr-sfo137-mvp/database/pdf/J2103F.pdf`;
    window.open(url);
    // window.loadURL(url);
  }

  deleteCOA(coaID, coaMonth) {
    this.props.handleCOADeleteData(coaID, coaMonth);
    // pass coaID back to App
    // handle delete from App
    // request updated list of COAs
  }

  render() {
    const coas = this.props.coas;
    const clickedMonthCOAs = this.props.clickedMonth;
    const currentViewMonth = this.props.currentViewMonth;
    return (
      <div className="feed-container">
      <h2 className="current-month">{currentViewMonth} COAs</h2>
      <div className="feed-list">
        {clickedMonthCOAs.map((coa) => (
          <>
          <div key={coa._id}>
          <li className="coa" onClick={() => this.openPDF(coa.lotNumber)}>
            Date Approved: {coa.dateApproved} Product Name: {coa.productName} LOT#: {coa.lotNumber}
          </li>
          <button className="delete" onClick={() => this.deleteCOA(coa._id, coa.dateApproved)}>x</button>
          </div>
          </>
        ))}
      </div>
    </div>
    )
  }
}

export default Feed;