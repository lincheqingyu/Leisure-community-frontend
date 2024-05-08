import React from "react";
import "./TP.scss"

const TP = () => {
    let list = [
        {
            index: 1,
            name: "【有奖活动】踏歌春行-校园摄影活动"
        },
        {
            index: 2,
            name: "校园内开展消防安全演习是否有必要"
        },
        {
            index: 3,
            name: "校园安全设施布局位置详情"
        },
        {
            index: 4,
            name: "校园猫猫救助中心等待你的加入"
        },
        {
            index: 5,
            name: "校园外卖柜投入使用，让外卖贼无机可乘"
        },
        {
            index: 6,
            name: "校园门口刷脸系统更新，同学们尽快提交更新照片"
        },
        {
            index: 7,
            name: "考研，考公该如何准备？"
        }

    ]

    return (
        <div className="app">
            <div className="wrap">
                {/* <div className="listTop">校园论坛热搜榜</div> */}
                <ul className="List">
                    {
                        list.map((post, index) => {
                            return (
                                <li key={index} className="list">
                                    {post.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default TP;