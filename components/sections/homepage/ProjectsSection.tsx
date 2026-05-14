import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Button from '@/components/ui/Button'
import ProjectCard from '@/components/blocks/ProjectCard'
import Badge from '@/components/blocks/Badge'
import Link from 'next/link'

const projects = [
  {
    imageSrc: '/logo/sm-proj.jpg',
    alt: 'SM Project',
    backgroundColor: '#0f2feb',
    imageWidth: 225,
    imageHeight: 200,
  },
  {
    imageSrc: '/logo/fat-cousins-proj.png',
    alt: 'Fat Cousins Project',
    backgroundColor: '#f8311a',
    imageWidth: 323,
    imageHeight: 200,
  },
  {
    imageSrc: '/logo/kanzen-proj.jpg',
    alt: 'Kanzen Project',
    backgroundColor: '#fef102',
    imageWidth: 217,
    imageHeight: 200,
  },
  {
    imageSrc: '/logo/onesimus-proj.jpg',
    alt: 'Onesimus Project',
    backgroundColor: '#000000',
    imageWidth: 262,
    imageHeight: 200,
  },
  {
    imageSrc: '/logo/arisun-proj.png',
    alt: 'Arisun Project',
    backgroundColor: '#f6f6f6',
    imageWidth: 300,
    imageHeight: 200,
  },
  {
    imageSrc: '/logo/nissan-proj.jpg',
    alt: 'Nissan Project',
    backgroundColor: '#ca202d',
    imageWidth: 224,
    imageHeight: 200,
  },
]

export function ProjectsSection() {
  return (
    <Section className="bg-white">
      <Row className="!max-w-[1279px]">
        <div className="flex flex-col items-center">
          {/* Section Label */}
          <Badge className="max-w-[153px] w-full">
            Explore Our Projects
          </Badge>

          {/* Section Heading */}
          <h2 className="heading-2 font-normal text-neutral-900 text-center max-w-[1059px]">
            Discover how we bring brands to life through content and campaigns that deliver.
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full mt-[24px] md:mt-[40px] lg:mt-[60px]">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                imageSrc={project.imageSrc}
                alt={project.alt}
                backgroundColor={project.backgroundColor}
                imageWidth={project.imageWidth}
                imageHeight={project.imageHeight}
              />
            ))}
          </div>

          {/* CTA Button */} 
          <div className="mt-8 md:mt-[40px] lg:mt-[60px]">
            <Link href="/coming-soon">
              <Button variant="primary">
                View All Works
              </Button>
            </Link>
          </div>
        </div>
      </Row>
    </Section>
  )
}
