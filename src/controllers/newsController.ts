import { Request, Response } from "express";
import { fetchArticles, fetchArticlesByTitle, fetchArticlesByAuthor } from "../services/newsService";

export const getArticles = async (req: Request, res: Response) => {
    const { query, count } = req.query;
    const articles = await fetchArticles(query as string, parseInt(count as string));
    res.json(articles);
};

export const getArticlesByTitle = async (req: Request, res: Response) => {
    const { title } = req.params;
    const article = await fetchArticlesByTitle(title);
    if (article) {
        res.json(article);
    } else {
        res.status(404).json({ message: 'Article not found!'});
    }
};

export const getArticlesByAuthor = async (req: Request, res: Response) => {
    const { author, count } = req.query;
    const articles = await fetchArticlesByAuthor(author as string, parseInt(count as string));
    res.json(articles);
}