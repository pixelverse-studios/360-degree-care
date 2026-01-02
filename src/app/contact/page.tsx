'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import AnimatedSection from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { useRouteState } from '@/lib/providers'
import { getImgSrc } from '@/lib/images'

export default function ContactPage() {
    const router = useRouter()
    const { setRouteState } = useRouteState()
    const heartIcon = getImgSrc('heart')
    const handshakeIcon = getImgSrc('handshake')
    const questionIcon = getImgSrc('question')

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
                    <h1>Get in Touch with 360 Degree Care</h1>
                    <p className="text-lg text-gray-700 mt-2">
                        Whether you're exploring care, career opportunities, or
                        have a general question, we're here to help.
                    </p>
                    <p className="mt-4">
                        Please choose the reason for contacting us below and
                        complete our quick form. A member of our team will
                        follow up and guide you in the right direction.
                    </p>
                </AnimatedSection>
                <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <AnimatedSection animation="zoom" className="mb-8">
                        <div className="bg-white rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-200 ease-in-out">
                            {heartIcon ? (
                                <Image
                                    className="mx-auto h-12 w-12"
                                    src={heartIcon}
                                    alt="services contact page icon"
                                    width={48}
                                    height={48}
                                    sizes="48px"
                                />
                            ) : null}
                            <h2 className="text-center">Services</h2>
                            <p className="text-center">
                                Whether you're exploring care for yourself or a
                                loved one, connect with our team to discuss
                                services and next steps.
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
                            {handshakeIcon ? (
                                <Image
                                    className="mx-auto h-12 w-12"
                                    src={handshakeIcon}
                                    alt="employment contact page icon"
                                    width={48}
                                    height={48}
                                    sizes="48px"
                                />
                            ) : null}
                            <h2 className="text-center">Employment</h2>
                            <p className="text-center">
                                Interested in joining a compassionate, growing
                                care team? Reach out to learn more about current
                                opportunities.
                            </p>
                            <Button variant="pillBlue" onClick={goToEmployment}>
                                Join Our Team
                            </Button>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="zoom" className="mb-8">
                        <div className="bg-white rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-200 ease-in-out">
                            {questionIcon ? (
                                <Image
                                    className="mx-auto h-12 w-12"
                                    src={questionIcon}
                                    alt="general contact page icon"
                                    width={48}
                                    height={48}
                                    sizes="48px"
                                />
                            ) : null}
                            <h2 className="text-center">General Inquiry</h2>
                            <p className="text-center">
                                Not sure where to start or have a general
                                question? Send us a message and we'll point you
                                in the right direction.
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
