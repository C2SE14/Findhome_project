const scrapers = require("./scraper");

const scrapeController = async (browserInstance) => {
  const url = "https://batdongsan.com.vn/";
  const indexs = [3, 4, 5, 6];
  try {
    let browser = await browserInstance;
    // gọi hàm cạo ở file scrape
    const categories = await scrapers.scrapeCategory(browser, url);
    const selectedCategories = categories.filter((category, index) =>
      indexs.some((i) => i === index)
    );
    await scrapers.scraper(browser, selectedCategories[0].link);
    //   console.log(selectedCategories);
  } catch (error) {
    console.log("Lỗi ở scrapeController" + error);
  }
};

module.exports = scrapeController;
