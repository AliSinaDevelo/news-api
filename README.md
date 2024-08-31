# news-api
A simple Node.js API that interacts with the GNews API to fetch news articles.

## Getting Started

### Prerequisites

- Node.js and npm installed
- GNews API Key
- Express
- TypeScript

### Installation

1. Clone the repository
    ```bash
    git clone github.com/AliSinaDevelo/news-api.git
    cd news-api
    ```
2. Install dependencies
   ```bash
   npm instal
   ```

3. Create a .env file in the root directory and add your API key:
    ```env
    GNEWS_API_KEY=your_gnews_api_key_here
    PORT =
    ```

4. Run
    ```bash
    npm run dev
    ```

### API Endpoints
1. Fetch Articles by Keyword
Endpoint: GET /api/articles
Description: Fetches a list of articles based on a search keyword.
Query Parameters:
query (string): The keyword to search for in articles.
count (number, optional): The number of articles to return. Default is 10.
Example: 
    ```bash
    GET /api/articles?query=technology&count=5
    ```

Response: 
    ```json
    [
        {
            "title": "Example Article Title",
            "description": "Short description of the article",
            "content": "Full content of the article",
            "url": "https://example.com/article",
            "image": "https://example.com/image.jpg",
            "publishedAt": "2023-01-01T00:00:00Z",
            "source": {
            "name": "Source Name",
            "url": "https://source.com"
            }
        }
        ...
    ]
    ```

2. Fetch Article by Title
Endpoint: GET /api/articles/title/:title
Description: Fetches an article with the exact specified title.
URL Parameter:
title (string): The title of the article to fetch.
Example:
    ```bash
    GET /api/articles/title/Example%20Article%20Title
    ```

Response:
    ```json
    {
        "title": "Example Article Title",
        "description": "Short description of the article",
        "content": "Full content of the article",
        "url": "https://example.com/article",
        "image": "https://example.com/image.jpg",
        "publishedAt": "2023-01-01T00:00:00Z",
        "source": {
            "name": "Source Name",
            "url": "https://source.com"
        }
    }
    ```


3. Fetch Articles by Author
Endpoint: GET /api/articles/author
Description: Fetches articles written by a specific author.
Query Parameters:
author (string): The name of the author.
count (number, optional): The number of articles to return. Default is 10.
Example:
    ```bash
    GET /api/articles/author?author=John%20Doe&count=3
    ```

Response:
    ```bash
    [
        {
            "title": "Example Article Title",
            "description": "Short description of the article",
            "content": "Full content of the article",
            "url": "https://example.com/article",
            "image": "https://example.com/image.jpg",
            "publishedAt": "2023-01-01T00:00:00Z",
            "source": {
            "name": "Source Name",
            "url": "https://source.com"
            }
        }
        ...
    ]
    ```

### Technologies Used
- Node.js
- Express
- TypeScript
- Axios
- Node-Cache
- dotenv

## License

This project is licensed under the MIT License. See the LICENSE file for details.