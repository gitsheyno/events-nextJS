import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { useRouter } from "next/router";
import { getAllEvents } from "@/helpers/api-utils";

const EventsPage = ({ allEvents }) => {
  const router = useRouter();
  const handlerDate = (month, year) => {
    router.push(`/events/${year}/${month}/abc`);
  };

  return (
    <div>
      <EventSearch handlerDate={handlerDate} />
      <EventList items={allEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const data = await getAllEvents();

  return {
    props: {
      allEvents: data,
    },
  };
}
export default EventsPage;
