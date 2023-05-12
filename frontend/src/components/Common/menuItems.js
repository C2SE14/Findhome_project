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
        path: path.BAN_CAN_HO_CHUNG_CU,
      },
      {
        title: "Bán nhà riêng,nhà mặt phố",
        path: path.BAN_NHA_RIENG_NHA_MAT_PHO,
      },
      {
        title: "Bán biệt thự, nhà liền kề",
        path: path.BAN_BIET_THU_NHA_LIEN_KE,
      },
      {
        title: "Bán đất nền",
        path: path.BAN_DAT_NEN,
      },
      {
        title: "Bán đất thổ cư",
        path: path.BAN_DAT_THO_CU,
      },
      {
        title: "Bán toà nhà văn phòng",
        path: path.BAN_TOA_NHA_VAN_PHONG,
      },
      {
        title: "Bán căn hộ condotel",
        path: path.BAN_CAN_HO_CONDOTEL,
      },
      {
        title: "Bán căn hộ officetel",
        path: path.BAN_CAN_HO_OFFICETEL,
      },

      {
        title: "Bán đất trang trại nghĩ dưỡng",
        path: path.BAN_DAT_TRANG_TRAI_NGHI_DUONG,
      },
      {
        title: "Bán kho,nhà xưởng,kiot",
        path: path.BAN_KHO_NHA_XUONG_KIOT,
      },
      {
        title: "Bán đất nhà khác",
        path: path.BAN_DAT_NHA_KHAC,
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
        path: path.CHO_THUE_CAN_HO_CHUNG_CU,
      },
      {
        title: "Cho thuê phòng trọ,nhà trọ",
        path: path.CHO_THUE_PHONG_TRO_NHA_TRO,
      },
      {
        title: "Cho thuê văn phòng",
        path: path.CHO_THUE_VAN_PHONG,
      },
      {
        title: "Cho thuê nhà riêng,nhà mặt phố",
        path: path.CHO_THUE_NHA_RIENG_NHA_MAT_PHO,
      },
      {
        title: "Cho thuê căn hộ condotel",
        path: path.CHO_THUE_CAN_HO_CONDOTEL,
      },
      {
        title: "Cho thuê căn hộ officetel",
        path: path.CHO_THUE_cAN_HO_OFFICETEL,
      },
      {
        title: "Cho thuê cửa hàng, kiot",
        path: path.CHO_THUE_NHA_KHO_NHA_XUONG,
      },
      {
        title: "Cho thuê nhà đất khác",
        path: path.CHO_THUE_NHA_DAT_KHAC,
      },
    ],
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
