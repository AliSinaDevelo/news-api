import { Router } from "express";
import { getArticles, getArticlesByAuthor, getArticlesByTitle } from "./controllers/newsController";

const router = Router();

router.get('/articles', getArticles);
router.get('/articles/title/:title', getArticlesByTitle);
router.get('/articles/author', getArticlesByAuthor);

export default router;