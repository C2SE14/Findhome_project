import React, { useEffect } from "react";
import { realEstate } from "../../utils/datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import "../RealEstatedSaleList/PlaceList.scss";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import "sweetalert2/src/sweetalert2.scss";
import { getRealEstateByBusinessTypeId } from "../../../store/actions/postRealEstate";

const AuctionApproval = () => {
  const { dataByType, loading } = useSelector((state) => state.postRealEstate);
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
        return (
          <div className="cellAction">
            <div className="deleteButton">Xoá</div>
            <div className="detailButton">Chi tiết</div>
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
      )}
    </div>
  );
};

export default AuctionApproval;
