import locationIcon from '@iconify/icons-mdi/fire-alert'
import { Icon } from '@iconify/react'

const Header = () => {
    return (
        <header className='header'>
            <h1><Icon icon={locationIcon} /> Wildire Tracker (Powered By NASA)</h1>
        </header>
    )
}

export default Header
