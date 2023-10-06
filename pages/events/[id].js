import { getEventById, getAllEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/events/event-detail/event-summary";
import EventContent from "../../components/events/event-detail/event-content";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import Head from "next/head";
import Comments from "../../components/input/comments";
const SelectedEventPage = ({ fetchedEventsById }) => {
  const { title, description, location, image, date, id } = fetchedEventsById;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="find a lot of great events that allow you evol ve"
        />
      </Head>
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
      <Comments eventId={id} />
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
    revalidate: 30,
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
