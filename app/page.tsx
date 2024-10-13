"use client";
import {useState, useEffect} from "react"

export default function Home() {
  const [result, setResult] = useState<string | null>(null);
  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setResult(data))
  }, []);
  console.log(result);
  return (
    <main>
      <h1>Welcome to the home page!</h1>
      <p>API call to Python API gave result: {result}</p>
    </main>
  )
}
