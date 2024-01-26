document.addEventListener('DOMContentLoaded', function() {
  const newsList = document.getElementById('news-list');

  // Mock data for news
  const newsData = [
      { title: 'Breaking News 1', content: 'This is the content of breaking news 1.' },
      { title: 'Important Update', content: 'Here is the latest update that you need to know.' },
      { title: 'Local Event', content: 'A local event is happening near you.' }
  ];

  // Render news items
  newsData.forEach(function(news) {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = `
          <h2>${news.title}</h2>
          <p>${news.content}</p>
      `;
      newsList.appendChild(newsItem);
  });
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsItem = ({ title, content }) => {
    return (
        <View style={styles.newsItem}>
            <Text style={styles.title}>{title}</Text>
            <Text>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    newsItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
});

export default NewsItem;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewsItem from './NewsItem';

const NewsPage = () => {
    // Mock data for news
    const newsData = [
        { title: 'Breaking News 1', content: 'This is the content of breaking news 1.' },
        { title: 'Important Update', content: 'Here is the latest update that you need to know.' },
        { title: 'Local Event', content: 'A local event is happening near you.' }
    ];

    return (
        <View style={styles.container}>
            {newsData.map((news, index) => (
                <NewsItem key={index} title={news.title} content={news.content} />
            ))}
        </View>
    );
};

const props = StyleSheet.create({
    container: {
        flex: 1,
    },
});
