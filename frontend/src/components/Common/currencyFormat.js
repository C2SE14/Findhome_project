const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + " tỷ";
  }
  if (num >= 100000000) {
    return (num / 1000000).toFixed(0) + " triệu";
  }
  return num;
};
export default formatNumber;
