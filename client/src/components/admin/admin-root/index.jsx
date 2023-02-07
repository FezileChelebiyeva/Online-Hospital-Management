import React from "react";
import { Outlet } from "react-router-dom";
import AdminFooter from "../../../layouts/admin/footer";
import AdminHeader from "../../../layouts/admin/header";

const AdminRoot = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </div>
  );
};

export default AdminRoot;
