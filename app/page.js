import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Hobbit Talk</h1>
        <p> app/page.js of Hobbit Talk project</p>
      </div>
      <Link href="/dashboard" color="blue.400" _hover={{ color: "blue.500" }}>
        Dashboard
      </Link>
    </main>
  );
}
