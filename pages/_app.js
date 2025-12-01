import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import '@/styles/globals.css'
import ChatbotWidget from "@/components/ChatbotWidget";
import BackToTop from "@/components/BackToTop";

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <SEO 
        title={process.env.siteTitle}
      />
      <Component {...pageProps} />
      <BackToTop />
      {/* <ChatbotWidget /> */}
    </Layout>
  )
}

export default MyApp
