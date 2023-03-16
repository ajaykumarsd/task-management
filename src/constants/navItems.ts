export const taskItems: NavigationInterface[] = [
  {
    id: '/inbox',
    label: 'Inbox',
  },
  {
    id: '/upcoming',
    label: 'Upcoming',
  },
  {
    id: '/starred',
    label: 'Starred',
  },
  {
    id: '/calendar',
    label: 'Calendar',
  },
]
export interface NavigationInterface {
  id: string
  label: string
}
