import React, { useState} from "react";
import {Table, Space, Input} from "antd";

const TableComponent = () => {
    const [searchText, setSearchText] = useState("");
    const dataArrays=[
        {
            key: '1',
            MARKET: 'BTC/USDT',
            MINIMUM_ORDER_SIZE: "0.00005",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '2',
            MARKET: 'BTC/INR',
            MINIMUM_ORDER_SIZE: "0.00005",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '3',
            MARKET: 'ETH/USDT',
            MINIMUM_ORDER_SIZE: "0.001",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '4',
            MARKET: 'ETH/INR',
            MINIMUM_ORDER_SIZE: "0.001",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '5',
            MARKET: 'LTC/USDT',
            MINIMUM_ORDER_SIZE: "0.01",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '6',
            MARKET: 'USDT/INR',
            MINIMUM_ORDER_SIZE: "1.5",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '7',
            MARKET: 'DOGE/INR',
            MINIMUM_ORDER_SIZE: "10",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '8',
            MARKET: 'DOGE/USDT',
            MINIMUM_ORDER_SIZE: "10",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '9',
            MARKET: 'SOL/INR',
            MINIMUM_ORDER_SIZE: "0.015",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '10',
            MARKET: 'SOL/USDT',
            MINIMUM_ORDER_SIZE: "0.015",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '11',
            MARKET: 'ADA/INR',
            MINIMUM_ORDER_SIZE: "1",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '12',
            MARKET: 'ADA/USDT',
            MINIMUM_ORDER_SIZE: "1",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '13',
            MARKET: 'USDT/INR',
            MINIMUM_ORDER_SIZE: "1.5",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '14',
            MARKET: 'ADA/BTC',
            MINIMUM_ORDER_SIZE: "10",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        },
        {
            key: '15',
            MARKET: 'LTC/BTC',
            MINIMUM_ORDER_SIZE: "0.01",
            MAKER_FEE: '0.125%',
            TAKER_FEE: '0.125%',
            STATUS: 'Enabled',
        }];
    const [row,setRow]=useState(dataArrays);

    const handleSearchFun = async (searchText) => {
        const filteredData = row.filter((value) => {
           return value.MARKET.toLowerCase().includes(searchText.toLowerCase());
         })
        setRow(filteredData);
    };
    const columns = [
        {
            title: "MARKET",
            dataIndex: "MARKET",
            maxWidth: 120,
        },
        {
            title: "MINIMUM ORDER SIZE",
            dataIndex: "MINIMUM_ORDER_SIZE",
            maxWidth: 120,
        },
        {
            title: "MAKER FEE",
            dataIndex: "MAKER_FEE",
            maxWidth: 120,
        },
        {
            title: "TAKER FEE",
            dataIndex: "TAKER_FEE",
            maxWidth: 120,
        },
        {
            title: "STATUS",
            dataIndex: "STATUS",
            maxWidth: 120,
        }
    ];

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        if (e.target.value === "") {
            clearAll();
        }
    };

    const clearAll = () => {
        setRow(dataArrays);
    };

    return (
        <>
        <Space style={{marginBottom: 36, marginTop : 50}}>
            <Input
            placeholder="Search Your State"
            onChange={handleSearch}
            type="text"
            style={{height: "35px"}}
            value={searchText}
            />
            <button onClick={() => handleSearchFun(searchText)} className="btn btn-raised btn-success">
             Search   
            </button>
            <button onClick={clearAll} className="btn btn-raised btn-info">
             Clear  
            </button>
            
        </Space>
       <Table 
        columns={columns}
       
        dataSource={row}
        pagination={false}
        bordered
       
       /> 
       
       </>
    );

  };

export default TableComponent;

