import React from "react"

const ContactButtonsAside = () => {
  return (
    <div className="contact-buttons-aside">
      <a className="contact-buttons-aside_link" href="viber://chat/?number=%2B380501000845">
        <div className="contact-buttons-aside_link_img viber"> </div>
      </a>
      <a className="contact-buttons-aside_link" href="tel:+380501000845">
        <div className="contact-buttons-aside_link_img tel"> </div>
      </a>
    </div>
  )
}

export default ContactButtonsAside
