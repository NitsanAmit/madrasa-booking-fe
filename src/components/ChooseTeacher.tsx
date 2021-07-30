import React from 'react';

export function ChooseTeacher() {

    return (
        <>
            <div className="chooseTeacherTitle">בחר מתרגל/ת</div>
            <div className="teachersContainer">
                <div className="teacherCard">
                    <img src="teacher.png" />
                    <div className="teacherName">{teacherName}</div>
                    <div className="teacherDescription">{teacherDescription}</div>
                    <button className="chooseTeacher">בחר כמדריכה</button>
                </div>
                <div className="teacherCard">
                    <img src="teacher.png" />
                    <div className="teacherName">{teacherName}</div>
                    <div className="teacherDescription">{teacherDescription}</div>
                    <button className="chooseTeacher">בחר כמדריכה</button>
                </div>
                <div className="teacherCard">
                    <img src="teacher.png" />
                    <div className="teacherName">{teacherName}</div>
                    <div className="teacherDescription">{teacherDescription}</div>
                    <button className="chooseTeacher">בחר כמדריכה</button>
                </div>
            </div>
        </>
    );
}

const teacherName = "שירין אל-עבד"
const teacherDescription = "למדתי ערבית מדוברת לפני 6 שנים ומאז אני לא מפסיקה לדבר ערבית עם חברות ומשפחה, אשמח לעזור לכם במסע אחר תקשורת טובה ומקרבת יותר (ואני שוברת את ליבו של דורון)"
