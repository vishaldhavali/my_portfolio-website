import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "resume",
      "Vishal_Dhavali_Resume.pdf"
    );
    if (!fs.existsSync(filePath)) {
      return new NextResponse("PDF not found", { status: 404 });
    }
    const fileBuffer = fs.readFileSync(filePath);
    const stats = fs.statSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": stats.size.toString(),
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-store",
        "Content-Disposition": "inline; filename=Vishal_Dhavali_Resume.pdf",
      },
    });
  } catch (error) {
    console.error("PDF serving error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
