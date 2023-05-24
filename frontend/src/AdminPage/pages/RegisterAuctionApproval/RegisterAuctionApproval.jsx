import React, { useEffect } from "react";
import { registerAuctionApproval } from "../../utils/datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import "../RealEstatedSaleList/PlaceList.scss";
import { useDispatch, useSelector } from "react-redux";
import "sweetalert2/src/sweetalert2.scss";
import { getAllRegisterAuction } from "../../../store/actions/auction";
import Swal from "sweetalert2";
import {
  approvalRegisterAuction,
  deleteRegisterAuction,
} from "../../../store/actions/user";

const RegisterAuctionApproval = () => {
  const dispatch = useDispatch();
  const { allRegisterAuction } = useSelector((state) => state.auctionReducer);
  useEffect(() => {
    dispatch(getAllRegisterAuction());
  }, [dispatch]);

  console.log(allRegisterAuction);

  const unapprovedRegisterAuction = allRegisterAuction.filter(
    (item) => item.payFees === false
  );
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        const handleApproval = () => {
          Swal.fire({
            title: "Xác nhận phê duyệt",
            text: "Bạn có chắc chắn muốn phê duyệt đăng ký này?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Phê duyệt",
            cancelButtonText: "Hủy",
          }).then((result) => {
            if (result.isConfirmed) {
              // Cập nhật trạng thái "payFees" thành true
              const updatedRegisterAuction = {
                id: params.row.id,
                ...params.row,
                payFees: true,
                userModel: {
                  id: params.row.userModel.id,
                },
                auctionModel: {
                  id: params.row.auctionModel.id,
                },
              };
              dispatch(approvalRegisterAuction(updatedRegisterAuction));
              Swal.fire("Phê duyệt thành công!", "", "success");
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            }
          });
        };

        const handleDelete = () => {
          Swal.fire({
            title: "Xác nhận xoá",
            text: "Bạn có chắc chắn muốn xoá đăng ký này?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Xoá",
            cancelButtonText: "Hủy",
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteRegisterAuction(params.row.id));
              Swal.fire("Xoá thành công!", "", "success");
              setTimeout(() => {
                window.location.reload();
              }, 0);
            }
          });
        };

        return (
          <div className="cellAction">
            <div className="deleteButton" onClick={handleDelete}>
              Xoá
            </div>
            <div className="detailButton" onClick={handleApproval}>
              Phê duyệt
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="placeList">
        <div className="datatable">
          <div className="datatableTitle">
            Danh sách phê duyệt đăng ký đấu giá
          </div>
          <DataGrid
            className="datagrid"
            rows={unapprovedRegisterAuction}
            columns={registerAuctionApproval.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row.id}
          />
        </div>
      </div>
    </>
  );
};

export default RegisterAuctionApproval;
