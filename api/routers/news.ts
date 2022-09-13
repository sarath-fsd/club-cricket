
import express, { Request, Response } from "express";
import _ from "lodash";
import { News, validateNews as validate } from "../models/news";
const router = express.Router();

router.get("/", async (req, res) => {
  const news = await News.find()
    .select("-__v")
    .sort("title");
  res.send(news);
});

router.post("/", async (req: Request, res: Response) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const {title} = req.body;
  let news = await News.findOne({ title });
  if (news) return res.status(400).send(`News with the ${title} already registered.`);

  news = new News(_.pick(req.body, ["title", "description", "image", "url"]));
  await news.save();
  
  res    
    .send(_.pick(news, ["_id", "title", "description", "image", "url"]));
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const {title, description, image, url} = req.body;
  const news = await News.findByIdAndUpdate(
    req.params.id,
    { title, description, image, url },
    {
      new: true
    }
  );

  if (!news)
    return res.status(404).send("The news with the given ID was not found.");

  res.send(news);
});

router.delete("/:id", async (req, res) => {
  const news = await News.findByIdAndRemove(req.params.id);

  if (!news)
    return res.status(404).send("The news with the given ID was not found.");

  res.send(news);
});

router.get("/:id", async (req, res) => {
  const news = await News.findById(req.params.id).select("-__v");

  if (!news)
    return res.status(404).send("The news with the given ID was not found.");

  res.send(news);
});


export default router;