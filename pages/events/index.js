import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { useRouter } from "next/router";
const EventsPage = () => {
  const router = useRouter();
  const handlerDate = (month, year) => {
    console.log(router);

    router.push(`/events/${year}/${month}/abc`);
  };
  const allEvents = getAllEvents();
  return (
    <div>
      <EventSearch handlerDate={handlerDate} />
      <EventList items={allEvents} />
    </div>
  );
};
export default EventsPage;
