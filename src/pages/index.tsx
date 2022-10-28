import Sidebar from "@components/Sidebar";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex px-20 pt-6 pb-12">
      <Sidebar />
    </div>
  );
};

export default Home;
