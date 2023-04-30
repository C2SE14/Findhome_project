import { path } from "../../utils/constant";

export const menuItems = [
  {
    title: "Trang chủ",
    path: path.HOME,
  },
  {
    title: "Nhà đất bán",
    icon: "bi bi-chevron-compact-down",
    path: path.REAL_ESTATE_FOR_SALE,
    submenus: [
      {
        title: "Bán căn hộ chung cư",
        path: "/ban-can-ho-chung-cu",
      },
      {
        title: "Bán nhà riêng,nhà mặt phố",
        path: "/ban-nha-rieng-nha-mat-pho",
      },
      {
        title: "Bán biệt thự, nhà liền kề",
        path: "/ban-biet-thu-nha-lien-ke",
      },
      {
        title: "Bán đất nền",
        path: "/ban-dat-nen",
      },
      {
        title: "Bán đất thổ cư",
        path: "/ban-dat-tho-cu",
      },
      {
        title: "Bán toà nhà văn phòng",
        path: "/ban-toa-nha-van-phong",
      },
      {
        title: "Bán căn hộ condotel",
        path: "/ban-can-ho-condotel",
      },
      {
        title: "Bán căn hộ officetel",
        path: "/ban-can-ho-officetel",
      },

      {
        title: "Bán đất trang trại nghĩ dưỡng",
        path: "/ban-dat-trang-trai-nghi-duong",
      },
      {
        title: "Bán kho,nhà xưởng,kiot",
        path: "/ban-dat-nha-khac",
      },
      {
        title: "Bán đất nhà khác",
        path: "/ban-kho-nha-xuong-kiot",
      },
    ],
  },
  {
    title: "Nhà đất cho thuê",
    icon: "bi bi-chevron-compact-down",
    path: path.REAL_ESTATE_FOR_RENT,
    submenus: [
      {
        title: "Cho thuê căn hộ chung cư",
        path: "/cho-thue-can-ho-chung-cu",
      },
      {
        title: "Cho thuê phòng trọ,nhà trọ",
        path: "/cho-thue-phong-tro-nha-tro",
      },
      {
        title: "Cho thuê văn phòng",
        path: "/cho-thue-van-phong",
      },
      {
        title: "Cho thuê nhà riêng,nhà mặt phố",
        path: "/cho-thue-nha-rieng-nha-ma-pho",
      },
      {
        title: "Cho thuê căn hộ condotel",
        path: "/cho-thue-can-ho-condotel",
      },
      {
        title: "Cho thuê căn hộ officetel",
        path: "/cho-thue-can-ho-officetel",
      },
      {
        title: "Cho thuê cửa hàng, kiot",
        path: "/cho-thue-kho-nha-xuong",
      },
      {
        title: "Cho thuê nhà đất khác",
        path: "/cho-thue-nha-dat-khac",
      },
    ],
  },
  {
    title: "Dự án",
    path: path.REAL_ESTATE_FOR_PROJECT,
  },
  {
    title: "Đấu giá",
    path: path.AUCTION,
  },
  {
    title: "Liên hệ",
    path: path.CONTACT,
  },
];
