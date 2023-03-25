import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/comments";
  useEffect(() => {
    //get api imlementation
    fetch(url)
      .then((res) =>
        res.json().then((json) => {
          console.log("josn", json);
          setData(json);
        })
      )
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  //post and put api implement

  const PostPutmethod = () => {
    const data = {
      name: "Sejal",
      email: "abc@gmail.com",
      designation: "developer",
      mobile: "54141658522"
    };
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
      // .then((res) => res.json())
      .then((res) => {
        console.log("res status", res.status);
        if (res.status === 200 || res.status === 201) {
          alert("Successfully");

          return res.json();
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="App">
      <h1>React Api Methods</h1>
      {data.map((item) => {
        return (
          <div>
            {item.email}
            <br />
            <br />
            <span>{item.name}</span>
          </div>
        );
      })}
      <button onClick={PostPutmethod}>Submit</button>
    </div>
  );
}
