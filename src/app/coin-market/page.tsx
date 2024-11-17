"use client";

import { useState, useEffect } from "react";
import React from 'react'


export default function CoinMarket() {
  const API_KEY = "6ad9413622ee3a636c6be42fda3fdb68";
  const [data, setData] = useState<any>(null);


  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);


  return (
    <>


    <div className="bg-slate-950 text-white xs:h-full xs:pb-20 xs:pt-14">

    <h1 className="text-blue-600 font-sans font-bold flex justify-center xs:text-lg sm:text-2xl sm:mt-10 md:text-3xl lg:text-4xl lg:mt-14">Some Updated Crypto Rates</h1>


      <table className="bg-slate-800 xs:w-72 xs:ml-4 xs:mt-20 sm:ml-40 md:ml-48 sm:w-80 md:w-96 lg:w-10/12 lg:ml-20 lg:mt-24">
        <thead> 

          <tr>

            <th className=" text-white xs:px-5 xs:py-3  ">Currency</th>
            <th className=" text-white xs:px-5 xs:py-3  ">Rate</th>
          
          </tr>

        </thead>

        <tbody> 

          <tr>
                <td className="border px-6 py-3">BTC</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.BTC}</td>
          </tr>

          <tr>
                <td className="border px-6 py-3">BNB</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.BNB}</td>
          </tr>

          <tr>
                <td className="border px-6 py-3">ETH</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.ETH}</td>

          </tr>

          <tr>
                <td className="border px-6 py-3">SOL</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.SOL}</td>
          </tr>

          <tr>
                <td className="border px-6 py-3">USDT</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.USDT}</td>

          </tr>

          <tr>
                <td className="border px-6 py-3">XRP</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.XRP}</td>

          </tr>

          <tr>
                <td className="border px-6 py-3">LTC</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.LTC}</td>

          </tr>

          <tr>
                <td className="border px-6 py-3">XMR</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.XMR}</td>

          </tr>

          <tr>
                <td className="border px-6 py-3">BTS</td>
                <td className="border px-6 py-3 text-right">{data?.rates?.BTS}</td>

          </tr>

      </tbody>

      </table>
    </div>
    </>

  );
}

