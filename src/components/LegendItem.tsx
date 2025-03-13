import React, { useRef } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import Video, {
  VideoRef,
  OnLoadData,
  ViewType,
  ReactVideoProps,
} from 'react-native-video';
import { LegendDto } from '../dto/LegendDto';

interface LegendItemProps {
  legend: LegendDto;
  isVisible: boolean;
}

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

export const LegendItem: React.FC<LegendItemProps> = ({
  legend,
  isVisible,
}) => {
  const videoRef = useRef<VideoRef>(null);

  React.useEffect(() => {
    if (isVisible) {
      videoRef.current?.seek(0);
    }
  }, [isVisible]);

  return (
    <View className=" w-full bg-purple-600" style={{ height: windowHeight }}>
      <Video
        key={legend.videoUrl}
        ref={videoRef}
        source={{
          uri: legend.videoUrl,
        }}
        style={{ position: 'relative', height: '100%', width: '100%' }}
        resizeMode="cover"
        repeat
        // viewType={ViewType.TEXTURE}
        paused={true}
        // bufferConfig={{
        //   minBufferMs: 15000,
        //   maxBufferMs: 50000,
        //   bufferForPlaybackMs: 2500,
        //   bufferForPlaybackAfterRebufferMs: 5000,
        // }}
        onLoad={(data: OnLoadData) => {
          {
            console.log(legend.videoUrl);
            console.log(isVisible);
          }

          console.log('✅ Video loaded:', data.duration);
        }}
        onError={(error) => console.error('Video error:', error)}
      />

      <View className="absolute bottom-20 left-4 z-10">
        <Text className="text-xl font-bold text-white">{legend.title}</Text>
        <Text className="text-white opacity-70">{legend.description}</Text>
        <View className="mt-2 flex-row items-center">
          <Image
            source={{ uri: legend.profile.avatar }}
            className="mr-2 h-10 w-10 rounded-full"
          />
          <Text
            className="font-semibold text-white
          "
          >
            {legend.profile.name}
          </Text>
        </View>
      </View>
    </View>
  );
};
function styled(
  Video: React.ForwardRefExoticComponent<
    ReactVideoProps & React.RefAttributes<VideoRef>
  >
) {
  throw new Error('Function not implemented.');
}
