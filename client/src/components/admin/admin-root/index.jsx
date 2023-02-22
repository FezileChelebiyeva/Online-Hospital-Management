import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../../layouts/admin/header";

const AdminRoot = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default AdminRoot;
