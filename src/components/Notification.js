import React from 'react'

const Notification = ({ showNotification }) => {
    return (
<div className={`notification-container ${showNotification ? 'show' : ''} `}>
      <p dir="rtl">تو قبلا این حرفو وارد کردی</p>
    </div>
    )
}

export default Notification
