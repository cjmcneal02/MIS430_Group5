import Layout from '../components/common/Layout'
import Hero from '../components/landing/Hero'
import CTASection from '../components/landing/CTASection'
import TrustSignals from '../components/landing/TrustSignals'

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <CTASection />
      <TrustSignals />
    </Layout>
  )
}

export default Landing
