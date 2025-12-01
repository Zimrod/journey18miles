// pages/index.js
import HeroSection from '@/components/HeroSection'
import EndlessScrolling from '@/components/EndlessScrolling'
import Providers from '@/components/Providers'
import Redefine from '@/components/Redefine'
import FAQSection from '@/components/FAQs'
import DownloadApp from '@/components/DownloadApp'
import SubscriptionPricing from '@/components/SubscriptionPricing'

function IndexPage() {
    return (
      <div className="">
        <section id="home"><HeroSection /></section>
        <section id="scrolling"><EndlessScrolling /></section>
        <section id="specifik"><Redefine /></section>
        <section id="facilitate"><Providers /></section>
        <section id="pricing"><SubscriptionPricing /></section>
        <section id="faq"><FAQSection /></section>
        <section id="download"><DownloadApp /></section>
      </div>
    )
  }

export default IndexPage