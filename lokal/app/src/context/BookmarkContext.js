// context/BookmarkContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('BOOKMARKS').then(json => {
      if (json) setBookmarks(JSON.parse(json));
    });
  }, []);

  const toggleBookmark = async job => {
    const exists = bookmarks.find(j => j.id === job.id);
    const updated = exists
      ? bookmarks.filter(j => j.id !== job.id)
      : [job, ...bookmarks];
    setBookmarks(updated);
    await AsyncStorage.setItem('BOOKMARKS', JSON.stringify(updated));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}
