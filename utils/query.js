// import 'yahoo-finance'
// yahooFinance.historical({
//   symbol: 'AAPL',
//   from: '2012-01-01',
//   to: '2012-12-31',
//   period: 'd',  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
// }, function (err, quotes) {
//   //...
// });

// // This replaces the deprecated snapshot() API
// yahooFinance.quote({
//   symbol: 'AAPL',
//   modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
// }, function (err, quotes) {
//   // ...
// });
import {Component} from 'react'

class Query extends Component {
    constructor(props){
        super(props)
        this.state = {
                data: ''
        }
    }
    // yahooFinance = require('yahoo-finance');
    render() {
        return (
            <main className="container-fluid position-absolute h-100 bg-light">
              <div className="row position-absolute w-100 h-100">

                <section className="flex-row flex-wrap px-5 col-md-7 d-flex align-items-center align-content-center border-right border-gray"></section>

                <section className="flex-wrap px-0 bg-white col-md-5 position-relative d-flex h-100 align-items-start align-content-between"></section>

              </div>
            </main>
        );
    }

}

export default Query;