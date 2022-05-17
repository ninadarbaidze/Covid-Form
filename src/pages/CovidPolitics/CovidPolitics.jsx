import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from 'state/user-context';
import { useForm } from 'react-hook-form';
import useFetch from 'pages/CovidPolitics/hooks/useFetch';
import {
  Header,
  Illustration,
  Form,
  InputRadio,
  GridWrapper,
  ButtonWrapper,
} from 'components';
import Textarea from 'pages/CovidPolitics/components/Textarea';
import SubmitButton from 'pages/CovidPolitics/components/SubmitButton';
import bike from 'assets/images/bike.png';

const CovidPolitics = () => {
  const {
    formState,
    submitIndividualForm,
    checkAndDeleteEmtyInputs,
    convertStringToIntegar,
    convertHadCovidToBoolean,
    convertAntibodyTestToBoolean,
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', defaultValues: formState });

  const navigate = useNavigate();
  const index = 4;

  const { sendRequest } = useFetch();

  const onSubmit = (userData) => {
    submitIndividualForm(userData);
    convertStringToIntegar(userData);
    convertHadCovidToBoolean(userData);
    convertAntibodyTestToBoolean(userData);
    checkAndDeleteEmtyInputs(userData);

    sendRequest({
      url: 'https://covid19.devtest.ge/api/create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userData,
    });
    navigate('/thank-you');
  };

  return (
    <div className='flex flex-col'>
      <Header index={index} />
      <GridWrapper>
        <div className='flex flex-col sm:overflow-auto md:h-91 2xl:h-96 '>
          <Form>
            <p className='mb-12 xs:text-base 2xl:text-2xl '>
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი — ჩვენთან გადმოსვლის. პანდემიის პერიოდში ერთმანეთსაც იშვიათად
              ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
            <InputRadio
              question='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'
              register={register}
              requiredMessage={errors.non_formal_meetings?.message}
              options={[
                {
                  value: 'twice_a_week',
                  fieldName: 'non_formal_meetings',
                  id: 'twiceaWeek',
                  labelName: 'კვირაში ორჯერ',
                },
                {
                  value: 'once_a_week',
                  fieldName: 'non_formal_meetings',
                  id: 'onceaWeek',
                  labelName: 'კვირაში ერთხელ',
                },
                {
                  value: 'once_in_a_two_weeks',
                  fieldName: 'non_formal_meetings',
                  id: 'onceInTwoWeek',
                  labelName: 'ორ კვირაში ერთხელ',
                },
                {
                  value: 'once_in_a_month',
                  fieldName: 'non_formal_meetings',
                  id: 'onceaMonth',
                  labelName: 'თვეში ერთხელ',
                },
              ]}
            />

            <InputRadio
              question='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'
              register={register}
              requiredMessage={errors.number_of_days_from_office?.message}
              options={[
                {
                  value: 0,
                  fieldName: 'number_of_days_from_office',
                  id: 'zero',
                  labelName: '0',
                },
                {
                  value: 1,
                  fieldName: 'number_of_days_from_office',
                  id: 'one',
                  labelName: '1',
                },
                {
                  value: 2,
                  fieldName: 'number_of_days_from_office',
                  id: 'two',
                  labelName: '2',
                },
                {
                  value: 3,
                  fieldName: 'number_of_days_from_office',
                  id: 'three',
                  labelName: '3',
                },
                {
                  value: 4,
                  fieldName: 'number_of_days_from_office',
                  id: 'four',
                  labelName: '4',
                },
                {
                  value: 5,
                  fieldName: 'number_of_days_from_office',
                  id: 'five',
                  labelName: '5',
                },
              ]}
            />
            <Textarea
              register={register}
              labelName={'რას ფიქრობ ფიზიკურ შეკრებებზე?'}
              fieldName={'what_about_meetings_in_live'}
              errorMessage={errors.physicalMeetings?.message}
            />
            <Textarea
              register={register}
              labelName={
                'რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'
              }
              fieldName={'tell_us_your_opinion_about_us'}
              errorMessage={errors.opinionAboutRed?.message}
            />
          </Form>
        </div>
        <Illustration main={bike} />
      </GridWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={handleSubmit(onSubmit)} />
      </ButtonWrapper>
    </div>
  );
};

export default CovidPolitics;
