import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 
                    items-center justify-center max-w-[800px]
                    w-full mx-auto p-4'>
        <div className='flex flex-col gap-4 justify-center items-center'>               
                <p>Уживајте во вежбањето во најдобрата теретана во Македонија</p>
                <h1 className='uppercase font-bold text-4xl 
                                sm:text-5xl
                                 md:text-6xl
                                 lg:text-7xl '>Konzuli <span>GYM</span></h1>
        </div>       
        <p className='text-sm mdLtext-base font-light '>It's simple, if it jiggles, it's fat... - Arnold Schwarzenegger</p>
        <Button func={() => {window.location.href = '#generate'}} text={'Влезете во светот на Теретана Конзули'}></Button>
        <p>тест-верзија 2.7 Пеце..</p>
    </div>
  )
}
