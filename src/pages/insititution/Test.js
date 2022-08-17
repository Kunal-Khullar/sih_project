import React, { useState } from "react";
function GoogleStorageFileUploader() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hi')
    let formData = new FormData();
    formData.append("file", file.data);
    const response = await fetch("http://localhost:5000/upload-file-to-cloud-storage", {
      method: "POST",
      body: formData,
    });
    const responseWithBody = await response.json();
    setUrl(responseWithBody.link);
    // console.log(responseWithBody.link)
    console.log(url)
  };
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(img);
    console.log(img)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" onChange={handleFileChange}></input>
      <button type="submit">Submit</button>
    </form>
  );
}
export default GoogleStorageFileUploader;