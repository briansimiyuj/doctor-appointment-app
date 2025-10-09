import { ScheduleHistoryItem } from "./ScheduleHistoryItem"

export interface HistoryResult{

    history: ScheduleHistoryItem[]
    loading: boolean
    error: Error | null
    refetchHistory: () => void

}