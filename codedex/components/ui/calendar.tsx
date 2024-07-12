"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
  };

  const isTuesday = (date: Date): boolean => {
    return date.getDay() === 2; // 0 (Sunday) to 6 (Saturday), Tuesday is 2
  };

  const renderSidePanelContent = () => {
    if (!selectedDate) return null;

    const dayOfWeek = selectedDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    const isTuesdaySelected = dayOfWeek === 2;

    return (
      <div className="ml-4 p-4 bg-gray-100 shadow-md">
        <p className="text-lg font-semibold">Selected Date</p>
        {isTuesdaySelected ? (
          <p className="mt-2">Board Game Party!</p>
        ) : (
          <p className="mt-2">{selectedDate.toLocaleDateString()}</p>
        )}
      </div>
    );
  };

  return (
    <div className="flex">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
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
          head_cell:
            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: cn(
            "h-9 w-9 text-center text-sm p-0 relative",
            {
              // Conditional classes based on selected date or Tuesday
              "bg-blue-200": (date: Date) => isTuesday(date), // Highlight Tuesdays in blue
              "focus-within:relative focus-within:z-20": true, // Example of always applied class
            },
            classNames?.cell // Preserve other classNames if provided
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
          ),
          day_range_end: "day-range-end",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground", // Current date style
          day_outside:
            "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
          IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        }}
        onDayClick={handleDayClick}
        {...props}
      />
      {renderSidePanelContent()}
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };

