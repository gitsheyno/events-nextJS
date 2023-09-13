import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data";

import EventSummary from "@/components/events/event-detail/event-summary";
import EventContent from "@/components/events/event-detail/event-content";
import EventLogistics from "@/components/events/event-detail/event-logistics";
import LogisticsItem from "@/components/events/event-detail/logistics-item";
const SelectedEventPage = () => {
  const router = useRouter();
  // const {
  //   query: { id: content },
  // } = router;
  const { query } = router;

  const fetchedEventsById = getEventById(query.id);
  if (!fetchedEventsById) {
    return <p>Error</p>;
  }

  const { title, description, location, image, date } = fetchedEventsById;

  console.log(fetchedEventsById.image);
  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};

export default SelectedEventPage;
