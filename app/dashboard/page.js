import Link from "next/link";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <div>
        <Box m={2} color="white" bgColor="blue" p={2} borderRadius={5}>
          <h1>Dashboard Page</h1>
          <p> app/dashboard/page.js Dashboard</p>
          <Link href="/">Home</Link>
        </Box>
      </div>
    </main>
  );
}
