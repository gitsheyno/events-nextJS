import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-utils";
import Head from "next/head";
const EventsPage = ({ allEvents }) => {
  const router = useRouter();
  const handlerDate = (month, year) => {
    router.push(`/events/${year}/${month}/abc`);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="find a lot of great events that allow you evol ve"
        />
      </Head>
      <div>
        <EventSearch handlerDate={handlerDate} />
        <EventList items={allEvents} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = await getAllEvents();

  return {
    props: {
      allEvents: data,
    },
    revalidate: 60,
  };
}
export default EventsPage;
