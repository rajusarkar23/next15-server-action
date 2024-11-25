'use client'
import React, { useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState("")
  console.log("TITLE");
  console.log(title);
  
  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()

      try {
        const res = await fetch("/api/todos", {
          method: "POST",
          headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({title})
        })
        const response = await res.json()
        console.log(response);
        
      } catch (error) {
        console.log(error);
        
      }
  }

  return (
    <main className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <form onSubmit={handleAdd} className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          name="title"
          placeholder="Add a todo"
          className="flex-grow border rounded p-2 text-black"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </main>
  );
}
