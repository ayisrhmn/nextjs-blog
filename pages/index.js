import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Fariz. I'm a Front-End {'&'} Mobile App Dev Ninja.</p>
        <p>
          Enthusiastic Software Engineer with Front-End and Mobile Application
          Development.
        </p>
        <p>
          Skilled in Front-End Dev with React Js or Vue Js and Mobile App Dev
          with React Native or Flutter.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
