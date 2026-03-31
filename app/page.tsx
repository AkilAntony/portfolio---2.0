import Loader from "@/components/common/Loader/Loader";
import PortfolioMain from "@/components/porfolio/PortfolioMain";
import { Suspense } from "react";

export default function Portfolio() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col justify-center items-center min-h-screen">
          <Loader />
        </div>
      }
    >
      <PortfolioMain />
    </Suspense>
  );
}
