// screens/JobsScreen.js
import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { fetchJobs } from '../services/api';
import JobCard from '../components/JobCard';

export default function JobsScreen({ navigation }) {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [endReached, setEndReached] = useState(false);

  const loadJobs = async () => {
    if (loading || endReached) return;
    setLoading(true);
    try {
      const res = await fetchJobs(page);
      const data = res.data.data || [];  
      if (!data.length) setEndReached(true);
      setJobs(prev => [...prev, ...data]);
      setPage(p => p + 1);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadJobs(); }, []);

  return (
    <FlatList
      data={jobs}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) =>
        <JobCard
          job={item}
          onPress={() => navigation.navigate('JobDetails', { job: item })}
        />}
      onEndReached={loadJobs}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading && <ActivityIndicator />}
    />
  );
}
