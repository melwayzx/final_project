import React from 'react';
import styled from 'styled-components';
export default function GlobalSelect() {
    return (
        <div>
            <div style={{
                display: "flex",
                paddingLeft: "600px",
                // background: "#E7E7E7",
            }}>
                <ul>
                    <button class="button" style={{
                        padding: "15px 32px",
                        background: "white",
                        borderRadius: "15px",
                        border: "none",
                        background: "#F9BFBB",
                        // border: "4px solid  #F98981",
                        fontSize: "16px",
                        cursor: "pointer",
                        hover: "#3e8e41",
                        fontFamily: "Sukhumvit Set",
                    }}
                    // onClick={}
                    >ผู้ติดเชื้อใหม่รายวัน</button>

                    <button class="button" style={{
                        padding: "15px 32px",
                        background: "#F98981",
                        fontFamily: "Sukhumvit Set",
                        fontSize: "16px",
                        border: "none",
                        fontWeight: "300",
                        borderRadius: "15px",
                    }}>ผู้ติดเชื้อสะสม</button>

                    <button class="Wrapper" style={{
                        padding: "15px 32px",
                        background: "#FF3E32 ",
                        fontFamily: "Sukhumvit Set",
                        fontSize: "16px",
                        border: "none",
                        fontWeight: 200,
                        borderRadius: "15px",
                    }}>ตาย</button>

                </ul>
            </div>
        </div>
    )
}
const ul = {
    // listStyleType: none,
    margin: 0,
    padding: 0,
}
const button = {
    transitionDuration: "0.4s",

}
