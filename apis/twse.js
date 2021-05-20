import axios from "axios";

export default axios.create({
  baseURL: "https://mis.twse.com.tw/stock/api/getStockInfo.jsp",
//   https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_2330.tw&json=1&delay=0
//      otc_o00.tw&json=1&delay=0
});

// Name	Description
// tlong	epoch毫秒數
// f	揭示賣量(配合「a」，以_分隔資料)
// ex	上市別(上市:tse，上櫃:otc，空白:已下市或下櫃)
// g	揭示買量(配合「b」，以_分隔資料)
// d	最近交易日期(YYYYMMDD)
// b	揭示買價(從高到低，以_分隔資料)
// c	股票代號
// a	揭示賣價(從低到高，以_分隔資料)
// n	公司簡稱
// o	開盤
// l	最低
// h	最高
// w	跌停價
// v	累積成交量
// u	漲停價
// t	最近成交時刻(HH:MM:SS)
// tv	當盤成交量
// nf	公司全名
// z	當盤成交價
// y	昨收