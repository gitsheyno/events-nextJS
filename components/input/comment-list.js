import classes from "./comment-list.module.css";

function CommentList({ data }) {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {data.map((item) => (
        <li key={item.id}>
          <p>{item.comment}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
      {/* <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li> */}
    </ul>
  );
}

export default CommentList;
