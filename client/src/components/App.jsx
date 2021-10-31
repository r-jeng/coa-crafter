import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Months from './Months.jsx';
import Feed from './Feed.jsx';
import GenerateCOAButton from './GenerateCOAButton.jsx';
import Form from './Form.jsx';
import Pending from './Pending.jsx';

import Test from './Test.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coas: [],
      view: false,
      clickedMonth: [],
      currentViewMonth: [],
      coaAddedMonth: [],
    };
    this.getCOAs = this.getCOAs.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleNewCOA = this.handleNewCOA.bind(this);
    this.handleCOADelete = this.handleCOADelete.bind(this);
    this.handleCloseFormView = this.handleCloseFormView.bind(this);
    this.handleMonthData = this.handleMonthData.bind(this);
  }

  // get all data here
  componentDidMount() {
    this.getCOAs();
  }

  getCOAs() {
    axios.get('/coas')
      .then(res => {
        this.setState({
          coas: res.data,
        });
      });
  }

  handleForm() {
    this.setState({
      view: true,
    })
  }

  handleCOADelete(coaIDToDelete, coaDeleteMonth) {
    console.log('coa to delete ID in App', coaIDToDelete, coaDeleteMonth);
    const coaIDToDeleteObj = { data: { _id: coaIDToDelete } };
    axios.delete('/coas', coaIDToDeleteObj)
      .then((res) => {
        // call this.getCOAs to render updated database
        console.log('delete COA requested from App + res', res);
        this.handleMonthData(coaDeleteMonth.slice(0, 2));
        // console.log('delete COA requested from App', res.data)
      })
      .catch((err) => {
        console.log('delete COA requested from App failed')
      })
  }

  handleCloseFormView() {
    this.setState({
      view: false,
    })
  }

  handleMonthData(monthNumber) {
    const monthName = [];
    if (monthNumber === '01') {
      monthName.push('January');
    } else if (monthNumber === '02') {
      monthName.push('February')
    } else if (monthNumber === '03') {
      monthName.push('March')
    } else if (monthNumber === '04') {
      monthName.push('April')
    } else if (monthNumber === '05') {
      monthName.push('May')
    } else if (monthNumber === '06') {
      monthName.push('June')
    } else if (monthNumber === '07') {
      monthName.push('July')
    } else if (monthNumber === '08') {
      monthName.push('August')
    } else if (monthNumber === '09') {
      monthName.push('September')
    } else if (monthNumber === '10') {
      monthName.push('October')
    } else if (monthNumber === '11') {
      monthName.push('November')
    } else if (monthNumber === '12') {
      monthName.push('December')
    }
    // clear current month state, sets currentViewMonth to month name
    this.setState({
      clickedMonth: [],
      currentViewMonth: monthName,
    });

    axios.get('/coas')
      .then(res => {
        const filtered = res.data.filter((coa) => coa.dateApproved.slice(0, 2) === monthNumber)
        console.log('checking filtered after generating new COA', filtered)
        this.setState({
          clickedMonth: filtered,
        });
      });
    // set state to be data for get request
  }

  handleNewCOA(newCOA) {
    console.log('incoming COA data in App', newCOA);
    axios.post('/coas', newCOA)
      .then((res) => {
        this.getCOAs();
        console.log('added new COA in App')
      })
      .catch((err) => {
        console.log('unable to add COA in App')
      })
    // handle close form, display message
    const newCOAMonthNumber = newCOA.dateApproved.slice(0,2);
    this.setState({
      view: false,
      coaAddedMonth: newCOAMonthNumber,
    })
    this.handleMonthData(newCOAMonthNumber);
  }
  // generate COA button displays input form for COA info
  // input form: submit will add info & pdf url to database
  //
  // click coa will download pdf
  // user can clicked downloaded file to view in browser
  //
  // future additions:
  // coa pdf preview
  // submitting form displays on pdf preview form
  // user to verify pdf preview
  // save pdf button will update database with pdf url
  // pass to months
  // each month will render COAs for that month
  // month passed from months passed to COA feed

  render() {
    return (
      <>
        <Header />
        <div className="searchBarAndGenerateContainer">
        <Search />
          <GenerateCOAButton handleClick={this.handleForm} />
        </div>

        <Months handleMonthClick={this.handleMonthData} coaAddedMonth={this.state.coaAddedMonth}/>
        {/* <Test /> */}
        {this.state.view === true &&
          <Form handleNewCOA={this.handleNewCOA} handleCloseFormView={this.handleCloseFormView} />
        }
        <Feed coas={this.state.coas} handleCOADeleteData={this.handleCOADelete} clickedMonth={this.state.clickedMonth} currentViewMonth={this.state.currentViewMonth} />
        {/* <Pending /> */}
      </>
    )
  }
}

export default App;