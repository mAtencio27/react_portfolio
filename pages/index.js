import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';
import Image from 'next/image';
import portrait from '../public/portrait-square.jpg';
import eatable from '../public/eatable.png';
import staticViewer from '../public/static-view.jpg';
import eatableSmall from '../public/eatable-small.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcus Atencio Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        {/*<meta name="viewport" content="width=device-width, initial-scale=1" />*/}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className="min-h-screen">
          <nav className="py-5 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons'>developedbyMarcus</h1>
            <ul className="flex items-center">
              <li>
                <a className='bg-gradient-to-r from-purple-300 to-purple-600 text-white px-4 py-2 border rounded-md ml-8' href="#">Resume</a>
              </li>

            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-purple-700 font-medium md:text-6xl mx-auto'>Marcus Atencio</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Full-Stack Developer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
              Full Stack Developer based in Tokyo. Always looking
              for the opportunity to grow and improve in the right enviroment. 
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
            <a href='https://www.linkedin.com/in/marcus-atencio/'><AiFillLinkedin/></a>
            <a href='https://github.com/mAtencio27'><AiFillGithub/></a>
            <a href="mailto:mAtencio270@gmail.com"><AiFillMail/></a>
          </div>
          <div className='relative mx-auto flex justify-center p-5 max-w-sm'>
            <Image alt="" src={portrait} className='rounded w-50 h-50'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I have sufficient skills with front end technologies
              such as react and vue. I am also proficient and building
              backends for e commerece sitets 
            </p>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Since beginning my career as a software developer
              I have had the opportunity to collaberate with seasoned developers
              on several projects, building both business and consumer 
              facing applications.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I am also committed to the tech community in Tokyo and
              often collaberate with developers on builds while also 
              providing instruction and mentorship to students.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image alt="" src={staticViewer} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt="" src={eatableSmall} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
