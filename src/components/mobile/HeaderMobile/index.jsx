import { routeMobileTitleHandler } from '../../../utils/routesTitleHandler'
import { setSidebar } from '../../../store/slices/sidebarSlice'
import { appRoutesPath } from '../../../constants'
import { IoSearchSharp } from 'react-icons/io5'
import rocket from '../../../assets/rocket.svg'
import search from '../../../assets/search.svg'
import { useLocation } from 'react-router-dom'
import scan from '../../../assets/scan.svg'
import bell from '../../../assets/bell.svg'
import bars from '../../../assets/bars.svg'
import { useDispatch } from 'react-redux'
import { FaPlus } from 'react-icons/fa'
import cls from './head.module.scss'
import { useState } from 'react'

const HeaderMobile = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [isSearch, setSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className={cls['head']}>
      <dir className={cls['head-left']}>
        <img onClick={() => dispatch(setSidebar(true))} src={bars} alt="bars" />
        {location.pathname.slice(1) !== appRoutesPath.PRODUCTS ? 
          <h3>{routeMobileTitleHandler(location.pathname === '/' ? location.pathname : location.pathname.slice(1))}</h3> 
          : !isSearch && <h3>{routeMobileTitleHandler(location.pathname === '/' ? location.pathname : location.pathname.slice(1))}</h3>}
      </dir>
      {location.pathname === appRoutesPath.MAIN && <div className={cls['head-right']}>
        <img src={rocket} alt="rocket-icon" />
        <img src={bell} alt="bell-icon" />
      </div>}
      {location.pathname.slice(1) === appRoutesPath.PRODUCTS && <div className={cls['head-prod']}>
        {!isSearch && <img onClick={() => setSearch(true)} src={search} className={cls['searcher']} alt="search-icon" />}
        <img className={cls['scan']} src={scan} alt="scan-icon" />
      </div>}
      {isSearch && location.pathname.slice(1) === appRoutesPath.PRODUCTS &&
        <div className={cls['head-search']}>
          <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" />
          <span onClick={() => setSearch(false)} className={cls['head-search-closer']}><FaPlus/></span>
          {!searchValue && <span className={cls['head-search-placer']}><IoSearchSharp/></span>}
        </div>
      }
    </div>
  )
}

export default HeaderMobile