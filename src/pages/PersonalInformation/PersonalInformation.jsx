import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UserContext from 'state/user-context';
import {
  Header,
  Illustration,
  Form,
  Input,
  ArrowLeft,
  ArrowRight,
  GridWrapper,
  ButtonWrapper,
} from 'components';
import Required from 'pages/PersonalInformation/components/Required';
import couple from 'assets/images/couple.png';

const mailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(redberry.ge))$/;

const PersonalInformation = () => {
  const navigate = useNavigate();

  const { formState, submitIndividualForm } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      ...formState,
      antibodies: {
        test_date: '',
        number: '',
      },
    },
  });

  const index = 1;
  let disabled = true;

  const onSubmit = (userData) => {
    submitIndividualForm(userData);
    navigate('/covid-situation');
  };

  return (
    <div className='flex flex-col'>
      <Header index={index} />
      <GridWrapper>
        <div className='flex flex-col'>
          <Form>
            <Input
              labelName='სახელი*'
              placeholder='იოსებ'
              register={register}
              fieldName='first_name'
              minValueMessage='სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან'
              errorMessage={errors.first_name?.message}
            />
            <Input
              labelName='გვარი*'
              placeholder='ჯუღაშვილი'
              register={register}
              fieldName='last_name'
              minValueMessage='გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან'
              errorMessage={errors.last_name?.message}
            />
            <Input
              labelName='მეილი*'
              type='email'
              placeholder='fbi@redberry.ge'
              register={register}
              fieldName='email'
              minValueMessage='მეილის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან'
              errorMessage={errors.email?.message}
              patternValue={mailRegex}
              patternValueMessage={
                'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
              }
            />
          </Form>

          <Required />
        </div>
        <div>
          <Illustration main={couple} />
        </div>
      </GridWrapper>
      <ButtonWrapper>
        <ArrowLeft className={'hidden'} />
        <ArrowRight
          disabled={!isValid ? disabled : ''}
          onClick={handleSubmit(onSubmit)}
        />
      </ButtonWrapper>
    </div>
  );
};

export default PersonalInformation;
