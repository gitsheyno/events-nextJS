import Link from "next/link";

const events = [
  { id: "e1", title: "event-a" },
  { id: "e2", title: "event-b" },
  { id: "e3", title: "event-c" },
  { id: "e4", title: "event-d" },
];
const EventsPage = () => {
  return (
    <div>
      <h1>events page</h1>
      <ul>
        {events.map((events) => (
          <Link key={events.id} href={`/events/${events.id}`}>
            {events.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default EventsPage;
