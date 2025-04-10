import React, { useState } from "react";
import style from "../css/ApiPractice.module.css";

export default function ApiPractice() {
    const [유저아이디, 유저아이디변경] = useState(1);
    const [유저, 유저변경] = useState({});
    const [게시글제목, 게시글제목변경] = useState("");
    const [게시글내용, 게시글내용변경] = useState("");
    const [error, setError] = useState("");

    const handlegetuser = () => {
        console.log(유저아이디);
        console.log(게시글제목);
        console.log(게시글내용);

        fetch('https://jsonplaceholder.typicode.com/users/'+유저아이디).then(
            (res) => {
                if(!res.ok) throw new Error('no user')
                res.json();
            }).then((user) => {
                유저변경(user);
                setError(""); // 에러 초기화
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
    };

    

    return (
        <div className={style.container}>
            <h1 className={style.heading}>API 연습</h1>
            <div className={style.section}>
                <input
                    className={style.input}
                    type="number"
                    min="1"
                    max="10"
                    value={유저아이디}
                    onChange={(e) => 유저아이디변경(e.target.value)}
                    placeholder="User ID 1~10"
                />
                <button className={style.button} onClick={handlegetuser}>
                    유저정보GET
                </button>
                <div className={style.card}>
                    <p><strong>유저 이름:</strong> {유저.name}</p>
                    <p><strong>유저 이메일:</strong> {유저.email}</p>
                    <p><strong>유저 전화번호:</strong> {유저.phone}</p>
                </div>
            </div>
            <hr />
            <div className={style.section}>
                <input
                    className={style.input}
                    type="text"
                    placeholder="게시글제목"
                    value={게시글제목}
                    onChange={(e) => 게시글제목변경(e.target.value)}
                />
                <textarea
                    className={style.textarea}
                    placeholder="게시글내용"
                    rows="4"
                    value={게시글내용}
                    onChange={(e) => 게시글내용변경(e.target.value)}
                />
                <button className={style.button}>
                    게시글 작성하기 POST
                </button>
            </div>
            {error &&
            <div className={`${style.error} ${style.response}`}>
                오류: {error}
            </div>}
        </div>
    );
}


//     const [data,setData] = React.useState("test")
//     return (
//         <div>
//             <h2>{변수}</h2>
//             <button
//                 onClick={()=>{setData('테스트')}}
//             >변경</button>
//         </div>;
//     );
// }