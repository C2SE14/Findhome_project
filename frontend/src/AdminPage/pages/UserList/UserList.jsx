import React, { useEffect } from "react";
import { userColumns } from "../../utils/datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import "./UserList.scss";
import "sweetalert2/src/sweetalert2.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../store/actions/user";
import LoadingComp from "../../../components/Loading/Loading";

const UserList = () => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 10,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="deleteButton">Xoá</div>
          </div>
        );
      },
    },
  ];
  if (!users) {
    return null;
  }

  return (
    <>
      {!users ? (
        <LoadingComp />
      ) : (
        <div className="userList">
          <div className="datatable">
            <div className="datatableTitle">Danh sách người dùng</div>
            <DataGrid
              className="datagrid"
              rows={users || []}
              columns={userColumns.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
              getRowId={(row) => row.id}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
