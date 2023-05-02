"use client";
import { useState } from "react";

function HomePage() {

const [file, setFile] = useState(null);

const handleFileChange = (e) => {
  setFile(e.target.files[0]);
}

  return (
    <div>
      <form onSubmit={async (e) => {
        e.preventDefault();
        if(!file) return;
try {
  const form = new FormData();
        form.set('file', file);

        //sending file to server 
        const res = await fetch('/api/upload',{
          method: 'POST',
          body: form
        }) 

if(res.ok){
  console.log("file uploaded");
}

        const data = await res.json();
        console.log(data);
} catch (error) {
  console.log(error);
}
        
      }}>
        <label>
          Upload File:
        </label>
        <input type="file" 
        onChange={handleFileChange} />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default HomePage;