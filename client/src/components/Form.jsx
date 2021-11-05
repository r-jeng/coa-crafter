import React from 'react';
import jsPDF from 'jspdf';
import imgData from './PDFTemplate/PDFHeader.jsx';
import signature from './PDFTemplate/PDFSignature.jsx';
import paw from './PDFPaw.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateApproved: '',
      productName: '',
      lotNumber: '',
      micro: '',
      chem: '',
      pdfUrl: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.handleCloseFormView();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    })
  }

  // input field for COA data
  onSubmit(event) {
    event.preventDefault();
    // new COA state
    const newCOA = {
      dateApproved: this.state.dateApproved,
      productName: this.state.productName,
      lotNumber: this.state.lotNumber,
      micro: this.state.micro,
      chem: this.state.chem,
      pdfUrl: `file:///Users/robinjeng/Downloads/${this.state.lotNumber}.pdf`,
    };
    this.props.handleNewCOA(newCOA);
  }

  generatePDF = () => {
    var doc = new jsPDF('p', 'pt');
    // var imgData = 'data:image/jpeg;base64,'+ Base64.encode('assets/header.png');

    doc.addImage(imgData, 'png', 95, 40, 400, 160);

    doc.setFontSize(40);
    doc.text(105, 290, 'Certificate of Analysis');

    doc.setFontSize(18);
    doc.text(140, 340, `Date Approved: ${this.state.dateApproved}`)

    doc.setFontSize(18);
    doc.text(140, 380, `Product Name: ${this.state.productName}`)

    doc.setFontSize(18);
    doc.text(140, 420, `LOT#: ${this.state.lotNumber}`)

    doc.setFontSize(18);
    doc.text(140, 460, `Micro Results: ${this.state.micro}`)

    doc.setFontSize(18);
    doc.text(140, 500, `Chem Results: ${this.state.chem}`)

    doc.addImage(signature, 'png', 100, 700, 130, 190);
    // x, y, w, h

    doc.addImage(paw, 'png', 220, 770, 40, 40);
    doc.setFontSize(14);
    doc.text(40, 800, `Verified By: `)
    doc.text(110, 800, `________________`)
    // x, y
    doc.setFontSize(14);
    doc.text(315, 800, `Verified Date: ${this.state.dateApproved}`)
    doc.text(400, 800, `________________`)
    // save pdf as lotnumber
    doc.save(`${this.state.lotNumber}.pdf`)
  }

  render() {
    return (
      <>
      <button className="closeForm" onClick={this.handleClose} type="primary">x</button>
      <div className="coa-form">
        <form onSubmit={this.onSubmit}>
        <h2>COA Fill-Out Form</h2>
        <label> Date Approved:
          <input className="coa-input" type="text" name="dateApproved" placeholder="mm/dd/yyyy" value={this.state.dateApproved} onChange={this.handleInputChange}></input>
        </label>
        <br></br>
        <label> Product Name:
          <input className="coa-input" type="text" name="productName" placeholder="e.g., Mini Choco..." value={this.state.productName} onChange={this.handleInputChange}></input>
        </label>
        <br></br>
        <label> LOT#:
          <input className="coa-input" type="text" name="lotNumber" placeholder="A2101A" value={this.state.lotNumber} onChange={this.handleInputChange}></input>
        </label>
        <br></br>
        <label> Micro:
          <input className="coa-input" type="text" name="micro" placeholder="PASS / FAIL" value={this.state.micro} onChange={this.handleInputChange}></input>
        </label>
        <br></br>
        <label> Chem:
          <input className="coa-input" type="text" name="chem" placeholder="PASS / FAIL" value={this.state.chem} onChange={this.handleInputChange}></input>
        </label>
        <br></br>
        <button onClick={this.generatePDF} type="primary">submit</button>
        </form>
      </div>
      </>
    )
  }
}

export default Form;