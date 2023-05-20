import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../RealEstatedSaleList/RealEstateSaleList";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import "sweetalert2/src/sweetalert2.scss";
import { getRealEstateByBusinessTypeId } from "../../../store/actions/postRealEstate";
import { realEstate } from "../../utils/datatablesource";
import ReadInfo from "../ReadInfo";

const RealEstateRentList = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [dataEdit, setDateEdit] = useState([]);
  const { dataByType, loading } = useSelector((state) => state.postRealEstate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRealEstateByBusinessTypeId(2));
  }, [dispatch]);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="deleteButton">Xoá</div>
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
      {loading ? (
        <Loading />
      ) : (
        <div className="datatable">
          <div className="datatableTitle">Danh sách nhà đất cho thuê</div>
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
      )}
      {isEdit && (
        <ReadInfo
          dataEdit={dataEdit}
          setIsEdit={setIsEdit}
          onHide={() => setIsEdit(false)}
          rent
        />
      )}
    </div>
  );
};

export default RealEstateRentList;
