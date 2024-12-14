import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
// import { ChevronRight } from 'lucide-react'
import Link from "next/link"


const blogPosts = [
  {
    id: 1,
    title: "Navigating Business Growth: Strategies for Success",
    date: "January 31, 2022",
    excerpt: "Discover actionable strategies to drive sustainable business growth. This blog covers optimizing operations, leveraging market trends, and crafting innovative marketing plans. Whether you're a startup or an established enterprise, gain expert tips to identify opportunities, overcome challenges, and achieve measurable success. Empower your business to thrive in a competitive landscape",
    image: "/hero/314.jpg",
    href: "#"
  },
  {
    id: 2,
    title: "Leadership in the Modern Workplace",
    date: "January 31, 2022",
    excerpt: "Effective leadership is essential for organizational success. This blog explores modern leadership skills, from fostering collaboration to leading through change. Learn how to inspire teams, navigate challenges, and cultivate a thriving workplace culture. Perfect for aspiring and current leaders, it offers practical advice to empower teams and drive meaningful results",
    image: "/hero/image.png",
    href: "#"
  },
  {
    id: 3,
    title: "The Digital Transformation Playbook",
    date: "January 31, 2022",
    excerpt: "Embrace the future with insights on digital transformation. This blog shares strategies to integrate technology, enhance operations, and improve customer experiences. Explore trends in automation, analytics, and software tools to stay competitive. Whether starting or scaling your digital journey, gain the knowledge to drive innovation and success in a digital world",
    image: "/hero/Screenshot 2024-12-01 065930.png",
    href: "#"
  }
]

export function BlogSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] relative">
                  <img
                    src={post.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <time className="text-sm text-gray-500" dateTime="2022-01-31">
                  {post.date}
                </time>
                <h3 className="mt-2 text-xl font-bold leading-tight">{post.title}</h3>
                <p className="mt-3 text-gray-500">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link
                  href={post.href}
                  className="inline-flex items-center text-blue-500 hover:text-blue-600"
                >
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                  <span className="sr-only">Read more about {post.title}</span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

