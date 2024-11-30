import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/paljo';
import Button from './Button';


function Header(props) {

  const {index, title, description} = props;

  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='flex items-center justify=center gap-2'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
          <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  ) 
}


export default function Generator(props) {

  const {poison, SetPoison, muscles, SetMuscles, goal, setGoal, updateWorkout} = props;

  const [showModal, setShowModal] = useState(false);
  

  function toggleModal() {
    setShowModal(!showModal);

  }

    function updateMuscles(muscleGroup) {
      if (muscles.includes(muscleGroup)) {
        SetMuscles(muscles.filter(val => val !== muscleGroup));
        return;
      }
     
      if (muscles.length > 2) {
          return;
      } 

      if (poison !== 'individual') {
          SetMuscles([muscleGroup]);
          setShowModal(false);
          return;
      }

      

      SetMuscles([...muscles, muscleGroup]);
      if (muscles.length === 2) {
          setShowModal(false);
      }

    }



  return (
    <SectionWrapper id={'generate'} header={"Конфигурација на вежби"} title=
        {['Push', 'HARDER', ' than yesterday']}>
        
        <Header index={"01"} title={"Селектирајте го типот на вежби"}
                description={"Изберете ги вежбите според Вашиот план"}/>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

              {Object.keys(WORKOUTS).map((type, typeIndex) => {
                return (                   
                <button onClick={() => {
                  SetMuscles([]);
                  SetPoison(type)
                  }} className='bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg' key={typeIndex}>
                    <p className='capitalize'>{type.replaceAll('_',' ')}</p>
                 </button>
                )        
          })}
          </div>
          <Header index={"02"} title={"Конфигурација на тип на вежби"}
                description={"Изберете ги мускулите за кои целите во Вашиот план."}/>

            <div className='bg-slate-950 flex flex-col border border-solid border-blue-400 rounded-lg'>

             <button onClick={toggleModal} className='relative flex py-3 items-center justify-center'>
              <p className='capitalize'>{ muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
              <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
             </button>
             {showModal && (
                  <div className='flex flex-col px-3 pb-3'>
                    {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                      return (
                        <button key={muscleGroupIndex} onClick={() => {
                            updateMuscles(muscleGroup); 
                        }} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : '')}>
                          <p className='uppercase'>{muscleGroup.replaceAll('_',' ')}</p>
                        </button>
                      )
                    })  }</div>
             )}
          </div>
          <Header index={"03"} title={"Уживајте во денешните вежби во теретана КОНЗУЛИ"}
                description={"Селектирајте ја целта од направениот избор"}/>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

              {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
             return (                   
              <button onClick={() => {
                setGoal(scheme)
                }} className='bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg' key={schemeIndex}>
                  <p className='capitalize'>{scheme.replaceAll('_',' ')}</p>
               </button>
              )        
          })}
          </div>
          <Button func={updateWorkout} text={'Резултати од направениот избор'}></Button>
    </SectionWrapper>
    
  
  )
}
