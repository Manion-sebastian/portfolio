import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div className='bg-white'>
            <h1 className={styles.extraRed} >Hello world</h1>

            {/* load an image locally */}
            <Image src='/vercel.svg' width={300} height={300} />

            <Image src={'https://placekitten.com/400/500'}
                alt={'prortforlo'}
                width={400}
                height={500}
                />

        </div>
    )
}