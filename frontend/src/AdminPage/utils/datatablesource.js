import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import formatNumber from "../../components/Common/currencyFormat";
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
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 200,
  },
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

//

// export const realEstateRent = [
//   {
//     field: "id",
//     headerName: "ID",
//     width: 60,
//     renderCell: (params) => {
//       return <div className="cellWithId">{params.row.id}</div>;
//     },
//   },
//   {
//     field: "name",
//     headerName: "Tên bất động sản",
//     width: 250,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           <img
//             className="cellImgPlace"
//             src={
//               params.row.imageModelList[0] && params.row.imageModelList[0].image
//             }
//             alt="imaged"
//           />
//           {params.row.nameEstate}
//         </div>
//       );
//     },
//   },
//   {
//     field: "address",
//     headerName: "Địa chỉ",
//     width: 350,
//     renderCell: (params) => {
//       return <div className="cellWithAddressPlace">{params.row.address}</div>;
//     },
//   },
//   {
//     field: "category",
//     headerName: "Thể loại",
//     width: 100,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithCategoryPlace">
//           {params.row.businessTypeModel.typeName}
//         </div>
//       );
//     },
//   },
//   {
//     field: "price",
//     headerName: "Giá tiền",
//     width: 100,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithCategoryPlace">
//           {formatNumber(params.row.price)}
//         </div>
//       );
//     },
//   },
//   {
//     field: "userModel",
//     headerName: "Người đăng",
//     width: 100,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithCategoryPlace">
//           {params.row.userModel.username}
//         </div>
//       );
//     },
//   },

//   {
//     field: "createdAt",
//     headerName: "Ngày tạo",
//     width: 100,
//     renderCell: (params) => {
//       return <div className="cellWithCreateAt">{params.row.createdAt}</div>;
//     },
//   },
// ];

//
export const tourColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    renderCell: (params) => {
      return <div className="cellWithId">{params.row._id}</div>;
    },
  },
  {
    field: "name",
    headerName: "Tên tuyến đường",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImgPlace"
            src={params.row.images[0]}
            alt="Khách sạn"
          />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "route",
    headerName: "Tuyến đường",
    width: 300,
    renderCell: (params) => {
      return <div className="cellWithAddressPlace">{params.row.route}</div>;
    },
  },
  {
    field: "time",
    headerName: "Thời gian",
    width: 100,
    renderCell: (params) => {
      return <div className="cellWithAddressPlace">{params.row.time}</div>;
    },
  },
  {
    field: "price",
    headerName: "Giá trung bình",
    width: 110,
    renderCell: (params) => {
      return (
        <div className="cellWithCategoryPlace">
          {formatNumber(params.row.price)}
        </div>
      );
    },
  },

  {
    field: "createdAt",
    headerName: "Create Date",
    width: 84,
    renderCell: (params) => {
      return <div className="cellWithCreateAt">{params.row.createdAt}</div>;
    },
  },
];
