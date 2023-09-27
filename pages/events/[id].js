import { getEventById, getAllEvents } from "../../helpers/api-utils";
import EventSummary from "@/components/events/event-detail/event-summary";
import EventContent from "@/components/events/event-detail/event-content";
import EventLogistics from "@/components/events/event-detail/event-logistics";
const SelectedEventPage = ({ fetchedEventsById }) => {
  const { title, description, location, image, date } = fetchedEventsById;

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
export async function getStaticProps(context) {
  const eventID = context.params.id;

  const event = await getEventById(eventID);

  return {
    props: {
      fetchedEventsById: event,
    },
  };
}
export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((path) => ({ params: { id: path.id } }));

  return {
    paths: paths,
    fallback: false,
  };
}
export default SelectedEventPage;
