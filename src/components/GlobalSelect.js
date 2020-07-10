import React from 'react';

export default function GlobalSelect() {
    return (
        <div>
            <div>
                <ul>
                    <button class="button" style={{
                        padding: "15px 32px",

                    }}>ผู้ติดเชื้อรายใหม่</button>
                    <button class="button" style={{
                        padding: "15px 32px",

                    }}>ผู้ติดเชื้อสะสม</button>
                    <button class="button" style={{
                        padding: "15px 32px",

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