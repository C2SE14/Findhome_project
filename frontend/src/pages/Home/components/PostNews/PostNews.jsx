import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//
import Heading from "../../../../components/Heading/Heading";
import "./PostNew.scss";
import { postnews } from "../../../../assets/images";

const PostNews = () => {
  return (
    <div className="pn">
      <Heading heading="ĐĂNG TIN" title="NHANH CHÓNG,HIỆU QUẢ" />
      <Container>
        <div className="pn__container">
          <div className="pn__content">
            <h3>
              Trải nghiệm đăng tin và tiếp cận khách hàng tiềm năng tối ưu:
            </h3>
            <ul>
              <li>
                <i className="bi bi-journal-check"></i>
                <p>Hỗ trợ tư vấn nội dung tin đăng hiệu quả</p>
              </li>
              <li>
                <i className="bi bi-laptop"></i>
                <p>Đăng tin đa thiết bị (website, app)</p>
              </li>
              <li>
                <i className="bi bi-chat-dots-fill"></i>
                <p>Chat, video call trực tiếp với KH quan tâm</p>
              </li>
              <li>
                <i className="bi bi-folder-fill"></i>
                <p>Quản lý, thống kê hiệu quả tin đăng đầy đủ</p>
              </li>
            </ul>
            <Link className="button button__thirdary">Đăng tin</Link>
          </div>
          <div className="pn__img">
            <img src={postnews} alt="postnew" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PostNews;
