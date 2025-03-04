'use client'

import Chap from '../../../public/icons/CHAPLogo.svg'

export default function AboutStatBanner() {
    return (
        <section className="flex flex-col gap-4 px-6 py-10">
            <h2 className="text-3xl text-black-muted text-center">
                The <span className="text-primary">360 Degree</span> Difference
            </h2>
            <p className="text-center max-w-4xl mx-auto">
                We believe homecare must go beyond sending someone to do
                something and sending a bill. we are ready to take care of
                everything a client or patient needs from the moment they open
                their eyes in the morning to the moment they close them at
                nignt. our mission is to make our clents lives better.
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
        </section>
    )
}
