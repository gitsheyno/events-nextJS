import { useRouter } from "next/router";

const SelectedEventPage = () => {
  const router = useRouter();

  const {
    query: { id: content },
  } = router;
  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

export default SelectedEventPage;
