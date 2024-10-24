import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../features/themeList'
import lampIcon from '../../assets/images/lamp.svg'

export const Header = () => {
    
    const dispatch = useDispatch()
    const getActiveClass = ({isActive} : {isActive: boolean}) : string => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    } 
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <NavLink to='/' className={getActiveClass}>ToDo</NavLink>
                <NavLink to='/list' className={getActiveClass}>List</NavLink>

                <div className={classes.toggleButtonBlock}>
                    <button 
                    className={classes.toggleButton}
                    onClick={() => dispatch(toggleThemeAction())}>
                        <img className={classes.toggleImg} src={lampIcon} alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}