import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Animated,
} from 'react-native';
import StoryBrain from './StoryBrain';

// Tương đương widget Visibility trong Flutter
const Visibility = ({ visible, children }) => (visible ? children : null);

export default function App() {
  // Giữ một đối tượng StoryBrain duy nhất trong suốt vòng đời của app
  const storyBrain = useRef(new StoryBrain()).current;
  // Biến này chỉ để ép giao diện vẽ lại sau khi storyBrain đổi trạng thái (setState trong Flutter)
  const [step, setStep] = useState(0);

  const fade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    fade.setValue(0);
    Animated.timing(fade, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [step, fade]);

  const choose = (choiceNumber) => {
    storyBrain.nextStory(choiceNumber);
    setStep((s) => s + 1);
  };

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safe}>
          {/* Expanded: phần nội dung câu chuyện */}
          <View style={styles.storyArea}>
            <Animated.Text style={[styles.storyText, { opacity: fade }]}>
              {storyBrain.getStory()}
            </Animated.Text>
          </View>

          {/* Lựa chọn 1 - nút đỏ */}
          <View style={styles.choiceArea}>
            <Pressable
              onPress={() => choose(1)}
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: '#E53935' },
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.buttonText}>{storyBrain.getChoice1()}</Text>
            </Pressable>
          </View>

          {/* Lựa chọn 2 - nút xanh, ẩn khi đến đoạn kết */}
          <View style={styles.choiceArea}>
            <Visibility visible={storyBrain.buttonShouldBeVisible()}>
              <Pressable
                onPress={() => choose(2)}
                style={({ pressed }) => [
                  styles.button,
                  { backgroundColor: '#1E88E5' },
                  pressed && styles.pressed,
                ]}
              >
                <Text style={styles.buttonText}>{storyBrain.getChoice2()}</Text>
              </Pressable>
            </Visibility>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  safe: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
  },
  storyArea: {
    flex: 6,
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  storyText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '500',
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowRadius: 6,
  },
  choiceArea: {
    flex: 1,
    marginTop: 12,
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
