import style from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {

    return (
        <>
            <nav className={style.menu}>

                {
                    menuItems.map(menuItems => (
                        <ActiveLink key={menuItems.href} text={menuItems.text} href={menuItems.href} />
                    ))
                }

                {
                    /* <ActiveLink text="Home" href='/' />
                      <ActiveLink text="About" href='/about' />
                      <ActiveLink text="Contact" href='/contact' />
                      <ActiveLink text="Pricing" href='/pricing' />
                      */
                }
            </nav>
        </>
    )
}


