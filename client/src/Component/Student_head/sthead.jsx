import React from 'react';
import './sthead.css'
import { useNavigate } from 'react-router-dom';
import logoImage1 from '../../assets/Campuslogo1.jpg';
import logoImage3 from '../../assets/logout.png';


const sthead = () => {

    const navigate = useNavigate();

    const handleStudentProfileClick = () => {
        navigate('/student-profile');
    }
    const handleStudentPanelClick = () => {
        navigate('/student-panel');
    }
    const handleEventShowClick = () => {
        navigate('/event-add');
    }
    const handleAssignDutyShowClick = () => {
        navigate('/student-duty');
    }

    const handleSickLeaveAddClick = () => {
        navigate('/student-sick-leave');
    }

    const handleLeaveRequestAddClick = () => {
        navigate('/student-leave-request');
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
        <div className='stdhead-Container'>


            <div className='stdhead-main-head'>
                <div className='stdhead-main-logo' onClick={handleLogOutClick}>
                    <img src={logoImage1} alt="Rectangle background image" style={logoStyle1} className='stdhead-campus-logo' />
                </div>
                <div className='stdhead-admin-photo' onClick={handleStudentProfileClick}>
                    <h5 className='stdhead-admin'>M.A.Heshan Rashmika</h5>
                </div>
            </div>


            <div className='stdhead-side-panel'>

                <div className="stdhead-dropdown" onClick={handleStudentPanelClick}>
                    <button className="stdhead-topic-btn">
                        Dashboard
                    </button>
                </div>

                <div className="stdhead-dropdown" onClick={handleEventShowClick}>
                    <button className="stdhead-topic-btn">
                        Events
                    </button>
                </div>

                <div className="stdhead-dropdown" onClick={handleAssignDutyShowClick}>
                    <button className="stdhead-topic-btn">
                        My Duty
                    </button>
                </div>

                <div className="stdhead-dropdown" onClick={handleSickLeaveAddClick}>
                    <button className="stdhead-topic-btn">
                        Sick Leave
                    </button>
                </div>

                <div className="stdhead-dropdown" onClick={handleLeaveRequestAddClick}>
                    <button className="stdhead-topic-btn">
                        Leave Request
                    </button>
                </div>

                <div className='stdhead-log-out' onClick={handleLogOutClick}>
                    <img src={logoImage3} alt="Rectangle background image" style={iconStyle1} className='stdhead-log-icon' />
                    <a href='/logout' className='stdhead-lg-out'>Logout</a>
                </div>

                <div className='stdhead-fot-tag'>
                    <h6>COPYRIGHT @ 2023 IUHS CAMPUS</h6>
                </div>

            </div>


        </div>
    )
}

export default sthead
