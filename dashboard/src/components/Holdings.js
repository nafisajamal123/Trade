import React, { useState, useEffect } from "react"; //Import React and hooks
import axios, { all } from "axios"; //Import axios for API calls
import { VerticalGraph } from "./VerticalGraph"; //Import graph component

// import { holdings } from "../data/data"; //Old local data import

const Holdings = () => { //Create Holdings component

  const [allHoldings, setAllHoldings] = useState([]); //State to store holdings data

  useEffect(() => { //Runs when component loads

    axios.get("https://tradebackend-01ra.onrender.com/allHoldings") //Fetch holdings from backend
      .then((res) => { //When data comes successfully

        setAllHoldings(res.data); //Store API data in state

      });

  }, []); //Empty array means run only once

  const labels = allHoldings.map((subArray) => subArray["name"]); //Get stock names for graph labels

  const data = { //Create Graph data object

    labels, //Add labels into graph

    datasets: [ //Graph dataset array

      {
        label: "Stock Price", //Graph heading

        data: allHoldings.map((stock) => stock.price), //Take only stock prices

        backgroundColor: "rgba(255, 99, 132, 0.5)", //Graph bar color

      },

    ],

  };

  return ( //JSX UI starts

    <>

      <h3 className="title">Holdings ({allHoldings.length})</h3> {/*Show total holdings count*/}

      <div className="order-table"> {/*Table container*/}

        <table> {/*Start table*/}

          <tr> {/*Table heading row*/}

            <th>Instrument</th> {/*Stock name heading*/}
            <th>Qty.</th> {/*Quantity heading*/}
            <th>Avg. cost</th> {/*Average cost heading*/}
            <th>LTP</th> {/*Last traded price heading*/}
            <th>Cur. val</th> {/*Current value heading*/}
            <th>P&L</th> {/*Profit and loss heading*/}
            <th>Net chg.</th> {/*Net change heading*/}
            <th>Day chg.</th> {/*Day change heading*/}

          </tr>

          {allHoldings.map((stock, index) => { //Loop through each stock

            const curValue = stock.price * stock.qty; //Calculate current value

            const isProfit = curValue - stock.avg * stock.qty >= 0.0; //Check if stock is in profit

            const profClass = isProfit ? "profit" : "loss"; //// If profit -> use "profit" class..Else -> use "loss" class

            const dayClass = stock.isLoss ? "loss" : "profit";  // Check if day change is loss or profit

            return ( //Return table row

              <tr key={index}> {/* key helps React identify rows */}

                <td>{stock.name}</td> {/*Show stock name*/}

                <td>{stock.qty}</td> {/*Show quantity*/}

                <td>{stock.avg.toFixed(2)}</td> {/*Show avg price with 2 decimals*/}

                <td>{stock.price.toFixed(2)}</td> {/*Show current price*/}

                <td>{curValue.toFixed(2)}</td> {/*Show current value*/}

                <td className={profClass}> {/*Apply profit/loss color*/}
                  {(curValue - stock.avg * stock.qty).toFixed(2)} {/*Show profit/loss amount*/}
                </td>

                <td className={profClass}>{stock.net}</td> {/*Show net change*/}

                <td className={dayClass}>{stock.day}</td> {/*Show day change*/}

              </tr>

            );

          })}

        </table>

      </div>

      <div className="row"> {/*Summary row*/}

        <div className="col"> {/*First summary box*/}

          <h5>
            29,875.<span>55</span>{" "}
          </h5>

          <p>Total investment</p> {/*Investment text*/}

        </div>

        <div className="col"> {/*Second summary box*/}

          <h5>
            31,428.<span>95</span>{" "}
          </h5>

          <p>Current value</p> {/*Current value text*/}

        </div>

        <div className="col"> {/*Third summary box*/}

          <h5>1,553.40 (+5.20%)</h5> {/*Profit summary*/}

          <p>P&L</p> {/*P&L text*/}

        </div>

      </div>

      <VerticalGraph data={data} /> {/*Send graph data to VerticalGraph component*/}

    </>

  );

};

export default Holdings; //Export component so other files can use it
