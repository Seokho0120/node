import express from "express";

const router = express.Router();

// 상위에서 /posts 상위경로를 설정해놨기 때문에 여기에서는 /posts이후에 들어올 url을 설정하면됨
// 예를들면 /all로 하면 /posts/all 이 되겠지
router.get("/", (req, res) => {
  res.status(201).send("GET: /posts");
});

router.post("/", (req, res) => {
  res.status(201).send("POST: /posts");
});

router.put("/:id", (req, res) => {
  res.status(201).send("PUT: /posts/:id");
});

router.delete("/:id", (req, res) => {
  res.status(201).send("DELETE: /posts/:id");
});

export default router;
