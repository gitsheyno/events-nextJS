import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";

const FilteredEvent = () => {
  const router = useRouter();

  // console.log("ok");

  const filteredData = router.query.slugs;
  if (!filteredData) {
    return <p className="center">..Loading...</p>;
  }

  const [year, month] = filteredData;

  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>please adjust valied url</p>;
  }

  const getFilteredEvent = getFilteredEvents({ year: +year, month: +month });

  if (!getFilteredEvent || getFilteredEvent.length === 0) {
    return <p>no event found for choseen date</p>;
  }

  return (
    <div>
      <EventList items={getFilteredEvent} />
    </div>
  );
};

export default FilteredEvent;
