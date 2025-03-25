import { CompanyName } from '@/components/Logo'
import AnimatedSection from '@/components/animated-section'

export default function LegalDisclaimerPage() {
    return (
        <main>
            <AnimatedSection
                animation="zoom"
                className="max-w-custom mx-auto p-6 bg-white shadow-md rounded-lg mb-6"
            >
                <h1 className="font-bold text-center mb-6">Legal Disclaimer</h1>

                <p className="text-gray-700 mb-4">
                    The contents of this website are for informational purposes
                    only. <CompanyName /> does not endorse or recommend any
                    unrelated organization that may be referenced in this site.
                    This site is not intended to furnish medical advice to
                    anyone. Any diagnosis, treatment, or care of a patient
                    should be discussed with a physician.
                </p>

                <p className="text-gray-700 mb-4">
                    <CompanyName /> accepts patients for care regardless of age,
                    race, color, national origin, religion, sex, Veteran or
                    citizenship status, disability, or any other category
                    protected by law, or patients' decisions regarding advanced
                    directives. <CompanyName /> is an equal opportunity employer
                    that does not discriminate on the basis of these categories.
                </p>

                <h2 className="font-semibold mt-6 mb-2">Survey</h2>
                <p className="text-gray-700 mb-4">
                    Our survey collects information that is aggregated and used
                    internally to develop products and services that better meet
                    the needs of our visitors. Individually identifiable
                    information entered on the survey is not provided to third
                    parties without the written consent of the individual
                    completing the survey.
                </p>

                <h2 className="font-semibold mt-6 mb-2">Links</h2>
                <p className="text-gray-700 mb-4">
                    This website contains links to other websites. Visitors
                    should be aware that they are leaving the <CompanyName />
                    Inc. website through the use of such links. All content
                    contained on any linked website is the sole responsibility
                    of the owner of that website. Policies regarding the sharing
                    of information entered on any linked website are determined
                    by the owner of that website.
                </p>

                <h2 className="font-semibold mt-6 mb-2">Other Disclaimers</h2>
                <p className="text-gray-700 mb-4">
                    The <CompanyName /> website includes other disclaimers
                    related to franchise offerings, marketplace vendors, and
                    privacy issues.
                </p>

                <p className="text-gray-700">
                    If you have any questions about the above disclaimers or{' '}
                    <CompanyName /> , you can contact us at{' '}
                    <a
                        href="mailto:info@360degreecare.net"
                        className="text-blue-600 hover:underline"
                    >
                        info@360degreecare.net
                    </a>
                    .
                </p>
            </AnimatedSection>
        </main>
    )
}
