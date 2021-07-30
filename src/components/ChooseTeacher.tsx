import React from 'react';

function App() {
  
    return (
        <div className="mainContainer">
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
        </div>
    );
}

export default App;
