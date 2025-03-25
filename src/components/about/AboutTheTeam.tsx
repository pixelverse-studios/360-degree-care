'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

import { Button } from '../ui/button'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogOverlay
} from '@/components/ui/dialog'
import { CompanyName } from '../Logo'
import { Separator } from '../ui/separator'
import { teamMembers } from '@/utils/about'
import AnimatedSection from '../animated-section'

export default function AboutTheTeam() {
    const [selected, setSelected] = useState<any>(null)

    const onMemberClick = (member: any) => setSelected(member)

    return (
        <section className="bg-white-bright py-10">
            <AnimatedSection animation="zoom">
                <h1 className="font-bold text-4xl text-center mb-6">
                    Meet Our{' '}
                    <CompanyName className="text-4xl text-primary-dark" /> Team
                </h1>
                <p className="text-lg text-center mb-4">
                    We're a passionate group of individuals dedicated to
                    delivering excellence in everything we do.
                </p>
                <Dialog>
                    <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10">
                        {teamMembers.map(member => (
                            <li
                                key={member.name}
                                className="bg-white-muted py-8 rounded-lg shadow-lg flex flex-col gap-2 align-middle justify-between text-center text-sm"
                            >
                                <img
                                    className="h-[6rem] w-[6rem] rounded-full mx-auto mb-3"
                                    src={member.img}
                                    alt={`${member.name} headshot`}
                                />
                                <p className="text-center w-[85%] mx-auto">
                                    {member.summary}
                                </p>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="link"
                                        onClick={() => onMemberClick(member)}
                                    >
                                        Read more
                                    </Button>
                                </DialogTrigger>
                                <Separator className="bg-gray-200 mb-2" />
                                <h4 className="text-base text-black font-bold">
                                    {member.name}
                                </h4>
                                <span className="text-sm text-gray-600/90">
                                    {member.position}
                                </span>
                                <a
                                    className="mx-auto text-primary cursor-pointer group hover:scale-125 transition-transform duration-300"
                                    href={`mailto:${member.email}`}
                                >
                                    <Mail className="group-hover:scale-125 h-4 w-4 transition-transform duration-300 cursor-pointer" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <DialogOverlay className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300" />
                    <DialogContent className="px-8 py-12 border-none max-w-4xl w-4/5 lg:w-full h-fit shadow-lg">
                        {selected !== null ? (
                            <div className="grid grid-cols-1  lg:grid-cols-[1fr_2fr] gap-6">
                                <div className="flex flex-col items-center">
                                    <img
                                        className="h-[10rem] w-[10rem] rounded-full mb-3"
                                        src={selected.img}
                                        alt={`${selected.name} headshot`}
                                    />
                                    <h4 className="text-black font-bold text-2xl">
                                        {selected.name}
                                    </h4>
                                    <p className="text-lg text-gray-600/90">
                                        {selected.position}
                                    </p>
                                    <a
                                        className="cursor-pointer hover:text-primary ease-in-out duration-300"
                                        href={`mailto:${selected.email}`}
                                    >
                                        {selected.email}
                                    </a>
                                </div>
                                <p className="">{selected.expanded}</p>
                            </div>
                        ) : null}
                    </DialogContent>
                </Dialog>
            </AnimatedSection>
        </section>
    )
}
