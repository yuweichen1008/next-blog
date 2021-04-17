import Layout from "../components/Layout/Layout";
import TickerList from "../components/TickerList";
import { useState, useEffect } from 'react'
import axios from 'axios';

const Stock = () => {
  // const { id } = "binance-bitcoin"
  const [query, setQuery] = useState("ASX:SFW")
  const [stockData, setStockData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  
  // Get Sidebar Ticker
  
  // Fetch Stock useEffect get Stock list
  useEffect(() => {
    const fetchData = async() => {
      const result = await axios('http://localhost:5000/stocks')
      setStockData(result.data)
    }
    fetchData()
  }, [])
    
  return (
      <Layout>
          <div className="flex w-full h-full bg-gray-600 flex-row-2">
              <div className="w-2/5 space-y-3">
                  <TickerList data={stockData}/>
              </div>
              <div className="flex bg-gray-100 border border-blue-500 t-40 l-80">
                  <div className="flex-wrap border border-red-500 flex-col-2 flex-row-2">
                      <div className="flex w-40 bg-gray-300">
                        <input
                          type="text"
                          value={query}
                          onChange={event => setQuery(event.target.value)}
                        />
                        <button onClick={() => setQuery(query)} className="px-3 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700">
                          Search
                        </button>
                      </div>
                  </div>
                  <div>
                      {(!isLoading)? <p>Graph</p> : <div>Loading....</div>}
                  </div>
              </div> 
          </div>
          
          <div id="root"></div>
      </Layout>
  );
}

export default Stock;