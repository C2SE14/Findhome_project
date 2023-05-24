import React, { useEffect, useState } from "react";
import { auctionApproval } from "../../utils/datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import "../RealEstatedSaleList/PlaceList.scss";
import { useDispatch, useSelector } from "react-redux";
import "sweetalert2/src/sweetalert2.scss";
import {
  deleteAuctionApproval,
  getAllAuction,
} from "../../../store/actions/auction";
import AuctionApprovalModal from "./AuctionApprovalModal";
import Swal from "sweetalert2";

const AuctionApproval = () => {
  const { auctions } = useSelector((state) => state.auctionReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAuction());
  }, [dispatch]);

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleApproveClick = (id) => {
    setSelectedItemId(id);
    setShowModal(true);
  };

  const unapprovedAuctions = auctions.filter(
    (item) => item.browseByAdmin === false
  );

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
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
              dispatch(deleteAuctionApproval(params.row.id));
              Swal.fire("Xoá thành công!", "", "success");
              setTimeout(() => {
                window.location.reload();
              }, 0);
            }
          });
        };

        const itemId = params.row.id;
        return (
          <div className="cellAction">
            <div className="deleteButton" onClick={handleDelete}>
              Xoá
            </div>
            <div
              className="detailButton"
              onClick={() => handleApproveClick(itemId)}
            >
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
            Danh sách phê duyệt đăng tin đấu giá
          </div>
          <DataGrid
            className="datagrid"
            rows={unapprovedAuctions}
            columns={auctionApproval.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row.id}
          />
        </div>
      </div>
      {showModal && (
        <AuctionApprovalModal
          showModal={showModal}
          handleClose={() => setShowModal(false)}
          selectedItemId={selectedItemId}
          title="Phê duyệt tin đăng đấu giá"
        />
      )}
    </>
  );
};

export default AuctionApproval;
