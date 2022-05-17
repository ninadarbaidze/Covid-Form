import React, { useContext } from 'react';
import UserContext from 'state/user-context';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Header,
  Illustration,
  Form,
  Input,
  InputRadio,
  ArrowLeft,
  ArrowRight,
  GridWrapper,
  ButtonWrapper,
} from 'components';
import vaccinate from 'assets/images/vaccinate.png';

const dataRegex = /^\d{2}\/\d{2}\/\d{2}$/;

const CovidSituation = () => {
  const navigate = useNavigate();

  const { formState, submitIndividualForm } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: formState,
  });

  const watchCovid = watch('had_covid');
  const watchAntibody = watch('had_antibody_test');

  const index = 2;
  let disabled = true;

  const onSubmit = (userData) => {
    submitIndividualForm(userData);
    navigate('/vaccinated');
  };

  return (
    <div className='flex flex-col'>
      <Header index={index} />
      <GridWrapper>
        <div className='flex flex-col'>
          <Form>
            <InputRadio
              question='გაქვს გადატანილი Covid-19?*'
              register={register}
              requiredMessage={errors.had_covid?.message}
              options={[
                {
                  value: 'yes',
                  fieldName: 'had_covid',
                  id: 'covid-yes',
                  labelName: 'კი',
                },
                {
                  value: 'no',
                  fieldName: 'had_covid',
                  id: 'covid-no',
                  labelName: 'არა',
                },
                {
                  value: 'have_right_now',
                  fieldName: 'had_covid',
                  id: 'covid-now',
                  labelName: 'ახლა მაქვს',
                },
              ]}
            />
            {watchCovid === 'yes' && (
              <InputRadio
                question='ანტისხეულების ტესტი გაქვს გაკეთებული?*'
                register={register}
                requiredMessage={errors.had_antibody_test?.message}
                options={[
                  {
                    value: 'true',
                    fieldName: 'had_antibody_test',
                    id: 'antibody-yes',
                    labelName: 'კი',
                  },
                  {
                    value: 'false',
                    fieldName: 'had_antibody_test',
                    id: 'antibody-no',
                    labelName: 'არა',
                  },
                ]}
              />
            )}
            {watchAntibody === 'false' && watchCovid === 'yes' && (
              <Input
                labelName='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
                register={register}
                fieldName='covid_sickness_date'
                placeholder='დდ/თთ/წწ'
                patternValue={dataRegex}
                patternValueMessage={'თარიღი შეიყვანე ფორმატით: დდ/თთ/წწ'}
                errorMessage={errors.covid_sickness_date?.message}
              />
            )}
            {watchAntibody === 'true' && watchCovid === 'yes' && (
              <Input
                labelName='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*'
                register={register}
                type='date'
                placeholder='რიცხვი'
                id='test_date'
                fieldName='antibodies.test_date'
                isRequired={false}
              />
            )}
            <div className='mb-2 2xl:mb-6'></div>
            {watchAntibody === 'true' && watchCovid === 'yes' && (
              <Input
                register={register}
                type='number'
                id='antibodies_number'
                fieldName='antibodies.number'
                placeholder='ანტისხეულების რაოდენობა'
                classes='mt-[-6%]'
                isRequired={false}
              />
            )}
          </Form>
        </div>
        <Illustration main={vaccinate} />
      </GridWrapper>
      <ButtonWrapper>
        <ArrowLeft onClick={() => navigate('/personal-information')} />
        <ArrowRight
          disabled={!isValid ? disabled : ''}
          onClick={handleSubmit(onSubmit)}
        />
      </ButtonWrapper>
    </div>
  );
};

export default CovidSituation;
