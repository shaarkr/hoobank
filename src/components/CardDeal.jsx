import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section id='cards' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='hidden sm:block' /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Debitis accusamus adipisci error quod enim voluptates iusto illo
        corrupti numquam commodi delectus aliquam natus nam fuga aperiam. Nobis
        incidunt explicabo debitis accusamus fugiat quis dignissimos odit itaque
        nisi a.
      </p>
      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-full h-full' />
    </div>
  </section>
)

export default CardDeal
