import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from "next/image";
import { URL_WHATSAPP } from '@/assets/Constants';

function Footer() {

    const { t } = useTranslation();
    const widgets = t('footer.widgets', { returnObjects: true })
    return (
        <footer className={`-bg-section ${styles.footer__area}`}>
            <div className='footer--top'>
                <div className="container">
                    <div className="row">   
                        <div className="col-lg-6 col-sm-6">
                            <div className="footer--widget company_widget" >
                                <Link className="" href="/" passHref>
                                  <Image 
                                    className="logoBlue" 
                                    src="/img/logo-blue.png"
                                    alt="Desarrolladores de software DreamCode Software" 
                                    title="Logo DreamCode Software" 
                                    width={164}
                                    height={21}
                                    loading="lazy" /> 
                                </Link>
                                <div className={` mt_20 f_p f_600 ${styles.widget_wrap}`}>
                                    <p className="text-start f--size-15 mb-4">
                                      <span className='t_color'>{t('footer.email')}:</span> 
                                      <a href="mailto:info@dreamcodesoft.com"  className="f_500">info@dreamcodesoft.com</a>
                                    </p>
                                    <p className="text-start f--size-15 mb-4">
                                      <span className='t_color'>{t('footer.phone')}:</span> <a href="tel:573155790099"  className="f_500">+57 315 220 62 11</a></p>
                                    <p className="text-start f--size-15 mb-4">
                                      <span className='t_color'> United States, San Francisco</span><br></br><a href="https://goo.gl/maps/DGBgT8RAojBZghKK7"  className="f_400"> 50 California Street, 15th Floor, <br></br>San Francisco, CA 94111-4701,</a></p>
                                    <p className="text-start f--size-15 mb-4">
                                      <span className='t_color'>Colombia, Cali</span><br></br><a href="https://goo.gl/maps/Ync42KoKat2ckRW86"  className="f_400"> Carrera 100 #16-321, <br></br>{t('footer.address')}</a></p>
                                    <p className="text-start f--size-15 mb-4">
                                      <span className='t_color'>Colombia, Bogotá</span><br></br><a href="https://maps.app.goo.gl/prTXytC9PeVvSKYM6"  className="f_400"> Dg. 25g #95a - 85, <br></br>Centro Empresarial Buró 25, Oficina 112</a></p>

                                </div>
                            </div>
                        </div>
                        {       
                        widgets.map((item, i) => {
                            return(
                                <Widget 
                                    key={i}
                                    titleWidget={item.name}
                                    itemsWidget={item.items}
                                />
                            )
                        })
                        }

                    </div>
                </div>
            </div>
            <div className="footer--bottom py-2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <ul className="text-center social_icon list-inline social-list row justify-content-center">
                                <li className="social_iconos "><a className="p_color" href="https://www.facebook.com/dreamcodesoft"><i className="ti-facebook"></i></a></li>
                                <li className="social_iconos "><a className="p_color" href="https://www.linkedin.com/company/dreamcode-software/"><i className="ti-linkedin"></i></a></li>
                                <li className="social_iconos "><a className="p_color" href="https://www.instagram.com/dreamcode_software/"><i className="ti-instagram"></i></a></li>
                                <li className="social_iconos "><a className="p_color" href="https://www.youtube.com/channel/UC2cXutvW1QF4q9NhFHiUZPg"><i className="ti-youtube"></i></a></li>
                                <li className="social_iconos "><a className="p_color btn_wsp" href={URL_WHATSAPP}><i className="fab fa-whatsapp"></i></a></li>
                            </ul>  
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="mb-0 f_400 p_color text-center f--size-15">Copyright © {new Date().getFullYear()} DreamCode Inc -<strong className="f_500">  All rights reserved.</strong> </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

);
}

function Widget ({titleWidget, itemsWidget}) {

    return(
        <div className="col-lg-3 col-md-5">
            <div className="footer--widget ">
                <h3 className="f-title f_600 f--size-15 mb_20 t_color">{titleWidget}</h3>
                <ul className="list-unstyled ">
                    {
                        itemsWidget.map((item, i) => (
                            <li className='mb-2' key={i}>
                              {item.url.endsWith('.pdf') ? (
                                <a href={item.url} className="f--size-15 f_500 read__more_btn" target="_blank" rel="noopener noreferrer">
                                  {item.text}
                                </a>
                              ) : (
                                <Link className="f--size-15 f_500 read__more_btn" href={item.url}>
                                  {item.text}
                                </Link>
                              )}
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )

}

export default Footer;