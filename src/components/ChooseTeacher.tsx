import React from 'react';

export function ChooseTeacher() {
  
    return (
        <>
            <div className="chooseTeacherTitle">Choose teacher</div>
            <div className="teachersContainer">
                <div className="teacherCard">
                    <img src="teacher.png" />
                    <div className="teacherName">Someone someone</div>
                    <div className="teacherDescription">I do stuff</div>
                    <button className="chooseTeacher">Choose teacher</button>
                </div>
                <div className="teacherCard">
                    <img src="teacher.png" />
                    <div className="teacherName">Someone someone</div>
                    <div className="teacherDescription">I do stuff</div>
                    <button className="chooseTeacher">Choose teacher</button>
                </div>
                <div className="teacherCard">
                    <img src="teacher.png" />
                    <div className="teacherName">Someone someone</div>
                    <div className="teacherDescription">I do stuff</div>
                    <button className="chooseTeacher">Choose teacher</button>
                </div>
            </div>
        </>
    );
}
