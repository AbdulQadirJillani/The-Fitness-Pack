import { useState } from 'react'
import styles from './Nav.module.css'
import 'primeicons/primeicons.css';
        
function Nav() {
  const [drawer, setDrawer] = useState(false)

  return (
    <nav className={styles.nav}>
      <span>THE FITNESS PACK</span>
      <div className={drawer ? styles.open : styles.close}>
        <i className='pi pi-facebook'/>
        <i className='pi pi-twitter'/>
        <i className='pi pi-linkedin'/>
      </div>
      {
        !drawer ?
        <i className='pi pi-bars' onClick={()=>setDrawer(true)}/>
        :
        <i className='pi pi-times' onClick={()=>setDrawer(false)}/>
      }
    </nav>
  )
}

export default Nav