'use client'

import { CompanyName } from '../Logo'
import Chap from '../../../public/icons/CHAPLogo.svg'

export default function AboutStatBanner() {
    return (
        <section className="flex flex-col gap-4 px-6 py-10 bg-white-muted">
            <h2 className="text-black-muted text-center">
                The <CompanyName styles="text-2xl" /> Difference
            </h2>
            <p className="text-center max-w-4xl mx-auto">
                We believe homecare must go beyond sending someone to do
                something and sending a bill. We have created Concierge Level
                Homecare. Meaning we are ready to take care of everything a
                client or patient needs from the moment they open their eyes in
                the morning to the memento they close them at night…and often
                for many times they need extra help in between. Cooking…DONE.
                Light housekeeping…DONE. Personal care and hygiene…DONE.
                Transportation…DONE. Daily exercise…DONE. Fall Prevention…DONE.
                Dog walking…DONE. Party planning for family…DONE. Organizing a
                Facetime with family…DONE. Facilitating hair salon and manicure
                appointments…DONE. And many, many more needs that pop up. We
                believe that we are here to make our clients lives better.
            </p>
            <ul className="max-w-6xl w-full mx-auto p-4 bg-white-bright rounded-lg grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 lg:gap-2">
                <li className="p-4 flex flex-col gap-2 text-center h-fit">
                    <h3 className="font-bold text-black text-3xl">80%</h3>
                    <p className="text-black-muted text-md">
                        Caregiver Retention Rate
                        <br />
                        (vs 13% industry avg)
                    </p>
                </li>
                <li className="p-4 flex flex-col gap-2 text-center h-fit">
                    <h3 className="font-bold text-black text-3xl">10+</h3>
                    <p className="text-black-muted text-md">Years of Service</p>
                </li>
                <li className="p-4 flex flex-col gap-2 text-center h-fit">
                    <h3 className="font-bold text-black text-3xl">4.8</h3>
                    <p className="text-black-muted text-md">
                        Google Rating (28 ratings)
                    </p>
                </li>
                <li className="m-auto h-fit">
                    <img
                        className="h-[5rem] w-[5rem]"
                        src={Chap.src}
                        alt="Chap Badge"
                    />
                </li>
            </ul>
            <p className="text-center max-w-4xl mx-auto">
                We also provide competent and reliable CNAs and Aides to
                facilities that have staffing shortages. Our experience caring
                for families that have the highest expectations means the
                staffing we provide to a rehab or subacute or in an assisted
                living facility can be expected to be of the highest quality.
            </p>
            <p className="text-center max-w-4xl mx-auto">
                We formerly worked under the Interim Healthcare banner but
                realized that the added bureaucracy and overhead of a franchise
                system did not provide enough added value to warrant its
                continuing. All of our personnel and all of our services remain
                exactly as before.
            </p>
        </section>
    )
}
