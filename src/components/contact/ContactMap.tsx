'use client'

import AnimatedSection from '../animated-section'

export default function ContactMap() {
    return (
        <AnimatedSection className="">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.0553861149697!2d-74.12159542292949!3d40.980268021147666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e50716192077%3A0xf89da57971d6fee0!2s360%20Degree%20Care!5e0!3m2!1sen!2sus!4v1749988983365!5m2!1sen!2sus"
                width="100%"
                height="100%" // Iframe will fill this container
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-lg min-h-60"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </AnimatedSection>
    )
}
