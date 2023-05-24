import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import formatNumber from "../../components/Common/currencyFormat";
import { formatDate } from "../../components/Common/convertToSlug";
import { Badge } from "react-bootstrap";
export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 60,
    renderCell: (params) => {
      return <div className="cellWithId">{params.row.id}</div>;
    },
  },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.avatar ||
              "https://cdn.houseviet.vn/images/icons/user-avatar.png"
            }
            alt="Avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "fullName",
    headerName: "Họ và tên",
    width: 200,
  },
  // {
  //   field: "address",
  //   headerName: "Địa chỉ",
  //   width: 200,
  // },
  {
    field: "phoneNumber",
    headerName: "Số điện thoại",
    width: 200,
  },

  {
    field: "isAdmin",
    headerName: "Admin",
    width: 120,
    renderCell: (params) => {
      return (
        <div className="cellWithRole">
          {params.row.roles[0].id === 2 ? (
            <CheckCircleIcon className="iconCheck" />
          ) : (
            <HighlightOffIcon className="iconTimes" />
          )}
        </div>
      );
    },
  },
];

//Places column

export const realEstate = [
  {
    field: "id",
    headerName: "ID",
    width: 60,
    renderCell: (params) => {
      return <div className="cellWithId">{params.row.id}</div>;
    },
  },
  {
    field: "name",
    headerName: "Tên bất động sản",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImgPlace"
            src={
              params.row.imageModelList[0] && params.row.imageModelList[0].image
            }
            alt="imaged"
          />
          {params.row.nameEstate}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 350,
    renderCell: (params) => {
      return <div className="cellWithAddressPlace">{params.row.address}</div>;
    },
  },
  {
    field: "category",
    headerName: "Thể loại",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithCategoryPlace">
          {params.row.businessTypeModel.typeName}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Giá tiền",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithCategoryPlace">
          {formatNumber(params.row.price)}
        </div>
      );
    },
  },
  {
    field: "userModel",
    headerName: "Người đăng",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithCategoryPlace">
          {params.row.userModel.username}
        </div>
      );
    },
  },

  {
    field: "createdAt",
    headerName: "Ngày tạo",
    width: 100,
    renderCell: (params) => {
      return <div className="cellWithCreateAt">{params.row.createdAt}</div>;
    },
  },
];

export const auctionApproval = [
  {
    field: "id",
    headerName: "ID",
    width: 60,
    renderCell: (params) => {
      return <div className="cellWithId">{params.row.id}</div>;
    },
  },
  {
    field: "name",
    headerName: "Tên bất động sản đấu giá",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImgPlace"
            src={
              params.row.imageModelList[0] && params.row.imageModelList[0].image
            }
            alt="imaged"
          />
          {params.row.nameRealEstate}
        </div>
      );
    },
  },
  {
    field: "startingPrice",
    headerName: "Giá khởi điểm",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithCreateAt">
          {params.row.startingPrice.toLocaleString()} VNĐ
        </div>
      );
    },
  },

  {
    field: "userModel",
    headerName: "Người đăng",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="imgAvatar"
            src={
              params?.row?.userModel?.avatar ||
              "https://cdn.houseviet.vn/images/icons/user-avatar.png"
            }
            alt="Avatar"
          />
          {params?.row?.userModel?.username}
        </div>
      );
    },
  },
  {
    field: "auctionStartDate",
    headerName: "Ngày bắt đầu",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithCategoryPlace">
          {formatDate(params.row.auctionStartDate)}
        </div>
      );
    },
  },
  {
    field: "auctionEndDate",
    headerName: "Ngày kết thúc",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithCategoryPlace">
          {formatDate(params.row.auctionEndDate)}
        </div>
      );
    },
  },
];

export const registerAuctionApproval = [
  {
    field: "id",
    headerName: "ID",
    width: 60,
    renderCell: (params) => {
      return <div className="cellWithId">{params.row.id}</div>;
    },
  },
  {
    field: "imageModelList",
    headerName: "Bất động sản đấu giá",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImgPlace"
            src={
              params.row.auctionModel.imageModelList[0] &&
              params.row.auctionModel.imageModelList[0].image
            }
            alt="imaged"
          />
          {params.row.auctionModel.nameRealEstate}
        </div>
      );
    },
  },
  {
    field: "auctionStartDate",
    headerName: "Ngày bắt đầu đấu giá",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithCategoryPlace">
          {formatDate(params?.row?.auctionModel?.auctionStartDate)}
        </div>
      );
    },
  },

  {
    field: "auctionEndDate",
    headerName: "Ngày kết thúc đấu giá",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithCategoryPlace">
          {formatDate(params.row.auctionModel.auctionEndDate)}
        </div>
      );
    },
  },

  {
    field: "userModel",
    headerName: "Người đăng kí",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="imgAvatar"
            src={
              params?.row?.userModel?.avatar ||
              "https://cdn.houseviet.vn/images/icons/user-avatar.png"
            }
            alt="Avatar"
          />
          {params?.row?.userModel?.username}
        </div>
      );
    },
  },
  {
    field: "payFees",
    headerName: "Trạng thái",
    width: 200,
    renderCell: (params) => {
      return (
        <div>
          {params.row.payFees ? (
            <Badge
              bg="success"
              text="light"
              style={{ padding: "5px", fontSize: "13px" }}
            >
              Đã phê duyệt
            </Badge>
          ) : (
            <Badge
              bg="warning"
              text="dark"
              style={{ padding: "5px", fontSize: "13px" }}
            >
              Chưa phê duyệt
            </Badge>
          )}
        </div>
      );
    },
  },
];
