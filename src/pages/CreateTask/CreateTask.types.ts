export interface CreateTaskInterface {
	taskname: string
	date: string
	start_time: string
	end_time: string
	isStarred: boolean
}
export interface EventInterface {
	target: { value: string; name: string }
}
export interface CreateTaskPropsInterface {
	onHide: () => void
	show: boolean
}
