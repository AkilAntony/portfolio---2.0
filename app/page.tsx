import PortfolioMain from "@/components/porfolio/PortfolioMain";
import { Suspense } from "react";

export default function Portfolio() {
 

  return (
    <Suspense fallback = {<div>Loading..</div>}>
      <PortfolioMain />
    </Suspense>
  );
}
