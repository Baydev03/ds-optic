import { useGetProductCategoriesQuery, useGetProductGroupsQuery, 
  useGetProductsByHeadersQuery, useGetProductsQuery } from '../../../store/query/productQuery';
import { setModal, setModalType } from '../../../store/slices/modalSlice';
import { useGetStoresQuery } from '../../../store/query/storesQuery';
import { useDispatch, useSelector } from 'react-redux';
import { modalTypes, userStatus } from '../../../constants';
import { AiOutlineFolder } from 'react-icons/ai'
import  { MdOutlineStorefront} from 'react-icons/md'
import cls from './productList.module.scss';
import { Empty } from 'antd';
import { FaHome } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setProductPageIndex } from '../../../store/slices/productSlice';
import Loader from '../../elements/Loader';

const ProductsList = ({...togglers}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.user)
  const { pageIndex } = useSelector(state => state.product)

  const { data: groupData } = useGetProductGroupsQuery({ token: localStorage.getItem('accessToken') })
  const { data: categoryData } = useGetProductCategoriesQuery({ token: localStorage.getItem('accessToken') })

  const [showGroups, setShowGroups] = useState(null)
  const [showCategories, setShowCategories] = useState(null)
  const [showProducts, setShowProducts] = useState(null)

  const modalHandler = () => {
    dispatch(setModal(true))
    dispatch(setModalType(modalTypes.EDIT_PRODUCT_TYPE))
  }

  const { data: productData } = useGetProductsQuery({
    token: localStorage.getItem('accessToken'),
  })

  const { data: storeData } = useGetStoresQuery({
    token: localStorage.getItem('accessToken'),
  })

  const handleShowGroups = (storeId) => {
    if(!storeId) return;
    dispatch(setProductPageIndex(1))
    const filtered = groupData?.results?.filter(i => i?.branch === +storeId)
    setShowGroups(filtered)
  }

  const handleShowCategories = (groupId) => {
    if(!groupId) return;
    dispatch(setProductPageIndex(2))
    const filtered =
    categoryData?.results?.filter(i => i?.group === +groupId)
    setShowCategories(filtered)
  }

  const handleShowGoods = (categoryId) => {
    if(!categoryId) return;
    dispatch(setProductPageIndex(3))
    const filtered =
       productData?.results?.filter(i => i?.category === +categoryId)
    setShowProducts(filtered)
  }

  const foundedStoreID = +localStorage.getItem('Index')

  const { isLoading, refetch } = useGetProductsByHeadersQuery({ id: foundedStoreID, token: localStorage.getItem('accessToken') })

  const redirectToSingleProductInfo = (id) => {
    navigate(`/single-product/${id}`)
    localStorage.setItem('productId' , id)
  }

  const gettter = () => {
    refetch().then(res => {
      setShowProducts(res?.data?.results || [])
    })
  }

  const handleRedirect = () => {
    dispatch(setProductPageIndex(2))
    navigate(-1)
  }

  useEffect(() => {
    gettter()
  }, [])

  return (
    <div className={cls['table']}>
      {status === userStatus.OWNER ? 
        togglers?.toggleFolders 
          ? <>
            {
              pageIndex === 0 && (
                storeData?.results?.length === 0 ? 
                  <div className='center-empty'>
                    <Empty />
                  </div>
                  : 
                  <>
                    <div className={cls['table-head']}>
                      <div className={cls['table-head-checkbox']}>
                        <FaHome onClick={() => dispatch(setProductPageIndex(0))}/>
                      </div>
                      
                      <div id={cls['no-hover']} className={cls['table-naming']}>
                        <span>Наименование магазина</span>
                      </div>
                      <div className={cls['table-code']}>
                        <span>код</span>
                      </div>
                      <div className={cls['table-article']}>
                        <span>Артикул</span>
                      </div>
                      <div className={cls['table-changer']}>
                        <span>Ед. изм.</span>
                      </div>
                      <div className={cls['table-price']}>
                        <span>Цена продажи</span>
                      </div>
                      <div className={cls['table-discount']}>
                        <span>Скидка, %</span>
                      </div>
                      <div className={cls['table-rest']}>
                        <span>Остатки</span>
                      </div>
                    </div>
                    {storeData?.results?.map(item => (
                      <div onClick={() => handleShowGroups(item?.id)} key={item.id} className={cls['table-item']}>
                        <div className={cls['table-head-checkbox']}>
                          <span></span>
                        </div>
                        <div id={cls['item-naming']} className={cls['table-naming']}>
                          <p><MdOutlineStorefront /> {item.name}</p>
                        </div>
                        <div className={cls['table-code']}>
                          {item.code_of_good}
                        </div>
                        <div className={cls['table-article']}>
                        </div>
                        <div className={cls['table-changer']}>
                        </div>
                        <div className={cls['table-price']}>
                        </div>
                        <div className={cls['table-discount']}>
                        </div>
                        <div className={cls['table-store']}>
                        </div>
                        <div className={cls['table-rest']}>
                        </div>
                      </div>
                    ))}
                  </>
              )
            }

            {
              pageIndex === 1 && (
                showGroups?.length === 0 ? 
                  <div className='center-empty'>
                    <Empty />
                    <button onClick={() => dispatch(setProductPageIndex(0))}>Назад</button>
                  </div>
                  :
                  <>
                    <div className={cls['table-head']}>
                      <div className={cls['table-head-checkbox']}>
                        <FaHome onClick={() => dispatch(setProductPageIndex(0))}/>
                      </div>
                      <div id={cls['no-hover']} className={cls['table-naming']}>
                        <span>Наименование групп</span>
                      </div>
                      <div className={cls['table-code']}>
                        <span>код</span>
                      </div>
                      <div className={cls['table-article']}>
                        <span>Артикул</span>
                      </div>
                      <div className={cls['table-changer']}>
                        <span>Ед. изм.</span>
                      </div>
                      <div className={cls['table-price']}>
                        <span>Цена продажи</span>
                      </div>
                      <div className={cls['table-discount']}>
                        <span>Скидка, %</span>
                      </div>
                      <div className={cls['table-rest']}>
                        <span>Остатки</span>
                      </div>
                    </div>

                    {
                      showGroups && showGroups?.map((item) => (
                        <div onClick={() => handleShowCategories(item?.id)} key={item.id} className={cls['table-item']}>
                          <div className={cls['table-head-checkbox']}>
                            <span></span>
                          </div>
                          <div id={cls['item-naming']} className={cls['table-naming']}>
                            <p><AiOutlineFolder/> {item.name}</p>
                          </div>
                          <div className={cls['table-code']}>
                            {item.code_of_good}
                          </div>
                          <div className={cls['table-article']}>
                          </div>
                          <div className={cls['table-changer']}>
                          </div>
                          <div className={cls['table-price']}>
                          </div>
                          <div className={cls['table-discount']}>
                          </div>
                          <div className={cls['table-store']}>
                          </div>
                          <div className={cls['table-rest']}>
                          </div>
                        </div>
                      ))
                    }

                  </>
              )
            }

            {
              pageIndex === 2 && (
                showCategories?.length === 0 ? 
                  <div className='center-empty'>
                    <Empty />
                    <button onClick={() => dispatch(setProductPageIndex(1))}>Назад</button>
                  </div>
                  :
                  <>
                    <div className={cls['table-head']}>
                      <div className={cls['table-head-checkbox']}>
                        <FaHome onClick={() => dispatch(setProductPageIndex(0))}/>
                      </div>
                      <div id={cls['no-hover']} className={cls['table-naming']}>
                        <span>Наименование категории</span>
                      </div>
                      <div className={cls['table-code']}>
                        <span>код</span>
                      </div>
                      <div className={cls['table-article']}>
                        <span>Артикул</span>
                      </div>
                      <div className={cls['table-changer']}>
                        <span>Ед. изм.</span>
                      </div>
                      <div className={cls['table-price']}>
                        <span>Цена продажи</span>
                      </div>
                      <div className={cls['table-discount']}>
                        <span>Скидка, %</span>
                      </div>
                      <div className={cls['table-rest']}>
                        <span>Остатки</span>
                      </div>
                    </div>

                    {
                      showCategories && showCategories?.map((item) => (
                        <div onClick={() => handleShowGoods(item?.id)} key={item.id} className={cls['table-item']}>
                          <div className={cls['table-head-checkbox']}>
                            <span></span>
                          </div>
                          <div id={cls['item-naming']} className={cls['table-naming']}>
                            <p><AiOutlineFolder/> {item.name}</p>
                          </div>
                          <div className={cls['table-code']}>
                            {item.code_of_good}
                          </div>
                          <div className={cls['table-article']}>
                          </div>
                          <div className={cls['table-changer']}>
                          </div>
                          <div className={cls['table-price']}>
                          </div>
                          <div className={cls['table-discount']}>
                          </div>
                          <div className={cls['table-store']}>
                          </div>
                          <div className={cls['table-rest']}>
                          </div>
                        </div>
                      ))
                    }
                  </>
              )
            }

            {
              pageIndex === 3 && (
                isLoading ? <Loader/> : 
                  showProducts?.length === 0 ?
                    <div className='center-empty'>
                      <Empty />
                      <button onClick={handleRedirect}>Назад</button>
                    </div>
                    :
                    <>
                      <div className={cls['table-head']}>
                        <div className={cls['table-head-checkbox']}>
                          <FaHome onClick={() => dispatch(setProductPageIndex(0))}/>
                        </div>
                        <div id={cls['no-hover']} className={cls['table-naming']}>
                          <span>Наименование товара</span>
                        </div>
                        <div className={cls['table-code']}>
                          <span>код</span>
                        </div>
                        <div className={cls['table-article']}>
                          <span>Артикул</span>
                        </div>
                        <div className={cls['table-changer']}>
                          <span>Ед. изм.</span>
                        </div>
                        <div className={cls['table-price']}>
                          <span>Цена продажи</span>
                        </div>
                        <div className={cls['table-discount']}>
                          <span>Скидка, %</span>
                        </div>
                        <div className={cls['table-rest']}>
                          <span>Остатки</span>
                        </div>
                      </div>

                      {
                        showProducts && showProducts?.map((item) => (
                          <div  key={item.id} className={cls['table-item']}>
                            <div className={cls['table-head-checkbox']}>
                              <span></span>
                            </div>
                            <div onClick={() => redirectToSingleProductInfo(item.id)} id={cls['item-naming']} className={cls['table-naming']}>
                              <p>
                                <img src={item?.image} alt=''/>
                                {item?.name}
                              </p>
                            </div>
                            <div className={cls['table-code']}>
                              {item?.code_of_good}
                            </div>
                            <div className={cls['table-article']}>
                              {item?.articul}
                            </div>
                            <div className={cls['table-changer']}>
                              {item?.unit}
                            </div>
                            <div className={cls['table-price']}>
                              {item?.purchase_price}
                            </div>
                            <div className={cls['table-discount']}>
                              {item?.discount}
                            </div>
                            <div className={cls['table-store']}>

                            </div>
                            <div className={cls['table-rest']}>
                            </div>
                          </div>
                        ))
                      }
                    </>
              )
            }
          </> 
          : 
          <>
            {
              productData?.length === 0 ?
                <div className='center-empty'>
                  <Empty />
                  <button onClick={() => dispatch(setProductPageIndex(2))}>Назад</button>
                </div> :
                <>
                  <div className={cls['table-head']}>
                    <div className={cls['table-head-checkbox']}>
                      <FaHome onClick={() => dispatch(setProductPageIndex(0))}/>
                    </div>
                    <div id={cls['no-hover']} className={cls['table-naming']}>
                      <span>Наименование товара</span>
                    </div>
                    <div className={cls['table-code']}>
                      <span>код</span>
                    </div>
                    <div className={cls['table-article']}>
                      <span>Артикул</span>
                    </div>
                    <div className={cls['table-changer']}>
                      <span>Ед. изм.</span>
                    </div>
                    <div className={cls['table-price']}>
                      <span>Цена продажи</span>
                    </div>
                    <div className={cls['table-discount']}>
                      <span>Скидка, %</span>
                    </div>
                    <div className={cls['table-rest']}>
                      <span>Остатки</span>
                    </div>
                  </div>

                  {
                    productData?.results.length !== 0 && productData?.results?.map((item) => (
                      <div  key={item.id} className={cls['table-item']}>
                        <div className={cls['table-head-checkbox']}>
                          <span></span>
                        </div>
                        <div id={cls['item-naming']} className={cls['table-naming']}>
                          <p>
                            <img src={item?.image} alt=''/>
                            {item?.name}
                          </p>
                        </div>
                        <div className={cls['table-code']}>
                          {item?.code_of_good}
                        </div>
                        <div className={cls['table-article']}>
                          {item?.articul}
                        </div>
                        <div className={cls['table-changer']}>
                          {item?.unit}
                        </div>
                        <div className={cls['table-price']}>
                          {item?.purchase_price}
                        </div>
                        <div className={cls['table-discount']}>
                          {item?.discount}
                        </div>
                        <div className={cls['table-store']}>

                        </div>
                        <div className={cls['table-rest']}>
                        </div>
                      </div>
                    ))
                  }
                </>
            }
          </>
        : <>
          <div className={cls['table-head']}>
            <div className={cls['table-head-checkbox']}>
              <span></span>
            </div>
            <div id={cls['no-hover']} className={cls['table-naming']}>
              <span>Наименование</span>
            </div>
            <div className={cls['table-code']}>
              <span>код</span>
            </div>
            <div className={cls['table-article']}>
              <span>Артикул</span>
            </div>
            <div className={cls['table-changer']}>
              <span>Ед. изм.</span>
            </div>
            <div className={cls['table-price']}>
              <span>Цена продажи</span>
            </div>
            <div className={cls['table-discount']}>
              <span>Скидка, %</span>
            </div>
            <div className={cls['table-store']}>
              <span>Beta 2</span>
            </div>
            <div className={cls['table-rest']}>
              <span>Остатки</span>
            </div>
          </div>
          {productData?.results.map(item => (
            <div key={item.id} className={cls['table-item']}>
              <div className={cls['table-head-checkbox']}>
                <span></span>
              </div>
              <div onClick={modalHandler} id={cls['item-naming']} className={cls['table-naming']}>
                <p><AiOutlineFolder/> {item.name}</p>
              </div>
              <div className={cls['table-code']}>
                {item.code_of_good}
              </div>
              <div className={cls['table-article']}>
              </div>
              <div className={cls['table-changer']}>
              </div>
              <div className={cls['table-price']}>
              </div>
              <div className={cls['table-discount']}>
              </div>
              <div className={cls['table-store']}>
              </div>
              <div className={cls['table-rest']}>
              </div>
            </div>
          ))}
          {/* <div id={cls['item-active']} className={cls['table-item']}>
            <div className={cls['table-head-checkbox']}>
              <span></span>
            </div>
            <div id={cls['item-naming']} className={cls['table-naming']}>
              <p><AiOutlineFolder/> Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={cls['table-code']}>
            </div>
            <div className={cls['table-article']}>
            </div>
            <div className={cls['table-changer']}>
            </div>
            <div className={cls['table-price']}>
            </div>
            <div className={cls['table-discount']}>
            </div>
            <div className={cls['table-store']}>
            </div>
            <div className={cls['table-rest']}>
            </div>
          </div>
          <div id={cls['item-active']} className={cls['table-item']}>
            <div className={cls['table-head-checkbox']}>
              <span></span>
            </div>
            <div id={cls['item-naming']} className={cls['table-naming']}>
              <p><AiOutlineFolder/> Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={cls['table-code']}>
            </div>
            <div className={cls['table-article']}>
            </div>
            <div className={cls['table-changer']}>
            </div>
            <div className={cls['table-price']}>
            </div>
            <div className={cls['table-discount']}>
            </div>
            <div className={cls['table-store']}>
            </div>
            <div className={cls['table-rest']}>
            </div>
          </div> */}
        </>
      }
    </div>
  )
}

export default ProductsList