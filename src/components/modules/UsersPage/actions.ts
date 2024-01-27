import { FetchData } from "../../../config/Fetch";
import {
  Departments,
  attendanceActionOpt,
} from "../../../constants/userPageContants/staticOptions";
import { shiftopt } from "../../../constants/userPageContants/staticOptions";
export const CreateNewUser: any = (props: any, callback: any) => {
  return (dispatch: any) => {
    FetchData({
      url: "http://localhost:3006/api/createUser",
      method: "POST",
      data: props,
    })
      .then((response: any) => {
        callback(response.data);
      })
      .catch((error: any) => {});
  };
};
export const GetAllUserData: any = (callback: any) => {
  return (dispatch: any) => {
    FetchData({
      url: "http://localhost:3006/api/getAllUserDetails",
      method: "GET",
      data: null,
    })
      .then((response: any) => {
        response.data?.map((userData: any, index: number) => {
          userData.department = Departments.find(
            (item: any) => item.value === userData.department
          );
          userData.shift = shiftopt.find(
            (item: any) => item.value === userData.shift
          );
          userData.attendanceAction = attendanceActionOpt.find(
            (item: any) => item.value === userData.attendanceAction
          );

          // console.log(Departments,userData,"26.......")
        });
        callback(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};
export const DeleteUser: any = (props: any, callback: any) => {
  console.log("22...props", props);
  const url = `http://localhost:3006/api/deleteUserById/${props.id}`;
  return (dispatch: any) => {
    FetchData({
      url: url,
      method: "DELETE",
      data: null,
    })
      .then((response: any) => {
        console.log(response, "46...rep");
        callback(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};
export const updateUser: any = (props: any, callback: any) => {
  return (dispatch: any) => {
    FetchData({
      url: `http://localhost:3006/api/updateUserById/${props._id}`,
      method: "PATCH",
      data: props,
    })
      .then((response: any) => {
        callback(response.data);
      })
      .catch((error: any) => {});
  };
};
