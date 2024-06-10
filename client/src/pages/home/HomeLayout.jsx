import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
}
