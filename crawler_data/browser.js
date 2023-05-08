const puppeteer = require("puppeteer");

const startBrowser = async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      // Có hiện ui của chrommium hay không, false là có
      headless: false,
      // Chrome sử dụng multiple layer của sandbox để tránh những nội dung web không đáng tin cậy
      // nếu tin tưởng content dung thì set như vầy
      args: ["--disable-setuid-sandbox"],
      // truy cập website bỏ qua lỗi liên quan http secure
      ignoreHTTPSErrors: true,
    });
  } catch (error) {
    console.log("Không tạo được browser" + error);
  }
  return browser;
};
module.exports = startBrowser;
