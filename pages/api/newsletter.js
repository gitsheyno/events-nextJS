export default function helper(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    console.log(email);
    res.status(201).json({ message: "succesfull" });
  }
}
