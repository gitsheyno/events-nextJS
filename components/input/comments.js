import CommentList from "./comment-list";
import NewComment from "./new-comment.js";
import classes from "./comments.module.css";
import { useState, useEffect } from "react";
function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [dummyData, setDummyData] = useState([]);
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  useEffect(() => {
    console.log("button toggeled");
    fetch("/api/comments/" + eventId)
      .then((res) => res.json())
      .then((data) => setDummyData(data.data));
  }, [showComments]);

  function addCommentHandler(commentData) {
    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message, data.comment));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList data={dummyData} />}
    </section>
  );
}

export default Comments;
