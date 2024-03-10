"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://52.78.127.145:8081/api/main/posts"
        );
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {data.map((item, idx) => (
        <div key={idx}>
          <p>{item.title}</p>
        </div>
      ))}
    </main>
  );
}
