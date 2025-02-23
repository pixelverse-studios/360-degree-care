import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Mail, MapPin, Phone } from 'lucide-react'

// Validation Schema using Zod
const formSchema = z.object({
    fullName: z.string().min(2, 'Full Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    description: z.string().min(5, 'Description must be at least 5 characters')
})

export default function ContactForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            description: ''
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('Form submitted:', values)
    }

    return (
        <Card className="max-w-4xl m-auto shadow-md rounded-lg overflow-hidden border-none">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-primary text-white p-6 flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold">Get in Touch</h2>
                    <p>
                        We're here to answer your questions and discuss how we
                        can help you and your loved ones.
                    </p>
                    <div className="flex items-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5" />
                        <span>contact@360degreecare.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span>27 Chestnut St, Ridgewood, NJ 07450</span>
                    </div>
                </div>

                <div className="p-6 bg-white">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your full name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-sm mt-1" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Enter your email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-sm mt-1" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-sm mt-1" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Description of Requested Service
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Describe your request"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-sm mt-1" />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                variant="cta"
                                className="w-full rounded-md"
                            >
                                Send Message
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </Card>
    )
}
