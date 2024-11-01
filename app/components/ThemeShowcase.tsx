import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ThemeProps {
  title: string
  preview: string
  href: string
}

const ThemeCard: React.FC<ThemeProps> = ({ title, preview, href }) => {
  return (
    <Link 
      href={href}
      className="group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-white text-current no-underline transition-all duration-200 hover:border-gray-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-50 dark:hover:border-neutral-500 dark:hover:bg-neutral-700"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-white dark:bg-neutral-800">
        <Image
          src={preview}
          alt={`${title} 预览图`}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        />
      </div>
      <div className="flex items-center px-4 py-3">
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </Link>
  )
}

const ThemeShowcase: React.FC = () => {
  const themes = [
    {
      title: 'Shiro',
      preview: '/shiro_preview.png',
      href: '/docs/themes/shiro'
    },
    {
      title: 'Kami',
      preview: '/kami_preview.png',
      href: '/docs/themes/kami'
    },
    {
      title: 'Yun',
      preview: '/yun_preview.png',
      href: '/docs/themes/yun'
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {themes.map((theme) => (
        <ThemeCard key={theme.title} {...theme} />
      ))}
    </div>
  )
}

export default ThemeShowcase 