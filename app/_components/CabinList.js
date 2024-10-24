import { unstable_noStore as no_store } from "next/cache";

import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

async function CabinList({ filter }) {
  // no_store();
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let filteredCabins;

  if (filter === "small") {
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity < 3);
  } else if (filter === "medium") {
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 3 && cabin.maxCapacity < 8
    );
  } else if (filter === "large") {
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  } else filteredCabins = cabins;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
