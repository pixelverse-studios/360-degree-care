'use client'
import { useRouter } from 'next/navigation'

import AnimatedSection from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { useRouteState } from '@/lib/providers'
import { getImgSrc } from '@/lib/images'

export default function ContactPage() {
    const router = useRouter()
    const { setRouteState } = useRouteState()

    const goToServices = () => {
        setRouteState({ value: '', type: 'services' })
        return router.push('/contact/services')
    }
    const goToEmployment = () => {
        setRouteState({ value: '', type: 'employment' })
        router.push('/contact/employment')
    }
    const goToGeneral = () => {
        setRouteState({ value: '', type: 'general' })
        router.push('/contact/general')
    }

    return (
        <main className="bg-white-bright text-black">
            <section className="max-w-custom mx-auto px-6 pb-8">
                <AnimatedSection animation="zoom" className="mb-8">
                    <h1>Get in Touch with Us</h1>
                    <p>
                        Please choose your reason for contacting us and complete
                        our quick form. We look forward to hearing from you!
                    </p>
                </AnimatedSection>
                <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <AnimatedSection animation="zoom" className="mb-8">
                        <div className="bg-white rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-200 ease-in-out">
                            <img
                                className="mx-auto h-12 w-12"
                                src={getImgSrc('heart')}
                                alt="services contact page icon"
                            />
                            <h2 className="text-center">Services</h2>
                            <p className="text-center">
                                Whether you're exploring care for yourself or
                                someone else, let's connect and figure out the
                                best way we can support you.
                            </p>
                            <Button
                                variant="pillPrimary"
                                onClick={goToServices}
                            >
                                Talk About Services
                            </Button>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="zoom" className="mb-8">
                        <div className="bg-white rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-200 ease-in-out">
                            <img
                                className="mx-auto h-12 w-12"
                                src={getImgSrc('handshake')}
                                alt="employment contact page icon"
                            />
                            <h2 className="text-center">Employment</h2>
                            <p className="text-center">
                                Passionate about making a difference? We're
                                always looking for caring, dedicated individuals
                                to join our growing team.
                            </p>
                            <Button variant="pillBlue" onClick={goToEmployment}>
                                Join Our Team
                            </Button>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="zoom" className="mb-8">
                        <div className="bg-white rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-200 ease-in-out">
                            <img
                                className="mx-auto h-12 w-12"
                                src={getImgSrc('question')}
                                alt="general contact page icon"
                            />
                            <h2 className="text-center">General Inquiry</h2>
                            <p className="text-center">
                                Not sure where to start? Feeling overwhelmed?
                                Send us a message, and we'll guide you in the
                                right direction.
                            </p>
                            <Button variant="pillPrimary" onClick={goToGeneral}>
                                Get In Touch
                            </Button>
                        </div>
                    </AnimatedSection>
                </section>
            </section>
        </main>
    )
}
