import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  console.log(
    "fetching frame data for...",
    `${process.env.PROD_URL || "http://localhost:3000"}/api`
  );
  const frameTags = await getFrameMetadata(
    `${process.env.PROD_URL || "http://localhost:3000"}/api`
  );
  console.log("frame data:", frameTags);
  return {
    other: frameTags,
  };
}

export default function Home() {
  return <main>{process.env.PROD_URL}</main>;
}
