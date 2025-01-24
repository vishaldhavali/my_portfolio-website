import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "resume",
      "Vishal_Dhavali_Resume.pdf"
    );
    const fileExists = fs.existsSync(filePath);
    const stats = fileExists ? fs.statSync(filePath) : null;

    return NextResponse.json({
      exists: fileExists,
      size: stats?.size || 0,
      path: filePath,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
