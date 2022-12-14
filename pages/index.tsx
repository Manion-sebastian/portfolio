import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import WorkExperience from '../components/workExperience'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'

import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
    experiences: Experience[]
    projects: Project[]
    skills: Skill[]
    socials: Social[]
}



// const socials: Social[] = fetchSocials()
// experiences,

const Home = ({pageInfo, experiences,  projects, skills, socials}: Props) => {
  // console.log('socials',socials)
  // testapi()
  return (
    <div className={'bg-slate-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollColor'}>
      <Head>
        <title>{`Sebastian's Portfolio`}</title>
        <meta name="description" content="Software Engineering Portfolio, Sebastian Manion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header socials={socials} />

      {/* hero */}
      <section  id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* about */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      {/* skills */}

      <section id='skills' className='snap-center'>
        {/* skills={skills} */}
        <Skills skills={skills} />
      </section>

      {/* projects */}

      <section id='projects' className='snap-center'>
        <Projects projects={projects} />
      </section>
      
      {/* experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>



      {/* contact me */}

      <section id='contact' className='snap-center'>
        <Contact pageInfo={pageInfo} />
      </section>

        <footer className='sticky bottom-5 flex justify-center w-full'>
              <Link href="#hero">
                <div className='flex w-fit items-center just ify-center'>
                  <Image src={'https://i.imgur.com/1BmvvJK.png'} alt='home' height={45} width={45} className='h-10 w-10 rounded-full filter grayscale bg-white hover:grayscale-0 cursor-pointer' />
                </div>
              </Link>
        </footer>      
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperience()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials = await fetchSocials()
  console.log('working')

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 300
  }
}
