// screens/JobDetailsScreen.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { BookmarkContext } from '../context/BookmarkContext';

export default function JobDetailsScreen({ route }) {
  const { job } = route.params;
  const { bookmarks, toggleBookmark } = useContext(BookmarkContext);
  const isBookmarked = bookmarks.some(j => j.id === job.id);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24 }}>{job.title}</Text>
      <Text>{job.location}</Text>
      <Text>{job.salary}</Text>
      <Text>{job.phone}</Text>
      {/* any other details */}
      <Button
        title={isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
        onPress={() => toggleBookmark(job)}
      />
    </View>
  );
}
