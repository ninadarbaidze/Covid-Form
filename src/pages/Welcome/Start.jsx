import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_icon from 'assets/images/logo_icon.png';
import begin_questionnaire from 'assets/images/begin_questionnaire.png';

const Start = () => {
  const navigate = useNavigate();
  const startQuestionnaire = () => {
    navigate('/personal-information');
  };

  return (
    <>
      <div className='flex-col min-h-screen flex items-center justify-center gap-12'>
        <img
          src={logo_icon}
          alt='redberry-logo'
          className='w-28 animate-bounce'
        />
        <div>
          <img
            src={begin_questionnaire}
            alt='begin'
            onClick={startQuestionnaire}
            className={`w-40 cursor-pointer`}
          />
        </div>
      </div>
    </>
  );
};

export default Start;
