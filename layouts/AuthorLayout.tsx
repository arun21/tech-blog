import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-8 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 pt-8 pb-8">
          {/* Sidebar - Profile Card */}
          <div className="flex flex-col items-center space-y-4">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <div className="text-center">
              <h3 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {name}
              </h3>
              {occupation && (
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{occupation}</div>
              )}
              {company && (
                <div className="text-sm text-gray-600 dark:text-gray-400">{company}</div>
              )}
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {email && <SocialIcon kind="mail" href={`mailto:${email}`} />}
              {github && <SocialIcon kind="github" href={github} />}
              {linkedin && <SocialIcon kind="linkedin" href={linkedin} />}
              {twitter && <SocialIcon kind="x" href={twitter} />}
              {bluesky && <SocialIcon kind="bluesky" href={bluesky} />}
            </div>
          </div>
          {/* Main Content */}
          <div className="prose dark:prose-invert max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
