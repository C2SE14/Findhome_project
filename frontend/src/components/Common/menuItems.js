export const menuItems = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Nhà đất bán",
    icon: "bi bi-chevron-compact-down",
    path: "/nha-dat-ban",
    submenus: [
      {
        title: "Bán căn hộ chung cư",
        path: "/nha-dat-ban/ban-can-ho-chung-cu",
      },
      {
        title: "Bán nhà riêng",
        path: "/nha-dat-ban/ban-nha-rieng",
      },
    ],
  },
  {
    title: "Nhà đất cho thuê",
    icon: "bi bi-chevron-compact-down",
    path: "/nha-dat-cho-thue",
    submenus: [
      {
        title: "Cho thuê căn hộ chung cư",
        path: "/nha-dat-cho-thue/cho-thue-can-ho-chung-cu",
      },
      {
        title: "Cho thuê nhà riêng",
        path: "/nha-dat-cho-thue/cho-thue-nha-rieng",
      },
    ],
  },
  {
    title: "Dự án",
    icon: "bi bi-chevron-compact-down",
  },
  {
    title: "Đấu giá",
  },
  {
    title: "Liên hệ",
  },
];
