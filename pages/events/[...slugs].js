import { useRouter } from "next/router";

import { getFilteredEvents } from "@/helpers/api-utils";
import EventList from "@/components/events/event-list";

const FilteredEvent = ({ events, hasError }) => {
  console.log(events);
  if (hasError) {
    return <p className="center">invalid,filter</p>;
  }

  const getFilteredEvent = events;

  if (!getFilteredEvent || getFilteredEvent.length === 0) {
    return <p>no event found for choseen date</p>;
  }

  return (
    <div>
      <EventList items={getFilteredEvent} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slugs;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
export default FilteredEvent;
