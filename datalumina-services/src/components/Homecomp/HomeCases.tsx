"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface Case {
  id: number
  category: string
  title: string
  description: string
  image: string
  logo?: string
}

const cases: Case[] = [
  {
    id: 1,
    category: "Software Development",
    title: "Delivering real-time coin data to millions of Crypto...",
    description:
      "Crypto Insiders, the largest cryptocurrency news platform in the Netherlands, attracts over 2 million...",
    image: "/Images/p1.jpg",
    logo: "/placeholder.svg?height=100&width=100&text=CI",
  },
  {
    id: 2,
    category: "AI Engineering",
    title: "Transforming BLANK's customer service with AI",
    description:
      "BLANK is a prominent e-commerce brand focused on sunglasses, with over 200k customers around the world. Their customer support team faced challenge in managing high-ticket volumes while maintaining",
    image: "/Images/p2.jpg",
  },
  {
    id: 3,
    category: "YouTube Collaboration",
    title: "Partnering with Timescale to simplify embeddings for AI developers",
    description:
      "This case highlights the collaboration with Timescale to showcase their innovative PostgreSQL extensions, pgvectorscale and pgAI. Through a series of tutorials...",
    image: "/Images/p3.jpg",
  },
]

export default function CasesSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setActiveCard(id)
  }

  return (
    <section className="relative bg-[#0a0a13] py-24 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-5%] right-[-10%]">
          <div className="w-[600px] h-[400px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-70 blur-[100px]" />
        </div>
       
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-light text-white mb-6"
        >
          Cases
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 text-lg mb-12 max-w-3xl font-light"
        >
          Our track record spans from initial strategy development to full implementation, always focusing on practical
          outcomes that drive solid business value. Here are some of our most recent projects:
        </motion.p>

        <div className="space-y-6">
          {/* Featured Case */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative group rounded-3xl overflow-hidden bg-[#0a0a13] border border-[#1a2747]"
              onMouseMove={(e) => handleMouseMove(e, cases[0].id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(113, 153, 255, 0.1), transparent 40%)`,
                }}
              />
              <div className="grid grid-cols-[2fr,3fr] min-h-[400px]">
                <div className="p-10 flex flex-col justify-between relative z-10">
                  <div>
                    <span className="text-blue-400 mb-4 block">{cases[0].category}</span>
                    <h3 className="text-3xl font-light text-white mb-4">{cases[0].title}</h3>
                    <p className="text-gray-400 font-light">{cases[0].description}</p>
                  </div>
                  <motion.button whileHover={{ x: 5 }} className="flex items-center gap-2 text-white mt-6 font-light">
                    READ MORE <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a13] to-transparent z-10" />
                  <Image
                    src={cases[0].image || "/placeholder.svg"}
                    alt={cases[0].title}
                    fill
                    className="object-cover"
                  />
                  {cases[0].logo && (
                    <div className="absolute top-10 right-10 z-20">
                      <Image
                        src={cases[0].logo || "/placeholder.svg"}
                        alt="Company logo"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-500/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Other Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Bottom glow effect for 3rd and 4th cards */}
            <div className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2">
        <div className="w-[500px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
      </div>


            {cases.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <motion.div
                  className="relative group rounded-3xl overflow-hidden bg-[#0a0a13] border border-[#1a2747] h-[600px]"
                  onMouseMove={(e) => handleMouseMove(e, item.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(113, 153, 255, 0.1), transparent 40%)`,
                    }}
                  />
                  <div className="relative h-72">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-[calc(100%-18rem)] relative z-10">
                    <div>
                      <span className="text-blue-400 mb-4 block font-light">{item.category}</span>
                      <h3 className="text-xl font-light text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400 text-sm font-light">{item.description}</p>
                    </div>
                    <motion.button whileHover={{ x: 5 }} className="flex items-center gap-2 text-white mt-6 font-light">
                      READ MORE <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative group rounded-3xl overflow-hidden bg-[#0a0a13] border border-[#1a2747] h-[600px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
              <div className="absolute top-[-50%] right-[-20%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]" />
              <div className="p-6 flex flex-col h-full justify-between relative z-10">
                <div>
                  <span className="text-blue-400 mb-4 block font-light">Contact Us</span>
                  <h3 className="text-2xl font-light text-white mb-6">
                    Let's talk about how we can help you get from complexity to capability
                  </h3>
                </div>
                <motion.button
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3b3b88] to-[#0a0a13] hover:from-[#0a0a13] hover:to-[#3b3b88] border border-[#8c8cea]  text-white px-6 py-3 rounded-full font-medium self-start"
                >
                  Contact us <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

