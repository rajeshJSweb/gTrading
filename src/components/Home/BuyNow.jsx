import React, { useState } from 'react';
import {FaCcVisa} from 'react-icons/fa'
import {BiLogoMastercard} from 'react-icons/bi'
import { FaBitcoin, FaEthereum } from 'react-icons/fa';



const BuyNow = () => {
    const [buyValue, setBuyValue] = useState('');
    const [forValue, setForValue] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('BTC');
    const [targetCurrency, setTargetCurrency] = useState('USD')

  const handleBuyInputChange = (event) => {
   const inputValue = event.target.value
    if(/^\d*\.?\d*$/.test(inputValue)){
        setBuyValue(inputValue)
        const convertedValue = convertCurrency(inputValue, selectedCurrency, targetCurrency)
        setForValue(convertedValue.toFixed(2))
    }else{
        setBuyValue('')
        setForValue('')
    }

    const convertedValue = inputValue * convertAmount();
    setForValue(convertedValue.toFixed(2).toLocaleString())
  };

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setSelectedCurrency(selectedCurrency);
    const convertedValue = convertCurrency(buyValue, targetCurrency,selectedCurrency)
    setForValue(convertedValue).toFixed(2)
    
  };

  const handleTargetCurrencyChange=(event)=>{
    const targetCurrency = event.target.value;
    setTargetCurrency(targetCurrency)
    const convertedValue = convertCurrency(buyValue, targetCurrency,selectedCurrency)
    setForValue(convertedValue).toFixed(2)
  }

  const convertCurrency = (amount, fromCurrency, toCurrency)=>{
    let convertAmount;

    if(fromCurrency=== 'BTC' && toCurrency==='USD'){
        convertAmount = amount * 36050;
    }
    else if(fromCurrency === 'BTC' && toCurrency ==='KWT'){
        convertAmount = amount * 0.0028;
    }
    else if(fromCurrency === 'UBTC' && toCurrency ==='KWT'){
        convertAmount = amount * 0.0200;
    }
    else if(fromCurrency === 'ETH' && toCurrency ==='KWT'){
        convertAmount = amount * 0.899;
    }
    else if(fromCurrency === 'USDC' && toCurrency ==='KWT'){
        convertAmount = amount * 5;
    }
    else if(fromCurrency === 'BTC' && toCurrency ==='EUR'){
        convertAmount = amount * 0.39360;
    }
    else if(fromCurrency === 'USDC' && toCurrency ==='EUR'){
        convertAmount = amount * 200.50;
    }
    else if(fromCurrency === 'ETH' && toCurrency ==='EUR'){
        convertAmount = amount * 9523.50;
    }
    else{
        convertAmount =amount;
    }

    return convertAmount;
  }

    return (
        <div className=' bg-slate-100 py-10 flex'>
            <div className='w-4/12 mx-20 py-10 rounded-xl bg-white flex flex-col gap-10 shadow-xl'>
                <form className='flex flex-col items-center gap-14' action="">
                    <div className='w-full flex justify-evenly'>
                        <input 
                        value={buyValue}
                        onChange={handleBuyInputChange}
                        type="text" 
                        placeholder='Buy'  
                        className='p-3 w-8/12 border-b-2 border-slate-300 outline-none text-end font-semibold text-lg'/>
                        <select name="" id=""
                            value={selectedCurrency}
                            onChange={handleCurrencyChange}
                        className='border-b-2 border-slate-300 outline-none'>
                            <option value="BTC"><FaBitcoin className='border-2 border-red-500 bg-orange-600 h-[20px] w-[20px]'></FaBitcoin>BTC</option>
                            <option value="UBTC">UBTC</option>
                            <option value="ETH">ETH</option>
                            <option value="USDC">USDC</option>
                        </select>
                    </div>
                    <div className='w-full flex justify-evenly'>
                        <input type="text" value={forValue.toLocaleString()} placeholder='For' className='p-3 w-8/12 border-b-2 border-slate-300 outline-none text-end font-semibold text-lg' />
                        <select
                        value={targetCurrency} 
                        onChange={handleTargetCurrencyChange}
                        name="" id="" 
                        className='border-b-2 border-slate-300 outline-none'>
                            <FaEthereum/>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="KWT">KWT</option>
                        </select>
                    </div>
                    <div className='w-full px-10'>
                        <button className='w-full bg-purple-600 py-3 rounded-xl text-xl font-semibold text-white'>Buy Now</button>
                    </div>
                </form>
                <div className='flex justify-center gap-10 items-center'>
                    <h1 className='text-xl font-semibold text-slate-500'>We Accept: </h1>
                    <FaCcVisa className='text-4xl'/>
                    <BiLogoMastercard className='text-5xl'/>
                </div>
            </div>
            <div className='flex flex-col justify-evenly'>
                    <h1 className='text-4xl font-semibold text-slate-600'>Buy crypto with a debit or credit card!</h1>
                <div>
                    <h3 className='text-2xl font-semibold text-slate-500'>Quickly purchase top cryptocurrencies</h3>
                    <p className='text-slate-500 text-lg'>Become a crypto owner in minutes using your debit or credit card.</p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-slate-500'>Easily withdraw your money</h3>
                    <p className='text-slate-500 text-lg'>Withdraw your funds to a card or bank account in a few clicks.</p>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;