import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { PHONE, ADDRESS } from '@/utils/constants'
import CallToAction from '../CallToAction'
import AnimatedSection from '../animated-section'

export default function ContactMap() {
    const fullAddress = `${ADDRESS.STREET}`
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`

    return (
        <AnimatedSection className="py-12 px-6 bg-gray-50">
            <div className="max-w-custom mx-auto grid md:grid-cols-2 items-stretch rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-[450px] md:h-auto">
                    {' '}
                    {/* Container for iframe to control height and allow stretching */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.0553861149697!2d-74.12159542292949!3d40.980268021147666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e50716192077%3A0xf89da57971d6fee0!2s360%20Degree%20Care!5e0!3m2!1sen!2sus!4v1749988983365!5m2!1sen!2sus"
                        width="100%"
                        height="100%" // Iframe will fill this container
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="bg-white p-8 h-full">
                    {' '}
                    {/* Contact info takes full height of its grid cell */}
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        Visit or Contact Us
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Our Office
                                </h3>
                                <a
                                    href={googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-primary transition-colors"
                                >
                                    {ADDRESS.STREET}
                                    <br />
                                    {ADDRESS.DETAILS}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Call Us
                                </h3>
                                <a
                                    href={`tel:${PHONE}`}
                                    className="text-gray-600 hover:text-primary transition-colors"
                                >
                                    {PHONE}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Email Us
                                </h3>
                                <Link
                                    href="/contact/general"
                                    className="text-gray-600 hover:text-primary transition-colors"
                                >
                                    Send a Message
                                </Link>
                            </div>
                        </div>
                    </div>
                    <CallToAction
                        buttonLabel="Get In Touch"
                        buttonClass="w-full mt-4"
                        type="general"
                        value=""
                        variant="pillPrimary"
                    />
                </div>
            </div>
        </AnimatedSection>
    )
}
