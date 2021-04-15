import Layout from "../components/Layout/Layout";
import Chart from "../utils/chart"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import coinGecko from "../apis/coinGecko";

const handleClick = (e) =>  {
    console.log('Free pizza!');
    console.log(e);
}

const stock = () => {
    const router = useRouter()
    const { id } = "binance-bitcoin"
    const [stockData, setStockData] = useState([[1,2,3],[1,2,3],[1,2,3],[1,2,3]])
    const [isLoading, setIsLoading] = useState(false);
     
    const formatData = (data) => {
        return data.map((el) => {
          return {
            t: el[0],
            y: el[1].toFixed(2),
          };
        });
    };
    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
          const [day, week, year, detail] = await Promise.all([
            coinGecko.get(`/coins/01coin/market_chart/`, {
              params: {
                vs_currency: "usd",
                days: "1",
              },
            }),
            coinGecko.get(`/coins/01coin/market_chart/`, {
              params: {
                vs_currency: "usd",
                days: "7",
              },
            }),
            coinGecko.get(`/coins/01coin/market_chart/`, {
              params: {
                vs_currency: "usd",
                days: "365",
              },
            }),
            coinGecko.get("/coins/markets/", {
              params: {
                vs_currency: "usd",
                ids: id,
              },
            }),
          ]);
          console.log(day);
    
          setStockData({
            day: formatData(day.data.prices),
            week: formatData(week.data.prices),
            year: formatData(year.data.prices),
            detail: detail.data[0],
          });
          setIsLoading(false);
        };
    
        fetchData();
      }, []);
    
    return (
        <Layout>
            <div className="flex w-auto min-h-screen bg-gray-600 flex-row-2">
                <div className="flex w-32 h-screen bg-gray-200">Sidebar</div>
                <div className="flex flex-1 bg-gray-100 t-40 l-64">
                    <div className="container flex-col w-auto">
                        <button onClick={handleClick} className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700">
                            Search
                        </button>
                        <div className="flex flex-wrap flex-1">
                            {(!isLoading)? <Chart data={stockData}/> : <div>Loading....</div>}
                            {/* <Line data={data} /> */}
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="root"></div>
        </Layout>
    );
}

export default stock;