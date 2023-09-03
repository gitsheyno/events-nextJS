import { useRouter } from "next/router";

const SelectedProjectPage = () => {
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

export default SelectedProjectPage;
