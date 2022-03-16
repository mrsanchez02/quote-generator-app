import React from 'react'
import {
    EmailShareButton,
    TelegramShareButton,
    TelegramIcon,
    FacebookShareButton,
    FacebookIcon,
    EmailIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from "react-share";

const SocialMediaDropdown = ({response}) => {

    const navigatorURl = window.location
    const iconSize = 16

    return (
        <>
            <div className="dropdown dropend">
            <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Share!
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                <li><h6 className='dropdown-header'>Share to:</h6></li>
                <li>
                    <TelegramShareButton url={navigatorURl} title={response?.content+'\n -'+response?.author}>
                            <TelegramIcon syze={iconSize} round/> Telegram
                    </TelegramShareButton>
                </li>
                <li>
                    <WhatsappShareButton url={navigatorURl} title={response?.content+'\n -'+response?.author}>
                            <WhatsappIcon syze={iconSize} round/> Whatsapp
                    </WhatsappShareButton>
                </li>
                <li>
                    <FacebookShareButton url={navigatorURl} quote={response?.content+'\n -'+response?.author}>
                            <FacebookIcon syze={iconSize} round/> Facebook
                    </FacebookShareButton>
                </li>
                <li>
                    <TwitterShareButton url={navigatorURl} title={response?.content+'\n -'+response?.author}>
                            <TwitterIcon syze={iconSize} round/> Twitter
                    </TwitterShareButton>
                </li>
                <li>
                    <EmailShareButton url={navigatorURl} quote={response?.content+'\n -'+response?.author}>
                            <EmailIcon syze={iconSize} round/> Email
                    </EmailShareButton>
                </li>
            </ul>
            </div>
        </>
  )
}

export default SocialMediaDropdown
