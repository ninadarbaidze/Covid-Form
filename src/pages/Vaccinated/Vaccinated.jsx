import React, { useContext } from 'react';
import UserContext from 'state/user-context';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Header,
  Illustration,
  Form,
  InputRadio,
  ArrowLeft,
  ArrowRight,
  GridWrapper,
  ButtonWrapper,
} from 'components';
import Paragraph from 'pages/Vaccinated/components/Paragraph';
import doctor from 'assets/images/doctor.png';

const link = 'https://booking.moh.gov.ge/';

const Vaccinated = () => {
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

  const watchIsVaccinated = watch('had_vaccine');
  const watchIsVaccineSituation = watch('vaccination_stage');
  const waitingWaiting = watch('i_am_waiting');

  const index = 3;
  let disabled = true;

  const onSubmit = (userData) => {
    submitIndividualForm(userData);
    navigate('/covid-politics');
  };

  return (
    <div className='flex flex-col'>
      <Header index={index} />
      <GridWrapper>
        <div className='flex flex-col'>
          <Form>
            <InputRadio
              question='უკვე აცრილი ხარ?*'
              register={register}
              requiredMessage={errors.had_vaccine?.message}
              options={[
                {
                  value: 'true',
                  fieldName: 'had_vaccine',
                  id: 'vaccinate-yes',
                  labelName: 'კი',
                },
                {
                  value: 'false',
                  fieldName: 'had_vaccine',
                  id: 'vaccinate-no',
                  labelName: 'არა',
                },
              ]}
            />
            {watchIsVaccinated === 'true' && (
              <InputRadio
                question='აირჩიე რა ეტაპზე ხარ*'
                register={register}
                requiredMessage={errors.vaccination_stage?.message}
                options={[
                  {
                    value: 'first_dosage_and_registered_on_the_second',
                    fieldName: 'vaccination_stage',
                    id: 'first',
                    labelName: 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე',
                  },
                  {
                    value: 'fully_vaccinated',
                    fieldName: 'vaccination_stage',
                    id: 'fully',
                    labelName: 'სრულად აცრილი ვარ',
                  },
                  {
                    value: 'first_dosage_and_not_registered_yet',
                    fieldName: 'vaccination_stage',
                    id: 'noSecond',
                    labelName: 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე',
                  },
                ]}
              />
            )}

            {watchIsVaccinated === 'false' && (
              <InputRadio
                question='რას ელოდები?*'
                register={register}
                requiredMessage={errors.i_am_waiting?.message}
                options={[
                  {
                    value: 'registered_and_waiting',
                    fieldName: 'i_am_waiting',
                    id: 'registered',
                    labelName: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
                  },
                  {
                    value: 'not_planning',
                    fieldName: 'i_am_waiting',
                    id: 'notPlanning',
                    labelName: 'არ ვგეგმავ',
                  },
                  {
                    value: 'had_covid_and_planning_to_be_vaccinated',
                    fieldName: 'i_am_waiting',
                    id: 'planning',
                    labelName: 'გადატანილი მაქვს და ვგეგმავ აცრას',
                  },
                ]}
              />
            )}
            {watchIsVaccineSituation ===
              'first_dosage_and_not_registered_yet' &&
              watchIsVaccinated === 'true' && (
                <Paragraph
                  firstLine='რომ არ გადადო,'
                  secondLine='ბარემ ახლავე დარეგისტრირდი'
                  link={`👉 ${link}`}
                />
              )}

            {waitingWaiting === 'had_covid_and_planning_to_be_vaccinated' &&
              watchIsVaccinated === 'false' && (
                <Paragraph
                  firstLine='ახალი პროტოკოლით კოვიდის გადატანიდან 1'
                  secondLine='თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.'
                  thirdLine='👉 რეგისტრაციის ბმული'
                  link={link}
                />
              )}
          </Form>
        </div>
        <Illustration main={doctor} />
      </GridWrapper>
      <ButtonWrapper>
        <ArrowLeft onClick={() => navigate('/covid-situation')} />
        <ArrowRight
          disabled={!isValid ? disabled : ''}
          onClick={handleSubmit(onSubmit)}
        />
      </ButtonWrapper>
    </div>
  );
};

export default Vaccinated;
