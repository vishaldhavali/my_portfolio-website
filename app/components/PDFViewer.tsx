"use client";
import { useState } from "react";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

  return (
    <div className="flex flex-col gap-4 w-full h-full bg-[#1A0033]/80 rounded-lg p-4">
      {/* Zoom Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleZoomOut}
          className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-white rounded-lg flex items-center gap-2"
          disabled={scale <= 0.5}
        >
          <FaSearchMinus />
          <span>Zoom Out</span>
        </button>
        <span className="text-white">{Math.round(scale * 100)}%</span>
        <button
          onClick={handleZoomIn}
          className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-white rounded-lg flex items-center gap-2"
          disabled={scale >= 2}
        >
          <FaSearchPlus />
          <span>Zoom In</span>
        </button>
      </div>

      {/* PDF Viewer */}
      <div
        className="relative flex-1 overflow-hidden rounded-lg"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <iframe
          src={`${pdfUrl}#view=FitH`}
          className="w-full h-[calc(100vh-200px)]"
          style={{
            border: "none",
            background: "transparent",
          }}
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default PDFViewer;
