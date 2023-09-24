import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "@/components/events/event-list";
const HomePage = ({ events }) => {
  console.log(events);
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const data = await getFeaturedEvents();

  return {
    props: {
      events: data,
    },
  };
}
export default HomePage;
