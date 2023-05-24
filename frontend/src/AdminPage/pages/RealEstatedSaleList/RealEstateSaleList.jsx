import React, { useEffect, useState } from "react";
import { realEstate } from "../../utils/datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import "./PlaceList.scss";
import { useDispatch, useSelector } from "react-redux";
import "sweetalert2/src/sweetalert2.scss";
import {
  deleteRealEstateAdmin,
  getRealEstateByBusinessTypeId,
} from "../../../store/actions/postRealEstate";
import ReadInfo from "../ReadInfo";
import Swal from "sweetalert2";

const RealEstatedSaleList = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [dataEdit, setDateEdit] = useState([]);
  const { dataByType } = useSelector((state) => state.postRealEstate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRealEstateByBusinessTypeId(1));
  }, [dispatch]);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        const handleDelete = () => {
          Swal.fire({
            title: "Xác nhận xoá",
            text: "Bạn có chắc chắn muốn xoá bất động sản này?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Xoá",
            cancelButtonText: "Hủy",
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteRealEstateAdmin(params.row.id));
              Swal.fire("Xoá thành công!", "", "success");
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            }
          });
        };
        return (
          <div className="cellAction">
            <div className="deleteButton" onClick={handleDelete}>
              Xoá
            </div>
            <div
              className="detailButton"
              onClick={() => {
                setDateEdit(params.row);
                setIsEdit(true);
              }}
            >
              Chi tiết
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="placeList">
      <div className="datatable">
        <div className="datatableTitle">Danh sách nhà đất bán</div>
        <DataGrid
          className="datagrid"
          rows={dataByType}
          columns={realEstate.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row.id}
        />
      </div>

      {isEdit && (
        <ReadInfo
          dataEdit={dataEdit}
          setIsEdit={setIsEdit}
          onHide={() => setIsEdit(false)}
        />
      )}
    </div>
  );
};

export default RealEstatedSaleList;
