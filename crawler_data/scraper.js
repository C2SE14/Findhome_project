const scrapeCategory = async (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let page = await browser.newPage();

      console.log(">> Mở tab mới...");
      await page.setViewport({
        width: 1920,
        height: 1080,
      });
      // mở tap với độ rộng full màng hình
      await page.goto(url);
      console.log(">> Truy cập vào " + url);
      await page.waitForSelector(".re__main");
      console.log(">> Website đã load xong");

      const dataCategory = await page.$$eval(
        ".re__home-header-menu > ul > li",
        (els) => {
          return els
            .map((el) => {
              const linkEl = el.querySelector("a");
              if (!linkEl) return null;

              const category = linkEl.innerText
                ? linkEl.innerText.trim()
                : null;
              const link = linkEl.href ? linkEl.href.trim() : null;

              return {
                category,
                link,
              };
            })
            .filter((el) => el !== null);
        }
      );
      console.log(dataCategory);
      await page.close();
      console.log(">> Tab đã đóng");
      resolve(dataCategory);
    } catch (error) {
      console.log(">> Lỗi ở scrape category " + error);
      reject(error);
    }
  });

const scraper = (browser, ur) =>
  new Promise(async (resolve, reject) => {
    try {
      let newPage = await browser.newPage();
      console.log(">> Mở tab mới ...");
      await page.goto(url);
      console.log("Truy cập vào " + url);
      await page.waitForSelector(".re__main");
      console.log(">> Website đã load xong...");

      const scrapeDataEstateSale = {};

      // lấy header

      // const headerData = await newPage.$eval(".re__breadcrumb", (el) => {
      //   return {
      //     title: el.querySelectorAll("a"),
      //   };
      // });
      // scrapeDataEstateSale.headerData = headerData;

      // Lấy links detail item
      const detailLinks = await newPage.$$eval(
        "#product-lists-web .js__card .js__card-full-web",
        (els) => {
          detailLinks = els.map((el) => {
            return {
              name: el.querySelector(
                ".js__product-link-for-product-id .re__card-info .re__card-info-content h3 span"
              ).innerText,
            };
          });
          return detailLinks;
        }
      );
      console.log(detailLinks);

      await browser.close();
      console.log(">> Tab đã đóng");
      resolve();
    } catch (error) {
      reject(error);
    }
  });

module.exports = { scrapeCategory, scraper };
