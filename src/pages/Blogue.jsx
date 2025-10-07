import React, { useState } from 'react'
import BlogCard from '../components/blogue/BlogCard'
import Footer from '../components/footer/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { key: 'tout', label: 'Tout' },
  { key: 'creation', label: 'Création' },
  { key: 'tech', label: 'Tech & IA' },
  { key: 'conseil', label: 'Conseil' },
]

const posts = [
  {
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    date: '9 mai 2025',
    title: "PUB PRÉDICTIVE: L’IA RÉVOLUTIONNE LE CIBLAGE",
    category: 'tech'
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    date: '9 mai 2025',
    title: "CONSEIL & RELATION CLIENT: UN DUO QUI NE SE BRIEFE PAS, QUI SE CONSTRUIT",
    category: 'conseil'
  }
]

const Blogue = () => {
  const [activeCategory, setActiveCategory] = useState('tout')

  useGSAP(() => {
    gsap.from('.blog-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.blog-card',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  const visiblePosts = posts.filter(post =>
    activeCategory === 'tout' || post.category === activeCategory
  )

  return (
    <div className='px-4 lg:px-16 pt-12'>
      {/* Title and Categories */}
      <div className='flex flex-col lg:flex-row justify-between items-center mb-10'>
        <div className='flex items-center text-2xl font-bold mb-4 lg:mb-0'>
          <span className='w-3 h-3 rounded-full bg-black inline-block mr-2'></span>
          <span>Blogue</span>
        </div>
        <div className='flex flex-wrap items-center gap-2 text-base font-medium'>
          <span className='text-black'>Catégories :</span>
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1 transition rounded-sm font-bold ${
                activeCategory === cat.key
                  ? 'bg-black text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {visiblePosts.map((post, idx) => (
          <div key={idx} className="blog-card rounded-[2.5rem] overflow-hidden border border-gray-200 bg-white shadow-sm">
            <BlogCard {...post} />
          </div>
        ))}
      </div>

      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  )
}

export default Blogue
