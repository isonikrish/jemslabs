"use client"

import { useEffect, useState } from "react"
import { sanityClient } from "@/sanity/client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { useRouter } from "next/navigation"

interface IdeaProps {
  name: string
  pitch: string
  tags: string[]
  number: string
}

export default function LaunchpadSection() {
  const [ideas, setIdeas] = useState<IdeaProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchIdeas = async () => {
      const data = await sanityClient.fetch(`
        *[_type == "idea"] | order(number asc) {
          name,
          pitch,
          tags,
          number
        }
      `)
      setIdeas(data)
      setIsLoading(false)
    }

    fetchIdeas()
  }, [])

  const handleButtonClick = () => {
    sendGAEvent("click", {
      event_category: "Engagement",
      event_label: "Book a Call",
      value: 1,
    })
    setTimeout(() => {
      router.push("https://cal.com/isonikrish/book")
    }, 500)
  }

  const handleBackClick = () => {
    router.back()
  }

  return (
    <section className="w-full py-20 bg-black text-white">
      <div
        className="flex items-center p-4 cursor-pointer hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors hover:underline"
        onClick={handleBackClick}
        role="button"
        aria-label="Go back"
      >
        <ArrowLeft className="text-white text-2xl mr-2 hover:text-gray-400 transition-colors" />
        <span className="text-lg font-medium">Go back</span>
      </div>

      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-6xl font-extrabold tracking-tight md:text-7xl">
            <span className="inline-block mr-2">🚀</span>
            <span>Launchpad</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-xl font-light tracking-wide text-gray-400">
            Startup ideas from our mind, waiting to be built. Founders, let's team up.
          </p>
        </div>

        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="h-full bg-black p-6 rounded-lg animate-pulse border">
                  <div className="mb-6 h-8 bg-black rounded-lg "></div>
                  <div className="mb-6 h-4 bg-gray-700 rounded-lg"></div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <div className="h-4 w-24 bg-gray-700 rounded-lg"></div>
                  </div>
                  <div className="mt-auto">
                    <div className="h-10 w-36 bg-gray-700 rounded-lg"></div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          // Render actual content once data is fetched
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea, index) => (
              <div key={index} className="h-full">
                <div className="h-full relative border border-gray-800 p-6">
                  <div className="absolute top-4 right-4 text-4xl font-black opacity-20">
                    {idea.number}
                  </div>

                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-3 text-white">
                        {idea.name}
                      </h3>
                      <p className="text-lg text-gray-400">{idea.pitch}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {idea.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-0 px-3 py-1 text-xs font-medium rounded-none bg-white/10 text-white"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Button className="px-0 h-auto bg-transparent text-white hover:bg-transparent" onClick={handleButtonClick}>
                        <span className="mr-2 text-lg font-bold border-b-2 border-current">
                          Let's Build This
                        </span>
                        <ArrowUpRight className="w-5 h-5" />
                      </Button>
                    </div>

                    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-r-[40px] border-b-white border-r-white opacity-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
