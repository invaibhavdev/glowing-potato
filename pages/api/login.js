// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const user = { username: "username", password: "password" };
export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }
  const body = req.body;
  if (body && body.username && body.password) {
    if (body.username === user.username && body.password === user.password) {
      res.status(200).json({ success: true });
    }
  }
  res
    .status(400)
    .json({ success: false, message: "incorrect username or password" });
}
