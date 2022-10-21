import { useState } from 'react';
import { Button } from '../Button';

export const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  return (
    <section className='bg-gray-900 text-white font-chivo'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-white'>
          Contact Us
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center dark:text-gray-400 sm:text-xl'>
          Enter your details and we will be in touch to discuss your project
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label
              for='email'
              className='block mb-2 text-sm font-mediumtext-gray-300'
            >
              Your email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              id='email'
              className='shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light'
              placeholder='name@example.com'
              required
            />
          </div>
          <div>
            <label
              for='subject'
              className='block mb-2 text-sm font-medium text-gray-300'
            >
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type='text'
              id='subject'
              className='block p-3 w-full text-sm rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light'
              placeholder='Enter your subject here'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              for='message'
              className='block mb-2 text-sm font-medium text-gray-400'
            >
              Your message
            </label>
            <textarea
              value={message}
              onChange={() => setMessage(e.target.value)}
              id='message'
              rows='6'
              className='block p-2.5 w-full text-sm  rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500'
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <Button>Send Message</Button>
        </form>
      </div>
    </section>
  );
};
