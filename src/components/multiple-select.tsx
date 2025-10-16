import * as React from 'react'
import { X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { useFormContext, Controller } from 'react-hook-form'

// Define an interface for the items
export interface Item {
    value: string
    label: string
}

// Define props for the MultiSelect component
export interface MultiSelectProps {
    items: Item[]
    placeholder?: string
    name: string
    emptyMessage?: string
    label?: string
}

export function MultiSelect({
    items,
    placeholder = 'Select items',
    name,
    emptyMessage = 'No items found.',
    label
}: MultiSelectProps) {
    const formContext = useFormContext()

    if (!formContext) {
        throw new Error('MultiSelect must be used within a FormProvider')
    }

    return (
        <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <Controller
                name={name}
                control={formContext.control}
                render={({ field }) => (
                    <FormControl>
                        <MultiSelectField
                            items={items}
                            placeholder={placeholder}
                            emptyMessage={emptyMessage}
                            selectedValues={field.value || []}
                            onValueChange={field.onChange}
                        />
                    </FormControl>
                )}
            />
            <FormMessage className="text-red-500 text-sm mt-1" />
        </FormItem>
    )
}

interface MultiSelectFieldProps {
    items: Item[]
    placeholder?: string
    emptyMessage?: string
    selectedValues: string[]
    // eslint-disable-next-line no-unused-vars
    onValueChange: React.Dispatch<React.SetStateAction<string[]>>
}

function MultiSelectField({
    items,
    placeholder,
    emptyMessage,
    selectedValues,
    onValueChange
}: MultiSelectFieldProps) {
    const [open, setOpen] = React.useState(false)

    const handleUnselect = (value: string) => {
        onValueChange(selectedValues.filter(item => item !== value))
    }

    const handleSelect = (value: string) => {
        const isSelected = selectedValues.includes(value)
        if (isSelected) {
            handleUnselect(value)
        } else {
            onValueChange([...selectedValues, value])
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    <span className="truncate">
                        {selectedValues.length > 0
                            ? `${selectedValues.length} selected`
                            : placeholder}
                    </span>
                    <span className="ml-2 rounded-full bg-slate-100 px-1.5 py-0.5 text-xs font-semibold">
                        {selectedValues.length}
                    </span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                {selectedValues.length > 0 && (
                    <div className="flex flex-wrap gap-1 p-2 border-b">
                        {selectedValues.map(value => {
                            const label =
                                items.find(item => item.value === value)
                                    ?.label || value
                            return (
                                <Badge
                                    key={value}
                                    variant="secondary"
                                    className="flex items-center gap-1"
                                >
                                    {label}
                                    <button
                                        className="ml-1 rounded-full outline-none focus:ring-2"
                                        onKeyDown={e => {
                                            if (e.key === 'Enter') {
                                                handleUnselect(value)
                                            }
                                        }}
                                        onMouseDown={e => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                        }}
                                        onClick={() => handleUnselect(value)}
                                        type="button"
                                    >
                                        <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                                    </button>
                                </Badge>
                            )
                        })}
                    </div>
                )}
                <Command>
                    <CommandInput placeholder="Search items..." />
                    <CommandEmpty>{emptyMessage}</CommandEmpty>
                    <CommandGroup className="max-h-64 overflow-auto">
                        {items.map(item => {
                            const isSelected = selectedValues.includes(
                                item.value
                            )
                            return (
                                <CommandItem
                                    key={item.value}
                                    onSelect={() => handleSelect(item.value)}
                                >
                                    <div
                                        className={cn(
                                            'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                            isSelected
                                                ? 'bg-primary text-primary-foreground'
                                                : 'opacity-50'
                                        )}
                                    >
                                        {isSelected && (
                                            <span className="h-2 w-2 bg-current rounded-sm" />
                                        )}
                                    </div>
                                    <span>{item.label}</span>
                                </CommandItem>
                            )
                        })}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
