import React from 'react';
import './head.css'
import { useNavigate } from 'react-router-dom';
import logoImage1 from '../../assets/Campuslogo1.jpg';
import logoImage3 from '../../assets/logout.png';


const Head = () => {

    const navigate = useNavigate();

    const handleAdminProfileClick = () => {
        navigate('/user-profile');
    }
    const handleAdminPanelClick = () => {
        navigate('/admin-dashboard');
    }
    const handleStudentPanelClick = () => {
        navigate('/student-dashboard');
    }

    const handleStudentAddClick = () => {
        navigate('/student-add');
    }
    const handleStudentEditClick = () => {
        navigate('/student-edit');
    }
    const handleStudentListClick = () => {
        navigate('/student-list');
    }

    const handleTeacherAddClick = () => {
        navigate('/teacher-add');
    }
    const handleTeacherEditClick = () => {
        navigate('/teacher-edit');
    }
    const handleTeacherListClick = () => {
        navigate('/teacher-list');
    }
    
    const handleCourseAddClick = () => {
        navigate('/course-add');
    }
    const handleCourseEditClick = () => {
        navigate('/course-edit');
    }
    const handleCourseListClick = () => {
        navigate('/course-list');
    }

    const handleEventAddClick = () => {
        navigate('/event-add');
    }
    const handleEventEditClick = () => {
        navigate('/event-edit');
    }

    const handleAssignDutyClick = () => {
        navigate('/assign-duty');
    }

    const handleSickLeaveClick = () => {
        navigate('/sick-leave');
    }

    const handleLeaveRequestClick = () => {
        navigate('/leave-request');
    }

    const handleLogOutClick = () => {
        navigate('/home');
    }


    const logoStyle1 = {
        width: '100%',
        height: '110px',
    };

    const iconStyle1 = {
        width: '40px',
        height: '40px',
    };

    return (
        <div className='Container'>


            <div className='main-head'>
                <div className='main-logo' onClick={handleLogOutClick}>
                    <img src={logoImage1} alt="Rectangle background image" style={logoStyle1} className='campus-logo' />
                </div>
                <div className='admin-photo' onClick={handleAdminProfileClick}>
                    <h5 className='admin'>Hanwalle Paduma Thero</h5>
                </div>
            </div>


            <div className='side-panel'>

                <div className="dropdown">
                    <button className="topic-btn">
                        Dashboard
                    </button>
                    <div className="dropdown-content" >
                        <div onClick={handleAdminPanelClick}><a href="#">Admin Dashboard</a></div>
                        <div onClick={handleStudentPanelClick}><a href="#">Student Dashboard</a></div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="topic-btn">
                        Students
                    </button>
                    <div className="dropdown-content">
                        <div onClick={handleStudentListClick}><a href="#">Student List</a></div>
                        <div onClick={handleStudentAddClick}><a href="#">Student Add</a></div>
                        <div onClick={handleStudentEditClick}><a href="#">Student Edit</a></div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="topic-btn">
                        Teachers
                    </button>
                    <div className="dropdown-content">
                        <div onClick={handleTeacherListClick}><a href="#">Teachers List</a></div>
                        <div onClick={handleTeacherAddClick}><a href="#">Teachers Add</a></div>
                        <div onClick={handleTeacherEditClick}><a href="#">Teachers Edit</a></div>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="topic-btn">
                        Courses
                    </button>
                    <div className="dropdown-content">
                        <div onClick={handleCourseListClick}><a href="#">Courses List</a></div>
                        <div onClick={handleCourseAddClick}><a href="#">Courses Add</a></div>
                        <div onClick={handleCourseEditClick}><a href="#">Courses Edit</a></div>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="topic-btn">
                        Events
                    </button>
                    <div className="dropdown-content">
                        <div onClick={handleStudentPanelClick}><a href="#">Events Add</a></div>
                        <div onClick={handleStudentPanelClick}><a href="#">Events Edit</a></div>
                    </div>
                </div>

                <div className="dropdown" onClick={handleAssignDutyClick}>
                    <button className="topic-btn">
                        Assing Duty
                    </button>
                </div>

                <div className="dropdown" onClick={handleSickLeaveClick}>
                    <button className="topic-btn">
                        Sick Leave
                    </button>
                </div>

                <div className="dropdown" onClick={handleLeaveRequestClick}>
                    <button className="topic-btn">
                        Leave Request
                    </button>
                </div>

                <div className='log-out' onClick={handleLogOutClick}>
                    <img src={logoImage3} alt="Rectangle background image" style={iconStyle1} className='log-icon' />
                    <a href='/logout' className='lg-out'>Logout</a>
                </div>

                <div className='fot-tag'>
                    <h6>COPYRIGHT @ 2023 IUHS CAMPUS</h6>
                </div>

            </div>


        </div>
    )
}

export default Head
