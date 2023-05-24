import React, { useEffect } from "react";
import { userColumns } from "../../utils/datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import "./UserList.scss";
import "sweetalert2/src/sweetalert2.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserByAdmin, getAllUser } from "../../../store/actions/user";
import LoadingComp from "../../../components/Loading/Loading";
import Swal from "sweetalert2";

const UserList = () => {
  const { users } = useSelector((state) => state.user);
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        const handleDelete = () => {
          if (userId === params.row.id || params.row.roles[0].id === 2) {
            Swal.fire({
              title: "Xác nhận xoá",
              text: "Bạn có chắc chắn muốn xoá đăng ký này?",
              icon: "question",
              showCancelButton: true,
              confirmButtonText: "Xoá",
              cancelButtonText: "Hủy",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Bạn không thể xoá admin!", "", "error");
              }
            });
          } else {
            Swal.fire({
              title: "Xác nhận xoá",
              text: "Bạn có chắc chắn muốn xoá đăng ký này?",
              icon: "question",
              showCancelButton: true,
              confirmButtonText: "Xoá",
              cancelButtonText: "Hủy",
            }).then((result) => {
              if (result.isConfirmed) {
                dispatch(deleteUserByAdmin(params.row.id));
                Swal.fire("Xoá thành công!", "", "success");
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
              }
            });
          }
        };
        return (
          <div className="cellAction">
            <div className="deleteButton" onClick={handleDelete}>
              Xoá
            </div>
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
