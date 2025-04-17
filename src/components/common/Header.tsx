"use client"

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ConnectBtn from '../connectBtn'
import { navData } from '@/configs/index'

const Header = () => {

  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center py-4">
        <div className='w-1/4'>logo</div>
        <div className='w-2/4 hidden md:flex justify-center'>
          <div className="flex items-center space-x-12">
            {navData.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(null)}
              >
                <Link
                  href={item.path}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoverIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  {hoverIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 -z-10 rounded-lg blur-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div></div>
        <div className='w-1/4 flex justify-end'>
          <ConnectBtn />
        </div>
      </div>
    </motion.nav>
  )
}

export default Header