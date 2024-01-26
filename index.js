document.addEventListener("DOMContentLoaded", function () {
  const newsList = document.getElementById("news-list");

  // Mock data for news
  const newsData = [
    {
      title: "Breaking News 1",
      content: "This is the content of breaking news 1.",
    },
    {
      title: "Important Update",
      content: "Here is the latest update that you need to know.",
    },
    { title: "Local Event", content: "A local event is happening near you." },
  ];

  // Render news items
  newsData.forEach(function (news) {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `
          <h2>${news.title}</h2>
          <p>${news.content}</p>
      `;
    newsList.appendChild(newsItem);
  });
});
