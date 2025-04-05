 'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsData } from '@/lib/newsSlice';

const NewsSection = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 bg-white rounded-xl shadow mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Top Crypto News</h2>
      <ul className="space-y-3">
        {articles.map((article, index) => (
          <li key={index} className="border-b pb-2">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {article.title}
            </a>
            <p className="text-sm text-gray-500">{article.source_id} | {new Date(article.pubDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;
