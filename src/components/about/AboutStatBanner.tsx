'use client'

import { CompanyName } from '../Logo'
import Chap from '../../../public/icons/CHAPLogo.svg'
import DoneStamp from '../../../public/media/Done stamp.jpg'

const bentoClass =
    'max-w-4xl mx-auto rounded-lg shadow-lg bg-white-bright p-4 flex-1'

export default function AboutStatBanner() {
    return (
        <section className="bg-white-muted">
            <div className="flex flex-col gap-4 px-6 py-10 max-w-custom mx-auto">
                <h2 className="text-black-muted text-center">
                    The <CompanyName styles="text-2xl" /> Difference
                </h2>
                <p className="text-center max-w-4xl mx-auto">
                    We believe homecare must go beyond sending someone to do
                    something and sending a bill. We have created Concierge
                    Level Homecare. Meaning we are ready to take care of
                    everything a client or patient needs from the moment they
                    open their eyes in the morning to the memento they close
                    them at night…and often for many times they need extra help
                    in between. We cover all of the details, and many more needs
                    that pop up. We believe that we are here to make our clients
                    lives better.
                </p>
                <div className="bg-white-bright p-6 rounded-xl shadow-xl flex flex-wrap">
                    <ul className="flex-1 flex flex-col gap-2">
                        <li>Cooking</li>
                        <li>Light housekeeping</li>
                        <li>Personal care and hygiene</li>
                        <li>Transportation</li>
                        <li>Daily exercise</li>
                        <li>Fall Prevention</li>
                        <li>Dog walking</li>
                        <li>Party planning for family</li>
                        <li>Organizing a Facetime with family</li>
                        <li>
                            Facilitating hair salon and manicure appointments
                        </li>
                    </ul>
                    <img
                        className="flex-1 h-[20rem] w-auto"
                        src={DoneStamp.src}
                        alt="DONE stamp"
                    />
                </div>
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
                        <p className="text-black-muted text-md">
                            Years of Service
                        </p>
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
                <div className="flex flex-wrap gap-4">
                    <p className={bentoClass}>
                        We also provide competent and reliable CNAs and Aides to
                        facilities that have staffing shortages. Our experience
                        caring for families that have the highest expectations
                        means the staffing we provide to a rehab or subacute or
                        in an assisted living facility can be expected to be of
                        the highest quality.
                    </p>
                    <p className={bentoClass}>
                        We formerly worked under the Interim Healthcare banner
                        but realized that the added bureaucracy and overhead of
                        a franchise system did not provide enough added value to
                        warrant its continuing. All of our personnel and all of
                        our services remain exactly as before.
                    </p>
                </div>
            </div>
        </section>
    )
}
