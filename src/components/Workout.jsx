import React from 'react'
import SectionWrapper from './SectionWrapper';
import ExerciseCard from './ExerciseCard';

export default function Workout(props) {
  const {workout} = props;
  
  return (
    <SectionWrapper id={'workout'} header={"Започнете со Вашите вежби"} title=
    {['ТЕРЕТАНА', 'КОНЗУЛИ']}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) => {
          return (
            <ExerciseCard index={i} exercise={exercise} key={i}/>
          )
        })}
      </div>
    </SectionWrapper>
  )
}