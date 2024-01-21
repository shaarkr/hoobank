import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt='discount' className='w-8 h-8' />
        <p className={`${styles.paragraph}`}>
          <span className='text-white'>20%</span> Discount for{' '}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div>

      <div className='flex flex-row items-center justify-between w-full'>
        <h1 className='font-poppins flex-1 font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          The Next <br className='hidden sm:block' />{' '}
          <span className='text-gradient'>Generation</span>
        </h1>
        <div className='hidden mr-0 ss:flex md:mr-4'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Payment Method
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`relative flex flex-1 my-10 md:my-0 ${styles.flexCenter}`}>
      <img src={robot} alt='billing' className='relative z-[5] w-full h-full' />

      <div className='absolute z-0 w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[85%] bottom-40 white__gradient' />
      <div className='absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>

    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero
