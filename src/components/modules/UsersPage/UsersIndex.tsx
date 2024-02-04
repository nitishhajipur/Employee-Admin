import React from "react";
import CreateUser from "./CreateUser";
import CommonCard from "../../../common/CommonCard";
import UserPage from "./UserPage";
import ConfirmationAlert from "../../../common/ConfirmAlert";

export default function UserIndex() {
  
  return (
    <CommonCard title={'User management'}>
      <UserPage/>
    </CommonCard>
  );
}