"use client"

import { DayPicker } from "react-day-picker"
import { cn } from "../../lib/utils"
import { useState } from "react"

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { buttonVariants } from "./button"
import { Separator } from "./separator"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./select"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function CalendarWithYearPicker({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) {
	const [visibleMonth, setVisibleMonth] = useState<Date>(new Date("2000-01-02"))
	const years = Array.from({ length: 100 }, (_, i) => 1924 + i)

	const handleYearChange = (value: string): void => {
		const year = parseInt(value, 10)
		const newVisibleMonth = new Date(visibleMonth)
		newVisibleMonth.setFullYear(year)
		setVisibleMonth(newVisibleMonth)
	}

	const handleMonthChange = (date: Date): void => {
		setVisibleMonth(date)
	}

	const footer = (
		<Select
			defaultValue="2000"
			onValueChange={(value) => {
				handleYearChange(value)
			}}
		>
			<Separator className="my-1" />
			<SelectTrigger>
				<SelectValue placeholder={visibleMonth.getFullYear()} />
			</SelectTrigger>
			<SelectContent className="max-h-72">
				<SelectGroup>
					{years.map((year) => (
						<SelectItem key={year} value={String(year)}>
							{year}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)

	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn("py-2", className)}
			footer={footer}
			month={visibleMonth}
			onMonthChange={handleMonthChange}
			classNames={{
				months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
				month: "space-y-4",
				caption: "flex justify-center pt-1 relative items-center",
				caption_label: "text-sm font-medium",
				nav: "space-x-1 flex items-center",
				nav_button: cn(
					buttonVariants({ variant: "outline" }),
					"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
				),
				nav_button_previous: "absolute left-1",
				nav_button_next: "absolute right-1",
				table: "w-full border-collapse space-y-1",
				head_row: "flex",
				head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
				row: "flex w-full mt-2",
				cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
				day: cn(
					buttonVariants({ variant: "ghost" }),
					"h-9 w-9 p-0 font-normal aria-selected:opacity-100"
				),
				day_range_end: "day-range-end",
				day_selected:
					"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
				day_today: "bg-accent text-accent-foreground",
				day_outside:
					"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
				day_disabled: "text-muted-foreground opacity-50",
				day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
				day_hidden: "invisible",
				...classNames,
			}}
			components={{
				IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
				IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
			}}
			{...props}
		/>
	)
}

CalendarWithYearPicker.displayName = "CalendarWithYearPicker"

export { CalendarWithYearPicker }
