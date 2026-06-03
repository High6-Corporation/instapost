import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Button from '@/components/ui/Button'
import ProjectCard from '@/components/blocks/ProjectCard'
import Badge from '@/components/blocks/Badge'
import Link from 'next/link'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

interface ProjectsSectionProps {
  badgeLabel?: string;
  showBadge?: boolean;
  title?: string;
  description?: string;
  showDescription?: boolean;
  buttonText?: string;
  buttonLink?: string;
  projects?: Array<{
    imageSrc: string;
    alt: string;
    backgroundColor: string;
  }>;
}

const defaultProjects = [
  {
    imageSrc: '/logo/sm-proj.jpg',
    alt: 'SM Project',
    backgroundColor: '#0f2feb',
  },
  {
    imageSrc: '/logo/fat-cousins-proj.png',
    alt: 'Fat Cousins Project',
    backgroundColor: '#f8311a',
  },
  {
    imageSrc: '/logo/kanzen-proj.jpg',
    alt: 'Kanzen Project',
    backgroundColor: '#fef102',
  },
  {
    imageSrc: '/logo/onesimus-proj.jpg',
    alt: 'Onesimus Project',
    backgroundColor: '#000000',
  },
  {
    imageSrc: '/logo/arisun-proj.png',
    alt: 'Arisun Project',
    backgroundColor: '#f6f6f6',
  },
  {
    imageSrc: '/logo/nissan-proj.jpg',
    alt: 'Nissan Project',
    backgroundColor: '#ca202d',
  },
]

export function ProjectsSection({
  badgeLabel = 'Explore Our Projects',
  showBadge = true,
  title = 'Discover how we bring brands to life through content and campaigns that deliver.',
  description = 'We partner with brands across the country, delivering creative solutions that drive real results and long-term growth.',
  showDescription = true,
  buttonText = 'View All Works',
  buttonLink = '/works',
  projects = defaultProjects,
}: ProjectsSectionProps) {
  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white">
        <Row className="!max-w-[1279px]">
        <div className="flex flex-col items-center">
          {/* Section Label - Can be hidden */}
          {showBadge && (
            <Badge className="max-w-[153px] w-full">
              {badgeLabel}
            </Badge>
          )}

          {/* Section Heading */}
          <h2 className="heading-2 font-normal text-neutral-900 text-center max-w-[1059px]">
            {title}
          </h2>

          {/* Section Description - Can be hidden */}
          {showDescription && (
            <p className="body-md text-neutral-500 text-center max-w-[957px] mt-[30px]">
              {description}
            </p>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full mt-[24px] md:mt-[40px] lg:mt-[60px]">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                imageSrc={project.imageSrc}
                alt={project.alt}
                backgroundColor={project.backgroundColor}
              />
            ))}
          </div>

          {/* CTA Button */} 
          <div className="mt-8 md:mt-[40px] lg:mt-[60px]">
            <Link href={buttonLink}>
              <Button variant="primary">
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </Row>
    </Section>
    </ScrollAnimationWrapper>
  )
}
