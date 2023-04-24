import React from 'react'
import css from './Footer.module.css'
import Logo from "../../assets/logo.png"
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
}from "@heroicons/react/outline"
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>
           <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>Fynix</span>
           </div> 

           <div className={css.block}>
            <div className={css.detail}>
                <span>Contact US</span>
                <span className={css.pngLine}>
                    <LocationMarkerIcon className={css.icon}/>
                    <span>559-B Mahyavanshi street, Adajan, Surat </span>
                </span>

                <span className={css.pngLine}>{" "}
                    <PhoneIcon className={css.icon}/>
                    <a href="tel:352-306-4415">352-306-4415</a>
                </span>
                <span className={css.pngLine}>
                    <InboxIcon className={css.icon}/>
                    <a href="mailto:fenil.surti.2708@gmail.com">fenil.surti.2708@gmail.com</a>
                </span>
            </div>
           </div>

           <div className={css.block}>
            <div className={css.detail}>
                <span>Account</span>
                <span className={css.pngLine}>
                    <LoginIcon className={css.icon} />
                    Sign In
                </span>
            </div>
           </div>

           <div className={css.block}>
            <div className={css.detail}>
                <span>Company</span>
                <span className={css.pngLine}>
                    <UsersIcon className={css.icon} />
                    <a href="/about">
                        <p>About US</p>
                    </a>
                </span>
            </div>
           </div>

           <div className={css.block}>
            <div className={css.detail}>
                <span>Resources</span>
                <span className={css.pngLine}>
                    <LinkIcon className={css.icon} />
                    
                        <p>Saftey Privacy & Terms</p>
                    
                </span>
            </div>
           </div>


        </div>
        <div className={css.copyRight}>
            <span>CopyRight @2023 by Fenil🖤</span>
            <span>All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer