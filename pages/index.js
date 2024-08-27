import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <ul><li><p>I am Karl , 20 years old and an IT student here at the University of the Assumption.</p></li></ul><hr></hr>

        <p>1.  <strong>Introduce yourself.  What are your hobbies, favourite music, favourite food, and other things you can tell me about yourself?</strong><br></br>
          Answer:I am Karl Moses G. Marron , 20 years old. I like to workout , play guitar and my hobbies are sports and martial arts/boxing.
        </p>
        <p>
          2. <strong> Why did you take up IT?</strong><br></br>
          Answer: Actually I am a former accountancy student who shifted to IT. Now, I choose IT because from the first place it has a lot of opportunity since our world is now more on technology and is continuing from improving and upgrading.
        </p>
        <p>
          3. <strong> What career do you see yourself exploring after graduation?</strong><br></br>
          Answer: I'd like to take either Web Design or UI UX Design, or a firefighter abroad.:
        </p>
        <p>
          4. <strong> What do you expect to learn in this subject?</strong><br></br>
          Answer: I'd expect to learn the essential tools and use of codes of Javascript for our capstone and to be able to learn and make a real working website I can use in the real world
        </p>
        <p>
          5. <strong> What topics do you want to be discussed in this subject?</strong><br></br>
          Answer: Javascript and the other things for creating a website.
        </p><hr></hr>

        <ul><li><p>
        (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p></li></ul>
      </section>
    </Layout>
  );
}