import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'

const Footer = () => (
  <section
    id='footer'
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex flex-col justify-start flex-1 mr-10'>
        <img
          src={logo}
          alt='hoobank'
          className='w-[266px] h-[72px] object-contain'
        />
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
          A new way to make payments easy, reliable and secure.
        </p>
      </div>

      <div className='flex flex-[1.5] w-full flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map(footerLink => (
          <div
            key={footerLink.title}
            className='flex flex-col my-4 ss:my-0 min-w-[150px]'
          >
            <h4 className='font-medium font-poppins text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='mt-4 list-none'>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-normal font-poppins text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='flex flex-col items-center justify-between w-full pt-6 md:flex-row border-t-[1px] border-t-[#3f3e45]'>
      <p className='font-normal font-poppins text-center text-[18px] leading-[27px] text-white'>
        2024 &copy; Hoobank. All rights reserved.
      </p>

      <div className='flex flex-row mt-6 md:mt-0'>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Footer
