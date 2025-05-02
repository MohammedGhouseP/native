// screens/BookmarksScreen.js
import React, { useContext } from 'react';
import { FlatList, Text } from 'react-native';
import { BookmarkContext } from '../context/BookmarkContext';
import JobCard from '../components/JobCard';

export default function BookmarksScreen({ navigation }) {
  const { bookmarks } = useContext(BookmarkContext);
  if (!bookmarks.length) return <Text style={{padding:16}}>No bookmarks yet.</Text>;

  return (
    <FlatList
      data={bookmarks}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) =>
        <JobCard
          job={item}
          onPress={() => navigation.navigate('JobDetails', { job: item })}
        />}
    />
  );
}
