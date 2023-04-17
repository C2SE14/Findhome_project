import React from "react";
import "./listnew.scss";
import ListNewData from "../../assets/data/ListNewData";
const ListNew = () => {
     const listdata = ListNewData;
     return (
          <div className="listnew">
               <div className="list-container">
                    <p className="navigation">
                         <span>Quản lý tin /</span> Danh sách tin
                    </p>
                    <p className="heading-title">Danh sác tin</p>
                    <div className="content">
                         <table className="table">
                              <thead>
                                   <tr>
                                        <th scope="col" className="col-1">
                                             STT
                                        </th>
                                        <th scope="col" className="col-5">
                                             Tiêu đề tin
                                        </th>
                                        <th scope="col" className="col-2">
                                             Loại tin
                                        </th>
                                        <th scope="col" className="col-3">
                                             Thời hạn tin
                                        </th>

                                        <th scope="col" className="col-1">
                                             Trạng thái
                                        </th>
                                   </tr>
                              </thead>
                              {listdata?.map((item) => (
                                   <tbody key={item.stt}>
                                        <tr>
                                             <th scope="row">{item.stt}</th>
                                             <td>{item.titleNew}</td>
                                             <td>{item.typeNew}</td>
                                             <td>{item.listingPeriod}</td>
                                             <td>{item.status}</td>
                                        </tr>
                                   </tbody>
                              ))}
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default ListNew;
