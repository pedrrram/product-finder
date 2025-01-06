"use client";
import ProductFinder from "@/app/ProductFinder";
import { store } from "@/store/store";
import { Provider } from "react-redux";

const Home = () => {

  return (
    <Provider store={store}>
      <ProductFinder />
    </Provider>
  );
};

export default Home;
