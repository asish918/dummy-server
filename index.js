
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/news', (req, res) => {
  const dummyNewsData = {
    "status": "ok",
    "totalResults": 5,
    "articles": [
      {
        "source": {
          "id": null,
          "name": "Dummy News Source 1"
        },
        "author": "Dummy Author 1",
        "title": "Dummy News Title 1",
        "description": "This is a dummy news article description.",
        "url": "https://www.example.com/news1",
        "urlToImage": "https://www.example.com/image1.jpg",
        "publishedAt": "2023-12-27T12:00:00Z",
        "content": "This is the content of the dummy news article."
      },
      {
        "source": {
          "id": null,
          "name": "Dummy News Source 2"
        },
        "author": "Dummy Author 2",
        "title": "Dummy News Title 2",
        "description": "This is a dummy news article description.",
        "url": "https://www.example.com/news2",
        "urlToImage": "https://www.example.com/image2.jpg",
        "publishedAt": "2023-12-27T11:45:00Z",
        "content": "This is the content of the dummy news article."
      },
      // Add more dummy articles as needed
    ]
  };

  res.json(dummyNewsData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
