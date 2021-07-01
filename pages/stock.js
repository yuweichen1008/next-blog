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
          <div className="flex h-screen overflow-y-hidden bg-gray-200 flex-row-2 ">
              <div className="w-1/4 overflow-y-auto border border-green-400 ">
                  {/* Search */}
                  <div className="">
                      <div className="px-2 py-2 g-gray-300 ">
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
                  
                  {/* Ticker list */}
                  <div className="w-full">
                    <TickerList data={stockData}/>
                  </div>
              </div>
              <div className="flex-1 w-full overflow-y-auto bg-gray-100 border border-blue-500 t-40 l-80">
                 
              </div> 
          </div>
          
          <div id="root"></div>
      </Layout>
  );
}

export default Stock;