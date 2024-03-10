"use client";

import React, { useEffect, useState } from "react";

interface Post {
  postId: number;
  imageType: string;
  nickname: string;
  title: string;
  created: string;
  category: string;
  content: string;
  voteCount: number;
  option1: string;
  option2: string;
  option1Count: number;
  option2Count: number;
  comments: string[];
  commentCount: number;
  tags: string[];
  selectedOption: string;
}

export default function Home() {
  const [data, setData] = useState<Post[]>([]);

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
