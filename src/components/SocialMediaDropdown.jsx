import { Dropdown } from 'react-bootstrap';
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
        <Dropdown>
        <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
            Share!
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Header>Share to:</Dropdown.Header>
            <Dropdown.Item>
                <TelegramShareButton url={navigatorURl} title={response?.content+'\n -'+response?.author}>
                    <TelegramIcon syze={iconSize} round/> Telegram
                </TelegramShareButton>
            </Dropdown.Item>
            <Dropdown.Item>
                <WhatsappShareButton url={navigatorURl} title={response?.content+'\n -'+response?.author}>
                    <WhatsappIcon syze={iconSize} round/> Whatsapp
                </WhatsappShareButton>
            </Dropdown.Item>
            <Dropdown.Item>
                <FacebookShareButton url={navigatorURl} quote={response?.content+'\n -'+response?.author}>
                    <FacebookIcon syze={iconSize} round/> Facebook
                </FacebookShareButton>
            </Dropdown.Item>
            <Dropdown.Item>
                <TwitterShareButton url={navigatorURl} title={response?.content+'\n -'+response?.author}>
                    <TwitterIcon syze={iconSize} round/> Twitter
                </TwitterShareButton>
            </Dropdown.Item>
            <Dropdown.Item>
                <EmailShareButton url={navigatorURl} quote={response?.content+'\n -'+response?.author}>
                    <EmailIcon syze={iconSize} round/> Email
                </EmailShareButton>
            </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </>
  )
}

export default SocialMediaDropdown