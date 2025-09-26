import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { LuPhoneCall } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'

function ContactDetail() {
  const contactDetails = [
    {
      icon: MdOutlineMail,
      bg: 'bg-gradient-to-r from-sky-600 to-blue-600',
      label: 'Email',
      value: 'muhammedshoaib06@gmail.com',
      href: 'mailto:muhammedshoaib06@gmail.com',
      ariaLabel: 'Email'
    },
    {
      icon: LuPhoneCall,
      bg: 'bg-gradient-to-r from-green-400 to-green-500',
      label: 'Phone',
      value: '+91 9199963035',
      href: 'tel:+919199963035',
      ariaLabel: 'Phone'
    },
    {
      icon: IoLocationOutline,
      bg: 'bg-gradient-to-r from-purple-500 to-rose-500',
      label: 'Location',
      value: 'Gopal Ganj, Bihar (India)',
      href: 'https://maps.google.com/?q=Gopal+Ganj+Bihar',
      ariaLabel: 'Location'
    }
  ]

  const iconClasses =
    'w-16 h-16 flex justify-center items-center rounded-2xl shadow-lg transition-transform duration-200 hover:scale-105'

  return (
    <section className="flex flex-col gap-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-slate-200">Let&apos;s Work Together</h2>
      <p className="text-slate-500 text-lg">
        I&apos;m always excited about new opportunities and interesting projects.
        Whether you have a specific idea in mind or need guidance on your next
        digital venture, I&apos;d love to hear from you.
      </p>

      {/* Contact List */}
      <div className="flex flex-col gap-8">
        {contactDetails.map(({ icon: Icon, bg, label, value, href, ariaLabel }, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className={`${bg} ${iconClasses}`} aria-label={ariaLabel}>
              <Icon color="white" size={30} />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-300 font-medium">{label}</span>
              <a
                href={href}
                className="text-lg font-medium text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                target={label === 'Location' ? '_blank' : undefined}
                rel={label === 'Location' ? 'noopener noreferrer' : undefined}
              >
                {value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactDetail