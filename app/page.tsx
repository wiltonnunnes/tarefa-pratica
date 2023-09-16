"use client"

import React from 'react';
import { useState, useEffect } from "react"
import Card from "./components/Card";
import Badge from "./components/Badge";
import { Service } from "./interfaces/interfaces";

export default function Page() {
  const [data, setData] = useState<Service[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/staticdata')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Hello")
        console.error(error);
      })
  }, []);

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="container">
      <h2>{data.length} Serviços</h2>
      <div className="cards">
        {data.map(item => {
          let color;
          switch (item.status) {
            case "up":
              color = "#f44336";
              break;
            case "warning":
              color = "#ffeb3b";
              break;
            case "error":
              color = "#4caf50";
              break;
          }
          return (
            <div className="column" key={item.id}>
              <Card>
                <div className="card-body">
                  <Badge color={color}>{item.status}</Badge>
                  <span className="title" style={{marginTop: '25px'}}>{item.service}</span>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        .container {
          padding: 0 25px;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
        }
        .column {
          width: 25%;
          padding: 0 10px;
        }
        .card-body {
          display: flex;
          flex-direction: column;
          align-items: start;
        }
        .title {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}