import { NavigationInterface, taskItems } from 'constants/navItems'
import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarContainer } from './Sidebar.styles'
const SidebarComponent = () => {
	return (
		<SidebarContainer>
			<div className='wrapper'>
				<div className='sidebar'>
					<ul>
						{taskItems.map((item: NavigationInterface, index: number) => {
							return (
								<li key={index}>
									<Link to={item.id}>
										<span className='item'>{item.label}</span>
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</SidebarContainer>
	)
}
export default SidebarComponent
