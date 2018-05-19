import React, { Component } from 'react';

import Patients from './components/Patients';
import Layout from './components/Layout';

// import { LocaleProvider, DatePicker, message } from 'antd';
// // The default locale is en-US, but we can change it to other language
// import frFR from 'antd/lib/locale-provider/es_ES';
// import moment from 'moment';
// import 'moment/locale/es';
import './styles/css/main.css';
// import logo from './logo.svg';
// import './App.css';

// moment.locale('es');
//
// const Calendar = ({ changeDate, date }) => (
//   <LocaleProvider locale={frFR}>
//     <div style={{ width: 400, margin: '100px auto' }}>
//       <DatePicker onChange={changeDate} />
//       <div style={{ marginTop: 20 }}>Date: {date && date.toString()}</div>
//     </div>
//   </LocaleProvider>
// );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(date) {
  //   message.info('Selected Date: ' + (date ? date.toString() : ''));
  //   this.setState({ date });
  // }

  render() {
    const { date } = this.state;
    return (
      <Layout />
    );
  }
}

export default App;
