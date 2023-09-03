import Link from "next/link";

const events = [
  { id: 1, title: "event-a" },
  { id: 2, title: "event-b" },
  { id: 3, title: "event-c" },
  { id: 4, title: "event-d" },
];
const EventsPage = () => {
  return (
    <div>
      <h1>events page</h1>
      <ul>
        {events.map((events) => (
          <Link key={events.id} href={`/events/event-${events.id}`}>
            {events.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default EventsPage;
