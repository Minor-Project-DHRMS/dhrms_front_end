import React from "react";

import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

const UploadFile = async (file) => {
  const docPhoto = await client.add(file);
  console.log(docPhoto.cid);
  console.log(docPhoto.path);

  return docPhoto.path;
};

export default UploadFile;
