import React from "react";

import { Viewer } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Create new plugin instance

export const PDFView = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Viewer
      fileUrl="http://www.africau.edu/images/default/sample.pdf"
      plugins={[defaultLayoutPluginInstance]}
    />
  );
};
