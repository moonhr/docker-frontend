"use client";

import { useEffect, useState } from "react";
import Form from "./components/form";

export default function Home() {
  const [data, setData] = useState<{ message: string } | null>(null); // 상태 초기화

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/data");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const result = await res.json();
        setData(result); // 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Form />
      <div>
        {/* 상태가 null이 아니면 데이터를 출력 */}
        {data ? <h1>{data.message}</h1> : <p>Loading...</p>}
      </div>
    </>
  );
}
