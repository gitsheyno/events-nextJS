import Link from "next/link";
import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";

const EventsPage = () => {
  const allEvents = getAllEvents();
  return (
    <div>
      <EventList items={allEvents} />
    </div>
  );
};
export default EventsPage;
