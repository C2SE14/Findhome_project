import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "../RealEstateForSale/RealEstateForSale.scss";
import { Link } from "react-router-dom";
import fetchData from "../../components/Common/fetchData";
import { convertToSlug } from "../../components/Common/convertToSlug";

const RealEstateForRent = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggle() {
    setIsExpanded(!isExpanded);
  }

  const searchPrice = [
    {
      price: "Dưới 5 triệu",
    },
    {
      price: "500 đến 1 tỷ",
    },
    {
      price: "1 dến 2 tỷ",
    },
    {
      price: "2 dến 3 tỷ",
    },
    {
      price: "3 dến 5 tỷ",
    },
    {
      price: "5 dến 7 tỷ",
    },
    {
      price: "7 dến 10 tỷ",
    },
    {
      price: "10 dến 20 tỷ",
    },
    {
      price: "20 dến 30 tỷ",
    },
    {
      price: "Trên 30 tỷ",
    },
  ];

  const searchArea = [
    {
      area: "Dưới 30 m²",
    },
    {
      area: "30 đến 50 m²",
    },
    {
      area: "50 đến 80 m²",
    },
    {
      area: "80 đến 100 m²",
    },
    {
      area: "100 đến 150 m²",
    },
    {
      area: "150 đến 300 m²",
    },
    {
      area: "300 đến 500 m²",
    },
    {
      area: "Trên 500 m²",
    },
  ];

  return (
    <div className="refs">
      <Container>
        <div className="refs__container">
          <Row>
            <Col md={9}>
              <div className="refs__left">
                <h2 className="refs__title">
                  CHO THUÊ NHÀ ĐẤT - BẤT ĐỘNG SẢN FINDHOME THÁNG {currentMonth}{" "}
                  / {currentYear}
                </h2>
                <div className="refs__subtitle">
                  <p>
                    Bạn đang xem 15 tin rao trong tổng số 72.881 tin{" "}
                    <Link>Cho thuể nhà đất</Link>
                  </p>
                  <div className="refs__filter">
                    <select id="filter__price" placeholder="Sắp sếp tin đăng">
                      <option value="" disabled defaultValue hidden>
                        Sắp xếp tin đăng
                      </option>
                      <option value="tinmoidang">Tin đăng mới nhất</option>
                      <option value="giatangdan">Giá tăng dần</option>
                      <option value="giagiamdan">Giá giảm dần</option>
                      <option value="dientichtangdan">
                        Diện tích tăng dần
                      </option>
                      <option value="dientichgiamdan">
                        Diện tích giảm dần
                      </option>
                    </select>
                  </div>
                </div>

                <div className="refs__search-price">
                  <h4>Tìm theo khoảng giá</h4>
                  <div className="price__container">
                    <div className="price__list">
                      {searchPrice.map((price, index) => (
                        <div key={index} className="price__item">
                          {price.price}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="refs__search-area">
                  <h4>Tìm theo khoảng diện tích</h4>

                  <div className="area__container">
                    <div className="area__list">
                      {searchArea.map((area, index) => (
                        <div key={index} className="area__item">
                          {area.area}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="refs__product">
                  <ul className="refs__product-list">
                    {fetchData.map((product, index) => (
                      <li className="refs__product-item" key={index}>
                        <Link
                          to={`/${convertToSlug(product.nameEstate)}`}
                          className="refs__product-link"
                        >
                          <img src={product.imageModelList[0].image} alt="" />
                          <div className="content">
                            <div className="detail">
                              <h3>{product.nameEstate}</h3>
                              <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <span>{product.address}</span>
                              </div>
                              <div className="price">
                                <span>{product.area}</span>
                                <span className="divider-dot"></span>
                                <span>{product.price} Triệu</span>
                              </div>
                              <div className="time">
                                <i className="bi bi-clock-fill"></i>
                                <span> 2 ngày trước</span>
                              </div>
                              <div className="info">
                                <div className="frontage">
                                  <div>
                                    <i className="bi bi-arrows-fullscreen"></i>
                                    <span>Mặt tiền: </span>
                                  </div>
                                  <p>30m</p>
                                </div>

                                <div className="depth">
                                  <div>
                                    <i className="bi bi-arrows-expand"></i>
                                    <span>Chiều sâu: </span>
                                  </div>
                                  <p>6m</p>
                                </div>

                                <div className="direction">
                                  <div>
                                    <i className="bi bi-compass"></i>
                                    <span>Hướng: </span>
                                  </div>
                                  <p>30m</p>
                                </div>
                              </div>
                            </div>
                            <div className="contact">
                              <div className="avatar">
                                <img
                                  src="https://cdn.houseviet.vn/images/icons/user-avatar.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <h3>Văn Hải</h3>
                                <h4>Môi giới</h4>
                              </div>
                              <span>
                                <i className="bi bi-telephone-plus-fill"></i>
                                <p>0867405503</p>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="refs__description">
                  <p>
                    <strong>Mua bán căn hộ</strong> chung cư là một trong những
                    hoạt động nhận được khá nhiều sự quan tâm trong ngành bất
                    động sản hiện nay. Mặc dù trong năm 2020 kinh tế bị ảnh
                    hưởng khá nhiều do dịch Covid tuy nhiên đối với thị trường
                    mua bán căn hộ chung cư, các hoạt động vẫn được duy trì ở
                    mức khá.
                  </p>
                  <p>
                    Trong khoảng 2 tháng đầu năm nay khi dịch bệnh đã được kiểm
                    soát thì thị trường căn hộ chung cư đã có những bước quay
                    trở lại mạnh mẽ không chỉ ở 2 thị trường lớn tại TP Hồ Chí
                    Minh và Hà Nội mà còn trải đều khắp các tỉnh thành lớn trên
                    nước ta. Hãy cùng tìm hiểu những yếu tố giúp cho thị trường
                    mua bán căn hộ chung cư hiện nay đang trở thành một sản phẩm
                    thu hút nhiều sự quan tâm từ các nhà đầu tư cũng như cá nhân
                    có nhu cầu tìm chỗ ở.
                  </p>
                  <div
                    className={`tableofcontent ${!isExpanded && "width-520"} `}
                  >
                    <div className="group__flex">
                      <i className="bi bi-list"></i>
                      <div>
                        Nội dung bài viết[
                        <span onClick={handleToggle}>
                          {isExpanded ? "Mở rộng" : "Thu gọn"}
                        </span>
                        ]
                      </div>
                    </div>
                    <div className="table__list">
                      {!isExpanded ? (
                        <ul>
                          <li>
                            <a href="#thi-truong-mua-ban-can-ho-chung-cu-nam-2021">
                              1. Thị trường mua bán căn hộ chung cư năm 2021
                            </a>
                          </li>
                          <li>
                            <a href="#co-nen-mua-ban-can-ho-chung-cu-trong-thoi-diem-hien-tai-hay-khong">
                              2. Có nên mua bán căn hộ chung cư trong thời điểm
                              hiện tại hay không?
                            </a>
                          </li>
                          <li>
                            <a href="#nhung-dieu-can-biet-de-ban-can-ho-chung-cu-gia-cao">
                              3. Những điều cần biết để bán căn hộ chung cư giá
                              cao
                            </a>
                            <ul>
                              <li>
                                <a href="#chuan-bi-giay-to-phap-ly-day-du">
                                  3.1. Chuẩn bị giấy tờ pháp lý đầy đủ
                                </a>
                              </li>
                              <li>
                                <a href="#tu-sua-lai-can-ho-truoc-khi-dang-tin">
                                  3.2. Tu sửa lại căn hộ trước khi đăng tin
                                </a>
                              </li>
                              <li>
                                <a href="#tham-khao-muc-gia-ban-can-ho-tren-thi-truong">
                                  3.3. Tham khảo mức giá bán căn hộ trên thị
                                  trường
                                </a>
                              </li>
                              <li>
                                <a href="#lua-chon-thoi-diem-dang-tin-phu-hop">
                                  3.4. Lựa chọn thời điểm đăng tin phù hợp
                                </a>
                              </li>
                              <li>
                                <a href="#lua-chon-su-ho-tro-tu-cac-san-thuong-mai-dien-tu">
                                  3.5. Lựa chọn sự hỗ trợ từ các sàn thương mại
                                  điện tử
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#nhung-uu-nhuoc-diem-cua-viec-mua-can-ho-chung-cu-so-voi-nha-dat">
                              4. Những ưu nhược điểm của việc mua căn hộ chung
                              cư so với nhà đất
                            </a>
                          </li>
                          <li>
                            <a href="#cac-yeu-to-anh-huong-den-gia-tri-cua-mot-can-ho-chung-cu">
                              5. Các yếu tố ảnh hưởng đến giá trị của một căn hộ
                              chung cư
                            </a>
                          </li>
                          <li>
                            <a href="#nhung-luu-y-truoc-khi-mua-can-ho-chung-cu">
                              6. Những lưu ý trước khi mua căn hộ chung cư
                            </a>
                            <ul>
                              <li>
                                <a href="#tham-khao-gia-ban-tren-thi-truong">
                                  6.1. Tham khảo giá bán trên thị trường
                                </a>
                              </li>
                              <li>
                                <a href="#vi-tri-can-ho-phu-hop-voi-nhu-cau-sinh-song">
                                  6.2. Vị trí căn hộ phù hợp với nhu cầu sinh
                                  sống
                                </a>
                              </li>
                              <li>
                                <a href="#co-so-ha-tang-dam-bao-chat-luong">
                                  6.3. Cơ sở hạ tầng đảm bảo chất lượng
                                </a>
                              </li>
                              <li>
                                <a href="#chon-can-ho-phu-hop-voi-kha-nang-chi-tra">
                                  6.4. Chọn căn hộ phù hợp với khả năng chi trả
                                </a>
                              </li>
                              <li>
                                <a href="#chon-cac-san-thuong-mai-dien-tu-uy-tin-de-nho-ho-tro">
                                  6.5. Chọn các sàn thương mại điện tử uy tín để
                                  nhờ hỗ trợ
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#thu-tuc-mua-ban-can-ho-chung-cu-hien-nay">
                              7. Thủ tục mua bán căn hộ chung cư hiện nay
                            </a>
                          </li>
                          <li>
                            <a href="#mua-ban-can-ho-chung-cu-lien-he-trang-thuong-mai-findhome">
                              8. Mua bán căn hộ chung cư liên hệ trang thương
                              mại Findhome
                            </a>
                          </li>
                          <li>
                            <a href="#faq-mot-so-cau-hoi-tu-khach-hang-cua-findhome">
                              9. FAQ – Một số câu hỏi từ khách hàng của Findhome
                            </a>
                            <ul>
                              <li>
                                <a href="#cac-loai-hinh-dau-tu-bat-dong-san-thinh-hanh-tai-viet-nam-hien-nay">
                                  9.1. Các loại hình đầu tư bất động sản thịnh
                                  hành tại Việt Nam hiện nay
                                </a>
                              </li>
                              <li>
                                <a href="#phi-quan-ly-cac-can-ho-chung-cu-hien-nay-bao-nhieu">
                                  9.2. Phí quản lý các căn hộ chung cư hiện nay
                                  bao nhiêu?
                                </a>
                              </li>
                              <li>
                                <a href="#nen-mua-can-ho-chung-cu-tu-du-an-hay-da-hoan-thien-la-hieu-qua">
                                  9.3. Nên mua căn hộ chung cư từ dự án hay đã
                                  hoàn thiện là hiệu quả?
                                </a>
                              </li>
                              <li>
                                <a href="#cac-loai-hinh-dau-tu-bat-dong-san-can-tranh-hien-nay">
                                  9.4. Các loại hình đầu tư bất động sản cần
                                  tránh hiện nay
                                </a>
                              </li>
                              <li>
                                <a href="#mua-ban-cac-can-ho-chung-cu-gia-re-nen-lien-he-san-thuong-mai-nao">
                                  9.5. Mua bán các căn hộ chung cư giá rẻ nên
                                  liên hệ sàn thương mại nào?
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      ) : null}
                    </div>
                  </div>
                  <div className="content">
                    <h2 id="thi-truong-mua-ban-can-ho-chung-cu-nam-2021">
                      Thị trường mua bán căn hộ chung cư năm 2021
                    </h2>
                    <p>
                      Như chúng tôi đã nói thì thị trường{" "}
                      <strong>mua bán căn hộ chung cư</strong> trong năm 2020 có
                      những diễn biến trái ngược trong bối cảnh nền kinh tế bị
                      ảnh hưởng do dịch bệnh Covid, tuy nhiên nhìn chung thị
                      trường vẫn phát triển mạnh, thậm chí tại một số khu vực
                      giá căn hộ còn tăng đáng kể.
                    </p>
                    <p>
                      Có được điều này một phần là do hiện nay lượng người dân
                      tập trung về các khu đô thị để sinh sống cũng như làm việc
                      ngày càng đông, điều này dẫn đến tình trạng lượng đất
                      trống để xây nhà ở ngày càng khan hiếm, buộc người dân
                      phải lựa chọn đến những căn hộ chung cư để ở.
                    </p>
                    <p>
                      Bên cạnh đó với đa phần các căn chung cư đều nằm tại những
                      vị trí trung tâm của các tỉnh thành nên việc đi lại cũng
                      khá thuận tiện, cùng với đó là các cơ sở hạ tầng phát
                      triển, các trung tâm thương mại phục vụ cho nhu cầu sống
                      của người dân cũng đảm bảo đầy đủ, điều này giúp cho chất
                      lượng sống của người dân tại các khu căn hộ chung cư luôn
                      ở mức cao.
                    </p>
                    <p>
                      Đặc biệt là trong phân khúc các{" "}
                      <strong>căn hộ chung cư</strong> hạng sang dành cho tầng
                      lớp thượng lưu, cuộc cạnh tranh lại càng trở nên khốc liệt
                      bởi đây là một cánh cửa hẹp, yêu cầu sự chăm chút, cẩn
                      thận tỉ mỉ đến từ các nhà đầu tư lớn dành cho dự án của
                      mình nhằm đáp ứng được những yêu cầu khắt khe từ những
                      khách hàng cao cấp.
                    </p>
                    <p>
                      Theo các chuyên gia trong ngành nhận định thì trong năm
                      2021 thị trường <strong>mua bán căn hộ chung cư</strong>{" "}
                      sẽ là một cuộc chơi cạnh tranh khốc liệt từ các chủ đầu tư
                      cũng như những doanh nghiệp có tên tuổi, uy tín trên thị
                      trường. Điều này sẽ gây nên những bất tiện cho những nhà
                      đầu tư nhỏ lẻ, tuy nhiên ở chiều ngược lại thì người mua
                      lại nhận được những lợi ích khi có thể tiếp cận được những
                      dự án có chất lượng cao.
                    </p>
                    <h2 id="co-nen-mua-ban-can-ho-chung-cu-trong-thoi-diem-hien-tai-hay-khong">
                      Có nên mua bán căn hộ chung cư trong thời điểm hiện tại
                      hay không?
                    </h2>
                    <p>
                      Nhìn lại một chút về thị trường{" "}
                      <strong>mua bán căn hộ chung cư</strong>
                      trong năm 2020 và trước đó. Theo thống kê sơ bộ thì trong
                      khoảng thời gian từ năm 2019 đến đầu năm 2020, thị trường
                      căn hộ chung cư không có nhiều dự án mới xuất hiện, thay
                      vào đó là thị trường giao dịch các căn hộ trung cấp diễn
                      ra khá sôi động.
                    </p>
                    <p>
                      Tuy nhiên ở thời điểm hiện tại thì việc mua các căn hộ
                      chung cư tại các tỉnh thành lớn đang gặp tương đối nhiều
                      khó khăn do quỹ đất trống đã ngày càng cạn kiệt, các dự án
                      được xây dựng và mở bán có giá tương đối cao, điều này tuy
                      gây ra những ảnh hưởng to lớn đến các hộ gia đình có thu
                      nhập trung bình khá, tuy nhiên với các nhà đầu tư lâu dài
                      thì đây lại là một thị trường có tiềm năng phát triển khá
                      lớn trong tương lai.
                    </p>
                    <p>
                      Các giao dịch mua bán căn hộ chung cư vẫn luôn diễn ra
                      liên tục và có sự duy trì tăng giá ổn định. Các nhà đầu tư
                      có tiềm lực tài chính tốt có thể tham gia đầu tư với 2
                      hình thức phổ biến hiện nay là mua đi bán lại hoặc đầu tư
                      cho thuê lâu dài.
                    </p>
                    <p>
                      Hiện tại thì nhu cầu <strong>mua chung cư căn hộ</strong>{" "}
                      tại các thành phố lớn đang rất cao bất kể ở phân khúc nào,
                      điều này có lợi khá nhiều cho các chủ đầu tư đang sở hữu
                      các căn hộ với ý định cho thuê nhằm thu được khoản lợi
                      nhuận ổn định lâu dài.
                    </p>
                    <h2 id="nhung-dieu-can-biet-de-ban-can-ho-chung-cu-gia-cao">
                      Những điều cần biết để bán căn hộ chung cư giá cao
                    </h2>
                    <p>
                      Ai trong chúng ta cũng đều mong muốn{" "}
                      <strong>bán được căn hộ chung cư</strong> của mình với giá
                      tốt nhất có thể, tuy nhiên để đạt được mục đích đó đòi hỏi
                      chúng ta cần có những bước chuẩn bị hợp lý để qua đó việc
                      bán căn hộ sẽ trở nên dễ dàng và giá bán cũng cao hơn.
                    </p>
                    <h3 id="chuan-bi-giay-to-phap-ly-day-du">
                      Chuẩn bị giấy tờ pháp lý đầy đủ
                    </h3>
                    <p>
                      <strong>Mua căn hộ chung cư</strong> là một giao dịch có
                      giá trị tương đối cao nên khách hàng thường sẽ rất quan
                      tâm đến những vấn đề pháp lý của căn hộ. Chính vì thế bạn
                      cần chuẩn bị những giấy tờ liên quan như Giấy chứng nhận
                      quyền sử dụng đất, các biên lai thanh toán các chi phí
                      dịch vụ của căn hộ,...điều này sẽ giúp bạn tạo được sự tin
                      tưởng của khách hàng cũng như nâng cao sự uy tín cho bản
                      thân.
                    </p>
                    <h3 id="tu-sua-lai-can-ho-truoc-khi-dang-tin">
                      Tu sửa lại căn hộ trước khi đăng tin
                    </h3>
                    <p>
                      Khách hàng nào cũng muốn căn hộ mình mua sẽ trong tình
                      trạng mới và sạch sẽ nhất có thể, chính vì thế trước khi
                      chụp ảnh căn hộ để đăng tin bán thì bạn cần tu sửa, vệ
                      sinh lại căn hộ cho thật sạch sẽ. Hãy tiến hành bằng việc
                      dọn dẹp các vật dụng không cần thiết ra khỏi căn hộ, sắp
                      xếp lại bàn ghế và giường tủ,...việc này sẽ tạo cảm giác
                      cho căn hộ của bạn trở nên thông thoáng và rộng rãi hơn.
                      Bên cạnh đó nếu có thể thì hãy sơn lại căn hộ của bạn để
                      khách hàng cảm thấy đây là một căn hộ mới hoàn toàn và sẵn
                      sàng bỏ một số tiền lớn ra để sở hữu.
                    </p>
                    <h3 id="tham-khao-muc-gia-ban-can-ho-tren-thi-truong">
                      Tham khảo mức giá bán căn hộ trên thị trường
                    </h3>
                    <p>
                      Chắc chắn rằng ai cũng muốn bán căn hộ với mức giá có lời
                      nhất, tuy nhiên nếu bạn đăng tin với mức giá cao quá bất
                      hợp lý có thể sẽ gây ra phản ứng ngược đối với giao dịch
                      của bạn. Hãy lên các trang thương mại điện tử về bất động
                      sản để tìm hiểu mức giá chung trên thị trường trong thời
                      điểm đó, so sánh lợi thế căn hộ của bạn với các khu vực
                      xung quanh hoặc có thể tham khảo thông tin từ những người
                      sống chung trong chung cư đó.
                    </p>
                    <h3 id="lua-chon-thoi-diem-dang-tin-phu-hop">
                      Lựa chọn thời điểm đăng tin phù hợp
                    </h3>
                    <p>
                      Việc chọn thời điểm để đăng tin{" "}
                      <strong>bán căn hộ chung cư</strong> cũng sẽ ảnh hưởng khá
                      nhiều đến hiệu quả của quá trình giao dịch. Mặc dù luôn có
                      những người có nhu cầu mua căn hộ chung cư để ở quanh năm,
                      tuy nhiên sẽ tùy vào những thời điểm mà sẽ quyết định được
                      việc chốt giao dịch của bạn với khách hàng có trở nên
                      thuận lợi hay không. Ví dụ như khi bạn đăng tin bán vào
                      những ngày mưa thì khách hàng sẽ rất khó để tiến hành kiểm
                      tra trực tiếp căn hộ của bạn, chính vì thế bạn cần đặt
                      mình vào bản thân khách hàng để có thể đưa ra những quyết
                      định đăng tin bán căn hộ chung cư một cách hiệu quả nhất.
                    </p>
                    <h3 id="lua-chon-su-ho-tro-tu-cac-san-thuong-mai-dien-tu">
                      Lựa chọn sự hỗ trợ từ các sàn thương mại điện tử
                    </h3>
                    <p>
                      Nhờ công nghệ ngày càng phát triển nên hiện nay trên thị
                      trường bất động sản có khá nhiều các trang thương mại điện
                      tử mà tại đó người bán có thể dễ dàng đăng tin bán căn hộ
                      chung cư của mình, qua đó tiếp cận được với những khách
                      hàng đang có nhu cầu một cách nhanh chóng và hiệu quả hơn.
                    </p>
                    <p>
                      <strong>Findhome</strong> là một trong những trang thương
                      mại điện tử về bất động sản hàng đầu tại Việt Nam, được sự
                      chứng nhận từ Bộ Công thương về chất lượng của dịch vụ,
                      chúng tôi tự tin sẽ hỗ trợ cho những nhà đầu tư cũng như
                      cá nhân đang có nhu cầu bán căn hộ chung cư tại mọi tỉnh
                      thành trên lãnh thổ Việt Nam.
                    </p>
                    <p>
                      Với việc thiết kế giao diện trang web vô cùng đơn giản,
                      khách hàng chỉ cần thực hiện vài bước đơn giản để có thể
                      đăng tin bán căn hộ của mình lên website của chúng tôi một
                      cách dễ dàng.
                    </p>
                    <p>
                      Bên cạnh đó chúng tôi còn đem đến người đọc những thông
                      tin hữu ích trong ngành bất động sản như các bản Thông tin
                      quy hoạch, Tin tức về thị trường bất động sản,...một cách
                      nhanh chóng và chính xác.
                    </p>
                    <h2 id="nhung-uu-nhuoc-diem-cua-viec-mua-can-ho-chung-cu-so-voi-nha-dat">
                      Những ưu nhược điểm của việc mua căn hộ chung cư so với
                      nhà đất
                    </h2>
                    <p>
                      Nhiều người còn đang băn khoăn giữa việc{" "}
                      <strong>mua căn hộ chung cư</strong> hay nhà đất để ở sẽ
                      mang lại chất lượng sống cao hơn. Dưới đây chúng tôi sẽ
                      đem đến các bạn một số phân tích cơ bản về những ưu nhược
                      điểm giữa việc ở căn hộ chung cư so với nhà đất.
                    </p>
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th colspan="1"></th>
                          <th colspan="1">
                            <strong>Ưu điểm</strong>
                          </th>
                          <th colspan="1">
                            <strong>Nhược điểm</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Căn hộ chung cư</strong>
                          </td>
                          <td>
                            <p>
                              Giá thành rẻ hơn so với việc mua nhà đất để ở.
                            </p>
                            <p>
                              Đa số các khu chung cư thường nằm gần khu vực
                              trung tâm của các tỉnh thành, người dân sẽ dễ dàng
                              di chuyển đến các nơi lân cận.
                            </p>
                            <p>
                              Xung quanh khu chung cư đa phần có khá nhiều các
                              cơ sở hạ tầng, phục vụ cho tiện ích sống của người
                              dân trong khu vực.
                            </p>
                            <p>
                              Có thể ở được ngay mà không cần chờ thời gian để
                              xây nhà.
                            </p>
                            <p>An ninh trong khu vực luôn được đảm bảo.</p>
                          </td>
                          <td>
                            <p>
                              Không thể chỉnh sửa kích thước của căn hộ theo ý
                              muốn.
                            </p>
                            <p>Thường không có tính riêng tư.</p>
                            <p>
                              Dễ bị ảnh hưởng bởi việc sinh hoạt của các hộ gia
                              đình xung quanh.
                            </p>
                            <p>
                              Phải mất những khoản phí dịch vụ trong quá trình
                              sinh sống.
                            </p>
                            <p>
                              Do gần khu trung tâm nên giao thông thường bất
                              tiện trong những giờ cao điểm.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Nhà đất</strong>
                          </td>
                          <td>
                            <p>Có thể xây nhà tùy theo sở thích cá nhân.</p>
                            <p>Có tính riêng tư cao.</p>
                            <p>Không phải chịu những khoản phí phát sinh.</p>
                            <p>
                              Quá trình sinh hoạt thoải mái mà không lo ảnh
                              hưởng đến các hộ gia đình xung quanh.
                            </p>
                          </td>
                          <td>
                            <p>
                              Chi phí bỏ ra thường khá cao so với việc mua căn
                              hộ chung cư.
                            </p>
                            <p>
                              Lượng đất trống tại các khu vực trung tâm của các
                              tỉnh thành rất khan hiếm
                            </p>
                            <p>
                              Thường nằm xa khu trung tâm nên bất tiện cho quá
                              trình đi lại.
                            </p>
                            <p>
                              An ninh khu vực tại nhiều nơi chưa được đảm bảo
                              tuyệt đối.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <h2 id="cac-yeu-to-anh-huong-den-gia-tri-cua-mot-can-ho-chung-cu">
                      Các yếu tố ảnh hưởng đến giá trị của một căn hộ chung cư
                    </h2>
                    <p>
                      Có khá nhiều các yếu tố ảnh hưởng trực tiếp cũng như gián
                      tiếp đến giá trị của một căn hộ chung cư, hiểu được những
                      điều này sẽ giúp bạn có thể hình dung được khoảng giá của
                      căn hộ trước khi tiến hành hỏi mua và thuận lợi hơn trong
                      việc thương lượng với chủ đầu tư nếu chẳng may bị đẩy giá
                      lên quá cao. Dưới đây là một số yếu tố tác động trực tiếp
                      đến giá của các căn hộ chung cư:
                    </p>
                    <ul>
                      <li>
                        <p>
                          {" "}
                          <strong>Vị trí địa lý của căn hộ:</strong> Đa phần các
                          căn hộ nằm gần khu vực trung tâm của các tỉnh thành
                          thì mức giá sẽ cao hơn so với những khu vực thuộc vùng
                          ven.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Chất lượng cơ sở vật chất:</strong> hiện nay
                          có khá nhiều các căn hộ chung cư với nhiều loại từ
                          bình dân đến cao cấp, điều này phụ thuộc vào chất
                          lượng của các cơ sở vật chất của chung cư đó, với
                          những căn chung cư có nhiều tiện ích phục vụ cho nhu
                          cầu sống của người dân thì mức giá sẽ cao hơn so với
                          các khu vực còn lại.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Diện tích của căn hộ:</strong> tất nhiên với
                          những căn hộ có diện tích lớn, nhiều phòng thì giá sẽ
                          cao hơn so với những căn hộ ít phòng.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Chất lượng thi công:</strong> các công trình
                          đảm bảo được thời gian hoàn thành theo dự kiến thì mức
                          giá sẽ cao hơn, bạn có thể xác định được chất lượng
                          của công trình bằng cách kiểm tra độ uy tín của chủ
                          đầu tư trong các dự án trước đó.
                        </p>
                      </li>
                    </ul>
                    <h2 id="nhung-luu-y-truoc-khi-mua-can-ho-chung-cu">
                      Những lưu ý trước khi mua căn hộ chung cư
                    </h2>
                    <p>
                      <strong>Chung cư căn hộ</strong> là một sản phẩm hiện đang
                      được rất nhiều người quan tâm, chính vì thế trong quá
                      trình giao dịch đã xuất hiện nhiều vấn đề phát sinh ảnh
                      hưởng đến mức giá chung của sản phẩm này, qua đó đã gây
                      hoang mang cho người mua bởi không biết nên lựa chọn những
                      sản phẩm với mức giá như thế nào để có thể mua được căn hộ
                      như ý mà mức giá vẫn hợp lý.
                    </p>
                    <h3 id="tham-khao-gia-ban-tren-thi-truong">
                      Tham khảo giá bán trên thị trường
                    </h3>
                    <p>
                      Đây là việc mà bạn cần làm bất kể bạn tìm{" "}
                      <strong>mua chung cư căn hộ</strong> để ở hay đầu tư lâu
                      dài, bạn có thể tham khảo mức giá bán này trên các sàn
                      thương mại điện tử hoặc trên các bản tin bất động sản
                      thường ngày, qua đó có thể so sánh mức giá của các căn hộ
                      trong khu vực bạn muốn mua.
                    </p>
                    <h3 id="vi-tri-can-ho-phu-hop-voi-nhu-cau-sinh-song">
                      Vị trí căn hộ phù hợp với nhu cầu sinh sống
                    </h3>
                    <p>
                      Điều này khá quan trọng khi bạn muốn mua căn hộ chung cư
                      để sinh sống, bởi vị trí địa lý sẽ quyết định lớn đến chất
                      lượng cuộc sống của bạn sau này cũng như thời gian đi lại
                      của bạn đến những nơi trong khu vực trung tâm của Thành
                      phố.
                    </p>
                    <h3 id="co-so-ha-tang-dam-bao-chat-luong">
                      Cơ sở hạ tầng đảm bảo chất lượng
                    </h3>
                    <p>
                      Cơ sở hạ tầng là yếu tố quan trọng mà bạn cần quan tâm bất
                      kể bạn chọn <strong>mua căn hộ chung cư</strong> để ở hay
                      đầu tư lâu dài kiếm lợi nhuận. Nếu có ý định mua chung cư
                      để ở thì bạn hãy cố gắng chọn khu vực có hạ tầng giao
                      thông thuận tiện, bên cạnh đó cần đảm bảo ở gần những khu
                      vực như trung tâm thương mại hay các cơ sở y tế, giáo dục.
                    </p>
                    <h3 id="chon-can-ho-phu-hop-voi-kha-nang-chi-tra">
                      Chọn căn hộ phù hợp với khả năng chi trả
                    </h3>
                    <p>
                      Hãy cố gắng chọn những căn hộ phù hợp với khả năng chi
                      trả, tránh trường hợp vay mượn từ nhiều nguồn khác nhau để
                      mua được căn nhà theo ý muốn bởi sẽ làm cuộc sống của bạn
                      trở nên áp lực hơn.
                    </p>
                    <p>
                      Tuy nhiên hiện nay có khá nhiều các chủ đầu tư hỗ trợ
                      khách hàng có nhu cầu bằng các dịch vụ như:{" "}
                      <strong>mua chung cư căn hộ trả góp</strong> hoặc cho{" "}
                      <strong>thuê chung cư căn hộ</strong> với giá rẻ, các bạn
                      có thể suy nghĩ đến các phương án này nếu cảm thấy tài
                      chính không đủ để chi trả trong một lần.
                    </p>
                    <h3 id="chon-cac-san-thuong-mai-dien-tu-uy-tin-de-nho-ho-tro">
                      Chọn các sàn thương mại điện tử uy tín để nhờ hỗ trợ
                    </h3>
                    <p>
                      Trước khi tiến hành mua căn hộ chung cư thì bạn nên tìm
                      hiểu mức giá chung trên thị trường bằng cách lên các sàn
                      thương mại điện tử, bên cạnh việc xác định mức giá cũng có
                      thể tìm kiếm những thông tin liên quan đến căn hộ như vị
                      trí, diện tích, chủ đầu tư có uy tín hay không,... Những
                      thông tin này rất quan trọng nếu bạn có nhu cầu mua để ở
                      lâu dài.
                    </p>
                    <h2 id="thu-tuc-mua-ban-can-ho-chung-cu-hien-nay">
                      Thủ tục mua bán căn hộ chung cư hiện nay
                    </h2>
                    <p>
                      Việc <strong>mua bán căn hộ chung cư</strong> đòi hỏi phải
                      thực hiện một cách cẩn thận, đúng theo quy định của pháp
                      luật nhằm tránh xảy ra những vấn đề sau này. Dưới đây là
                      thủ tục mua căn hộ chung cư theo đúng quy định pháp luật.
                    </p>
                    <p>
                      <strong>Bước 1:</strong> Hai bên mua và bán sẽ thương
                      lượng về những vấn đề cụ thể của sản phẩm như giá bán
                      chung cư, mức phí đặt cọc và việc đóng thuế sau khi giao
                      dịch. Bên cạnh đó là thời gian đến văn phòng công chứng
                      cũng cần được thảo luận rõ ràng.
                    </p>
                    <p>
                      <strong>Bước 2:</strong> Tiếp theo hai bên sẽ làm hợp đồng
                      đặt cọc, quá trình này nên có sự làm chứng từ 2 – 3 người
                      khác để đảm bảo độ uy tín của hợp đồng.
                    </p>
                    <p>
                      <strong>Bước 3:</strong> Hai bên sẽ theo thỏa thuận về
                      thời gian để đến văn phòng công chứng để làm giấy sang
                      nhượng căn hộ. Sau đó sẽ đến phòng thuế để thực hiện nghĩa
                      vụ đóng thuế theo như quy định của nhà nước.
                    </p>
                    <p>
                      <strong>Bước 4:</strong> Bên mua sẽ đem những giấy tờ cần
                      thiết đến chủ đầu tư để yêu cầu cấp giấy chứng nhận quyền
                      sử dụng đất, quá trình này sẽ mất khoảng 21 ngày làm việc.
                    </p>
                    <h2 id="mua-ban-can-ho-chung-cu-lien-he-trang-thuong-mai-findhome">
                      Mua bán căn hộ chung cư liên hệ trang thương mại Findhome
                    </h2>
                    <p>
                      Hiện nay trên thị trường bất động sản có khá nhiều các
                      trang thương mại điện tử mà tại đó người mua có thể dễ
                      dàng tìm kiếm các thông tin liên quan đến sản phẩm như vị
                      trí, mức giá, mức độ uy tín,...
                    </p>
                    <p>
                      <strong>Findhome</strong> là một trong những trang thương
                      mại điện tử bất động sản hàng đầu tại Việt Nam. Với sự
                      nghiên cứu thị trường, hành vi tìm kiếm của khách hàng,
                      công ty chúng tôi đã cho ra mắt một sàn thương mại mà tại
                      đó người mua sẽ tìm kiếm những thông tin về căn hộ chung
                      cư chỉ sau vài thao tác cơ bản. Cùng với đó là các thông
                      tin về thị trường bất động sản luôn được chúng tôi đem đến
                      một cách nhanh chóng và chính xác nhất.
                    </p>
                    <p>
                      Bên cạnh đó thì chúng tôi cũng hỗ trợ các nhà đầu tư hay
                      cá nhân đang có nhu cầu bán căn hộ chung cư đăng tin với
                      mức phí rẻ nhất trên thị trường. Với lượng khách hàng
                      tương tác thường xuyên trên hệ thống của công ty chúng tôi
                      thì việc tiếp cận những người đang có nhu cầu tìm mua
                      chung cư là điều khá dễ dàng và hiệu quả.
                    </p>

                    <h2 id="faq-mot-so-cau-hoi-tu-khach-hang-cua-findhome">
                      FAQ – Một số câu hỏi từ khách hàng của Findhome
                    </h2>
                    <h3 id="cac-loai-hinh-dau-tu-bat-dong-san-thinh-hanh-tai-viet-nam-hien-nay">
                      Các loại hình đầu tư bất động sản thịnh hành tại Việt Nam
                      hiện nay
                    </h3>
                    <ul>
                      <li>
                        <p>
                          Căn hộ chung cư: Trước thực trạng quỹ đất tại các
                          thành phố lớn ngày càng thu hẹp như hiện nay thì việc
                          đầu tư vào mảng căn hộ chung cư đang trở thành xu
                          hướng phát triển trong khoảng 10 năm trở lại đây.
                        </p>
                      </li>
                      <li>
                        <p>
                          Nhà phố: Ngoài căn hộ chung cư thì hiện nay còn một
                          hình thức đầu tư bất động sản được khá nhiều người
                          chọn lựa đó là nhà phố. Đây là loại hình đầu tư không
                          mới nhưng nhu cầu chưa hề giảm vì lượng người có nhu
                          cầu luôn ở mức cao.
                        </p>
                      </li>
                      <li>
                        <p>
                          Đất nền: Đất nền là loại hình dù đã hình thành từ khá
                          lâu đời tuy nhiên được rất nhiều nhà đầu tư quan tâm
                          vì lợi nhuận mang lại tương đối cao.
                        </p>
                      </li>
                      <li>
                        <p>
                          Officetel: Căn hộ Officetel là một loại hình đầu tư
                          bất động sản mới khá hấp dẫn ở các thành phố lớn vì
                          mức độ lợi nhuận đem lại.
                        </p>
                      </li>
                      <li>
                        <p>
                          Phòng trọ cho thuê: Việc dân cư từ các tỉnh lẻ tập
                          trung vào các khu thành phố lớn để tìm việc làm, kiếm
                          thêm thu nhập đã khiến nhu cầu thuê phòng trọ gia tăng
                          cao. Mặt khác thì loại hình này cũng mang tính ổn định
                          cao và tiềm năng phát triển lớn.
                        </p>
                      </li>
                    </ul>
                    <h3 id="phi-quan-ly-cac-can-ho-chung-cu-hien-nay-bao-nhieu">
                      Phí quản lý các căn hộ chung cư hiện nay bao nhiêu?
                    </h3>
                    <p>
                      Đây có lẽ là vấn đề mà rất nhiều người đang có ý định mua
                      căn hộ chung cư để ở quan tâm, bởi nó ảnh hưởng trực tiếp
                      đến những chi phí phát sinh hàng tháng trong quá trình
                      sinh sống. Theo như Findhome chúng tôi thống kê được thì
                      hiện nay mức phí quản lý sẽ tùy thuộc vào từng khu vực
                      cũng như tỉnh thành, cơ bản sẽ giao động trong khoảng từ
                      3.000 – 20.000đ/ 1m2/ 1 tháng. Mức giá này đã bao gồm phí
                      bảo vệ, phí bảo dưỡng các tiện ích nội khu và ngoại khu,
                      tuy nhiên chưa bao gồm phí giữ xe của chung cư.
                    </p>
                    <h3 id="nen-mua-can-ho-chung-cu-tu-du-an-hay-da-hoan-thien-la-hieu-qua">
                      Nên mua căn hộ chung cư từ dự án hay đã hoàn thiện là hiệu
                      quả?
                    </h3>
                    <p>
                      Tùy vào khả năng chi trả của bạn mà chúng ta sẽ lựa chọn
                      hình thức mua căn hộ chung cư phù hợp. Với việc mua căn hộ
                      từ lúc dự án bắt đầu thi công thì bạn có thể lựa chọn hình
                      thức thanh toán dần số tiền cho tới khi hoàn thành công
                      trình, điều này sẽ giúp khoản chi phí bạn bỏ ra sẽ được
                      chia nhỏ ra. Mặt khác nếu bạn chọn việc mua căn hộ chung
                      cư đã hoàn thiện thì số tiền bạn bỏ ra một lần sẽ lớn hơn
                      khá nhiều, tuy nhiên đổi lại thì bạn sẽ có chỗ ở ngay mà
                      không cần phải chờ đợi.
                    </p>
                    <h3 id="cac-loai-hinh-dau-tu-bat-dong-san-can-tranh-hien-nay">
                      Các loại hình đầu tư bất động sản cần tránh hiện nay
                    </h3>
                    <p>
                      Hiện nay có khá nhiều các loại hình đầu tư bất động sản mà
                      nếu không tìm hiểu kỹ lưỡng thì nhà đầu tư rất có thể mắc
                      những sai lầm nghiêm trọng. Những loại hình đầu tư đó có
                      thể kể đến như Giao dịch nhà đất qua vi bằng, Giao dịch
                      nhà đất bằng hợp đồng ủy quyền, Giao dịch nhà đất không
                      chính chủ,...
                    </p>

                    <h3 id="mua-ban-cac-can-ho-chung-cu-gia-re-nen-lien-he-san-thuong-mai-nao">
                      Mua bán các căn hộ chung cư giá rẻ nên liên hệ sàn thương
                      mại nào?
                    </h3>
                    <p>
                      Nếu bạn đang có nhu cầu mua hay bán các căn hộ chung cư
                      với với nhiều mức giá thì có thể tìm kiếm những thông tin
                      trên website <strong>Findhome</strong> của chúng tôi.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="refs__right">
                <div className="outstanding">
                  <h2>Mua bán nhà đất nổi bật</h2>
                  <ul>
                    <li>
                      <Link>
                        <p>Hồ Chí Minh</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Hà Nội</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Bình Dương</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Đồng Nai</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Bà rịa vũng tàu</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Đà Nẵng</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Long an</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Khánh hoà</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Lâm đồng</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Quảng Ninh</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Hải Phòng</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Bình Thuận</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Thừa Thiên Huế</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Bình Phước</p>
                        <span>2123</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p>Bình Định</p>
                        <span>2123</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default RealEstateForRent;
