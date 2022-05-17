import React, { useReducer, useEffect } from 'react';
import UserContext from 'state/user-context';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  had_covid: '',
  had_antibody_test: '',
  covid_sickness_date: '',
  antibodies: {
    test_date: '',
    number: '',
  },
  had_vaccine: '',
  vaccination_stage: '',
  i_am_waiting: '',
  non_formal_meetings: '',
  number_of_days_from_office: '',
  tell_us_your_opinion_about_us: '',
  what_about_meetings_in_live: '',
};

const emptyInputList = [
  'had_antibody_test',
  'covid_sickness_date',
  'antibodies',
  'vaccination_stage',
  'i_am_waiting',
  'tell_us_your_opinion_about_us',
  'what_about_meetings_in_live',
];

const checkAndDeleteEmtyInputs = (data) => {
  return emptyInputList.map((input) => {
    return data[input] === '' ||
      data[input] === null ||
      data[input] === undefined ||
      data[input].number === '' ||
      data[input].test_date === ''
      ? delete data[input]
      : data[input];
  });
};

const convertStringToIntegar = (data) => {
  data.number_of_days_from_office = parseInt(data.number_of_days_from_office);
  data.antibodies.number = parseInt(data.antibodies.number);

  return data;
};

const convertAntibodyTestToBoolean = (data) => {
  if (data.had_antibody_test === 'true') {
    return (data.had_antibody_test = true);
  } else if (data.had_antibody_test === 'false') {
    return (data.had_antibody_test = false);
  } else {
    return (data.had_antibody_test = '');
  }
};

const convertHadCovidToBoolean = (data) => {
  data.had_vaccine = data.had_vaccine === 'true';
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        ...action.payload,
      };
  }
};

const UserProvider = (props) => {
  let localData;
  const [formState, dispatchFormAction] = useReducer(
    reducer,
    initialState,
    () => {
      localData = localStorage.getItem('userInput');
      return JSON.parse(localData);
    }
  );

  useEffect(() => {
    localStorage.setItem('userInput', JSON.stringify(formState), [formState]);
  });

  const submitIndividualForm = (data) => {
    dispatchFormAction({
      type: 'ADD',
      payload: data,
    });
  };

  return (
    <div>
      <UserContext.Provider
        value={{
          formState,
          submitIndividualForm,
          checkAndDeleteEmtyInputs,
          convertStringToIntegar,
          convertAntibodyTestToBoolean,
          convertHadCovidToBoolean,
        }}
      >
        {props.children}
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
