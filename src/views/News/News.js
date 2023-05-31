import * as React from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useScrollToTop } from "@react-navigation/native";

import Container from "../../components/Container/Container";
import NewsPost from "../../components/HomeComponents/NewsPost";
import TopNewsBar from "../../components/HomeComponents/TopNewsBar";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const News = () => {
  const scrollViewRef = React.useRef(null);
  const [refreshing, setRefreshing] = React.useState(false);

  useScrollToTop(scrollViewRef);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <Container insets={{ top: true }}>
      <TopNewsBar />
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <NewsPost />
      </ScrollView>
    </Container>
  );
};
export default News;
