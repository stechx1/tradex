import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>1sttradex</title>
      </Head>
      <div>Homepage</div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: false,
      destination: '/agriculture-products',
    },
  };
}
