import { Worker } from "@react-pdf-viewer/core";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

// Initialize PDF.js worker
Worker.workerUrl = pdfjsWorker;

export const pdfViewerConfig = {
  workerUrl: pdfjsWorker,
  defaultScale: 1,
  theme: {
    theme: "dark",
    textLayer: "text-layer-custom",
  },
};
