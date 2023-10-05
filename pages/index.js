import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "@/components/events/event-list";
import Head from "next/head";
import NewsletterRegistration from "@/components/input/newsletter-registration";
const HomePage = ({ events }) => {
  console.log(events);
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="find a lot of great events that allow you evol ve"
        />
      </Head>
      <NewsletterRegistration />
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
    revalidate: 1500,
  };
}
export default HomePage;
