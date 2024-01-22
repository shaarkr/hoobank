import { clients } from '../constants'
import styles from '../style'

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full gap-6 md:gap-0`}>
      {clients.map(client => (
        <div
          key={client.id}
          className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt='client'
            className='object-contain w-[192px] h-[100px]'
          />
        </div>
      ))}
    </div>
  </section>
)

export default Clients
