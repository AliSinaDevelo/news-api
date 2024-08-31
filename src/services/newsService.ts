import axios from "axios";
import { getCache, setCache } from "../utils/cache";

const API_KEY = process.env.GNEWS_API_KEY;
const BASE_URL = `https://gnews.io/api/v4`;

// use axios to communicate with the GNEWS API
export const fetchArticles = async (query: string, count: number) => {
    const cacheKey = `${query}-${count}`;
    const cachedData = getCache(cacheKey);
    if (cachedData) {
        return cachedData;
    }

    const response = await axios.get(`${BASE_URL}/search`, {
        params: {
            q: query,
            max: count,
            token: API_KEY
        }
    });

    const articles = response.data.articles;
    setCache(cacheKey, articles);
    return articles;
};

export const fetchArticlesByTitle = async (title: string) => {
    const articles = await fetchArticles(title, 10);
    return articles.find((article: any) => article.title === title);
};

export const fetchArticlesByAuthor = async (author: string, count: number) => {
    const articles = await fetchArticles(author, count);
    return articles.filter((article: any) => article.source.name === author);
};