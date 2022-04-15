import React, { useEffect, useState } from "react";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

export const IPFS = () => {
  const [fileUrl, updateFileUrl] = useState(``);
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      console.log(added.cid);
      console.log(added.path);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  return (
    <div className="App">
      <h1>IPFS Example</h1>
      <input type="file" onChange={onChange} />
      {fileUrl && <img src={fileUrl} width="600px" />}
    </div>
  );
};