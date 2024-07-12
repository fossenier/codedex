import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  // Function to determine if a given date is a Tuesday
  const isTuesday = (date: Date): boolean => {
    return date.getDay() === 2; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  };

  // Define modifiers to apply custom styles for Tuesdays
  const modifiers = {
    tuesday: (date: Date) => isTuesday(date),
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      modifiers={modifiers} // Apply modifiers for custom styling
      modifiersClassNames={{
        tuesday: "bg-blue-500 text-white", // Example styling for Tuesdays
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };

