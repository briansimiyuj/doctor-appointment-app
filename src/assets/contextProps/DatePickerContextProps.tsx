export interface DatePickerContextProps{

    currentMonth: Date
    selectedDate: Date | null
    setSelectedDate: (date: Date | null) => void
    prevMonth: () => void 
    nextMonth: () => void
    isPastDate: (date: Date) => boolean
    isSelectedDate: (date: Date) => boolean
    isToday: (date: Date) => boolean
    handleDateClick: (date: Date) => void
    getDaysInMonth: (month: number, year: number) => number
    getFirstDayOfMonth: (month: number, year: number) => number
    isCalendarVisible: boolean
    showCalendar: () => void
    hideCalendar: () => void
    toggleCalendar: () => void
    availableDateSlots: Date[]
    isAvailableDate: (date: Date) => boolean
    isTimePickerVisible: boolean
    selectedTime: string | null
    handleTimeClick: (time: string) => void
    openTimePicker: () => void

}