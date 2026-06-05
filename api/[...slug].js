export default function handler(req, res) {
  res.status(200).json({
    message: "slug reached",
    url: req.url,
    method: req.method
  });
}