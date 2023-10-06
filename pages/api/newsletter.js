export default function helper(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email.includes("@") || !email) {
      res.status(401).json({ message: "bad input" });
      return;
    }
    console.log(email);
    res.status(201).json({ message: "succesfull" });
  }
}
