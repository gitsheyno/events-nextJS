import { useRouter } from "next/router";

const FilteredEvent = () => {
  const router = useRouter();
  console.log(router.query);
  return <h2>Filtered Event</h2>;
};

export default FilteredEvent;
