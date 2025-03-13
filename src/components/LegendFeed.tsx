import React, { useRef, useState, useEffect } from 'react';
import {
  FlatList,
  Dimensions,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { LegendItem } from './LegendItem';
import { useLegendStore } from '../state/legendStore';

const { height } = Dimensions.get('window');

export const LegendFeed = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const { legends, loadMore, refreshLegends, loading, error } =
    useLegendStore();

  useEffect(() => {
    refreshLegends(5);
  }, []);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / height);
    setActiveIndex(index);

    if (index >= legends.length - 2 && !loading) {
      loadMore();
    }
  };

  return (
    <View className="flex-1">
      {error && (
        <View className="absolute left-0 right-0 top-14 z-10 items-center">
          <Text className="font-bold text-red-500">{error}</Text>
          <TouchableOpacity
            onPress={() => refreshLegends(10)}
            className="mt-2 rounded bg-red-500 px-3 py-2"
          >
            <Text className="text-white">Retry</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        className="h-full w-full bg-slate-400"
        ref={flatListRef}
        data={legends}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <LegendItem legend={item} isVisible={index === activeIndex} />
        )}
        pagingEnabled
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate="fast"
        initialNumToRender={3}
        windowSize={5}
        maxToRenderPerBatch={3}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="large" color="#fff" className="mt-4" />
          ) : null
        }
      />
    </View>
  );
};
