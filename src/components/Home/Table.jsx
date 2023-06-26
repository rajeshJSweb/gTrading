import React from 'react';
import { Link } from 'react-router-dom';
import {GrBitcoin} from 'react-icons/gr'

const Table = ({currencies}) => {

    return (
        <div className='mx-20 my-20 text-center'>
            <h1 className='text-center text-4xl font-semibold text-purple-600 py-7'>Top cryptocurrencies</h1>
            <table className="table-auto w-full">
            <thead className=''>
                <tr>
                    <th></th>
                    <th>Currency</th>
                    <th>Price's</th>
                    <th>24h Change</th>
                    <th>Market Cap</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    currencies.slice(0,5).map(currency => <tr
                        key={currency.id}
                        currency={currency}
                        className='border-y-[1px] text-center h-[60px] border-gray-300 py-3'
                    >
                         <td className='text-center w-1/12'>{currency.id}</td>
                        <td className='py-2 w-2/12 text-center'>{currency.currency}</td>
                        <td className='py-2 w-2/12 text-center'>${currency.price.toLocaleString()}</td>
                        <td className={`py-2 w-2/12 text-center ${currency.change<= 0? "text-red-500" : "text-green-500"}`}>{currency.change}%</td>
                        <td className='py-2 w-3/12 text-center'>${currency.marketValue.toLocaleString()}</td>
                        <button className='text-center text-white font-semibold mt-3 bg-purple-800 w-auto py-1 px-2 rounded-lg'>Buy Now</button>
                    </tr>)
                }
            </tbody>
            </table>
           <div className='mt-5 hover:transition-transform hover:ease-in-out duration-100 hover:transform hover:translate-y-[-10%]'>
                <Link className='hover:bg-slate-400 rounded-lg py-2 px-2 border-[1px] border-slate-400'>See more cryptocurrencies prices</Link>
           </div>
        </div>
    );
};

export default Table;