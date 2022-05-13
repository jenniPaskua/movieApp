import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Text, Image } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const loadAssets = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });
export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    // ...이곳에 미리 담고 싶은 걸 다 담아라 preload
    // 어플이 디스플레이 되기 전에 가져와야할 정보를 가져오는 파트
    // 탭 아이콘 가져와서 미리 로딩되어야 할 경우
    const fonts = loadFonts([Ionicons.font]);
    const images = loadAssets([
      require("./me.jpeg"),
      "https://reactnative.dev/img/oss_logo.png",
    ]);
    await Promise.all([...fonts, ...images]);
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>We are done loading</Text>;
}
