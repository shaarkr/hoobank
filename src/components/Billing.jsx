import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id='products' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt='billing' className='relative z-10 w-full h-full' />

      <div className='absolute z-[0] -left-1/2 top-0 h-1/2 w-1/2 rounded-full white__gradient' />
      <div className='absolute z-[3] -left-1/2 bottom-0 h-1/2 w-1/2 rounded-full pink__gradient' />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className='hidden sm:block' /> billing &amp;
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Quia rem, sed, laboriosam asperiores consequuntur architecto error Lorem
        ipsum dolor sit amet. veniam fuga id ipsum ut sunt doloribus enim
        deserunt nobis aperiam praesentium non.
      </p>

      <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
        <img
          src={apple}
          alt='apple_store'
          className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
        />
        <img
          src={google}
          alt='google_play'
          className='w-[128px] h-[42px] object-contain cursor-pointer'
        />
      </div>
    </div>
  </section>
)

export default Billing
