import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "CI/CD is working!" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
