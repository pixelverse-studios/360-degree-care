import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, Mail, MapPin } from 'lucide-react'
import { toast } from 'sonner'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { ContactMap } from '@/utils/contact'
import { useRouteState } from '@/lib/providers'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from '../ui/select'
import ContactSuccessMessage from './ContactSuccessMessage'
import { EMAIL, PHONE, ADDRESS } from '@/utils/constants'

function canSubmit(form: any) {
    return Object.values(form).every(val => val)
}

export default function ContactForm() {
    const { routeState } = useRouteState()

    const config = ContactMap.get(routeState.type)
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const form = useForm({
        resolver: zodResolver(config?.schema),
        mode: 'onChange',
        defaultValues: config?.initialValues ?? {}
    })

    const onSubmit = async (values: z.infer<typeof config.schema>) => {
        setLoading(true)
        try {
            const payload = {
                fullname: values.fullname,
                email: values.email,
                phone: values.phone,
                data: {
                    description: values.description
                }
            }

            if (config.type !== 'general') {
                payload.data = {
                    ...payload.data,
                    [config.type]: values[config.type]
                }
            }

            await fetch(
                `${process.env.NEXT_PUBLIC_API_HOST}/v1/contact-forms/${process.env.NEXT_PUBLIC_SLUG}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }
            )
            setLoading(false)
            setSubmitted(true)
            return toast.success('Request submitted successfully')
        } catch (error) {
            setLoading(false)
            return toast.error('Request could not be submitted at this time')
        }
    }

    if (submitted) {
        return <ContactSuccessMessage />
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl">
            <div className="bg-primary text-white p-6 flex flex-col rounded-tl-lg rounded-bl-lg space-y-4">
                <h2 className="font-bold text-white">Get In Touch</h2>
                {config?.description && <p>{config.description}</p>}
                <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>{PHONE}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>{EMAIL}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>
                        {ADDRESS.STREET}, {ADDRESS.DETAILS}
                    </span>
                </div>
            </div>
            <div className="p-6 bg-white-bright rounded-tr-lg rounded-br-lg">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="fullname"
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
                        <div className="flex flex-wrap gap-4 w-full">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex-1 basis-0">
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
                                    <FormItem className="flex-1 basis-0">
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
                        </div>
                        {(config?.type === 'services' ||
                            config?.type === 'employment') && (
                            <FormField
                                control={form.control}
                                name={config.type ?? ''}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {config.fieldLabel || ''}
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder={
                                                            config.placeholder ??
                                                            ''
                                                        }
                                                    />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {config.selectOptions.map(
                                                        (item: string) => (
                                                            <SelectItem
                                                                key={
                                                                    typeof item ===
                                                                    'string'
                                                                        ? item
                                                                        : ''
                                                                }
                                                                value={
                                                                    typeof item ===
                                                                    'string'
                                                                        ? item
                                                                        : ''
                                                                }
                                                            >
                                                                {typeof item ===
                                                                'string'
                                                                    ? item
                                                                    : ''}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-sm mt-1" />
                                    </FormItem>
                                )}
                            />
                        )}
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
                            className={`w-full rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading || !canSubmit(form.getValues())}
                        >
                            {loading ? (
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
