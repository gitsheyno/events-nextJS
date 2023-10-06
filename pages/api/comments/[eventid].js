export default function helper(req, res) {
  const eventID = req.query.eventid;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (!email.includes * "@" || !name || !text) {
      res.status(401).json({ message: "invalid" });
      return;
    }
    const id = new Date().toISOString();

    const newComment = {
      id,
      name,
      email,
      text,
    };
    res.status(201).json({ message: "comment added", comment: newComment });
  }

  if (req.method === "GET") {
    const dummy = [
      { id: "c1", name: "shayan", text: "text-1", comment: "comment-1" },
      { id: "c2", name: "shayan", text: "text-2", comment: "comment-2" },
      { id: "c3", name: "shayan", text: "text-3", comment: "comment-3" },
    ];

    res.status(201).json({ data: dummy });
  }
}
