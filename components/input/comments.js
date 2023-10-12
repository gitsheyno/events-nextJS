import CommentList from "./comment-list";
import NewComment from "./new-comment.js";
import classes from "./comments.module.css";
import { useState, useEffect, useContext } from "react";
import NotificationContext from "../../store/notification-context";
function Comments(props) {
  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);
  const [dummyData, setDummyData] = useState([]);

  const ctx = useContext(NotificationContext);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  useEffect(() => {
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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        res.json().then((data) => {
          throw new Error("something went wrong");
        });
      })
      .then((data) =>
        ctx.showNotification({
          title: "Success",
          message: "Successfully registered for newsletter",
          status: "success",
        })
      )
      .catch((error) => {
        ctx.showNotification({
          title: "Failed",
          message: "Failed registered for newsletter",
          status: "Failed",
        });
      });
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
