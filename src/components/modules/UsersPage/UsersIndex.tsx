import React from "react";
import CreateUser from "./CreateUser";
import CommonCard from "../../../common/CommonCard";
import UserPage from "./UserPage";

export default function UserIndex() {
  
  return (
    <CommonCard title={'User management'}>
      <CreateUser />
      <UserPage/>
    </CommonCard>
  );
}