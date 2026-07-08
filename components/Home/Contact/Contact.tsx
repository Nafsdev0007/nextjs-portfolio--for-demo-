import SectionHeading from '@/components/Helper/SectionHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactInfo, socialLinks } from '@/data'
import { Send } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className='py-16 bg-gray-100 dark:bg-gray-950'>
      <SectionHeading title_1='Get In' title_2='Touch' description="Have a project in mind or just want to say hi? I'd love to hear from you."/>

      <div className="w-[80%] mx-auto">
        <div className="grid gap-12 max-w-5xl mx-auto lg:grid-cols-2">
            {/* Contact info */}

            <div  data-aos="fade-right" data-aos-delay="0" data-aos-anchor-placement="top-center">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Let's talk</h3>
                        <p className="text-muted-foreground">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                    </div>

                    <div className="space-y-4">
                        {contactInfo.map((contact,index)=>(
                            <a href={contact.href} key={index} target='_blank' className='flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group'>
                                <div className="size-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                                    <contact.icon className='size-5 text-blue-500 dark:text-white' />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                                    <p className='font-medium'>{contact.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Social icons */}

                    <div className="">
                        <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                        <div className="flex gap-3">
                            {
                                socialLinks.map((link,index)=>(
                                    <a href={link.href} key={index} target='_blank' className='size-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors' >
                                        <link.icon className='size-5 ' />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact form */}

            <div  data-aos="fade-left" data-aos-delay="150" data-aos-anchor-placement="top-center">
                <form className='bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6'>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className='text-sm font-medium' htmlFor='name'>Name</label>
                            <Input id='name' name='name' placeholder='John Smith' required className='bg-gray-100' />
                        </div>
                          <div className="space-y-2">
                            <label className='text-sm font-medium' htmlFor='subject'>Email</label>
                            <Input id='email' name='email' placeholder='jhon@example.com' required className='bg-gray-100' />
                        </div>
                    </div>
                        <div className="space-y-2">
                            <label className='text-sm font-medium' htmlFor='subject'>Subject</label>
                            <Input id='subject' name='subject' placeholder='Project Inquiry' required className='bg-gray-100' />
                        </div>

                             <div className="space-y-2">
                            <label className='text-sm font-medium' htmlFor='message'>Message</label>
                            <Textarea id='message' name='message' placeholder='Tell me about your project....' rows={5} required className='h-40 bg-gray-100' />
                        </div>
                            
                        <Button type='submit' size={'lg'} className='w-full cursor-pointer' >
                            <Send className='size-4 mr-2 ' />
                            Send Message
                        </Button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
