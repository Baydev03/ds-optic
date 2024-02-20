import { setImportDatas, setImportTitles } from '../../../store/slices/importSlice';
import { Spreadsheet } from 'react-spreadsheet';
import { BsChevronDown } from 'react-icons/bs'
import cls from './importList.module.scss';
import { useDispatch } from 'react-redux';  
import { useState } from 'react';

const titleData = [
  {
    id: 1,
    title: 'Не назначено',
    value: 'none',
  },
  {
    id: 2,
    title: 'Наименование',
    value: 'name',
  },
  {
    id: 3,
    title: 'Тип (товар / услуга)',
    value: 'type',
  },
  {
    id: 4,
    title: 'Группа',
    value: 'group',
  },
  {
    id: 5,
    title: 'Код товара',
    value: 'code',
  },
  {
    id: 6,
    title: 'Артикул',
    value: 'article',
  },
  {
    id: 7,
    title: 'Категория',
    value: 'category',
  },
  {
    id: 8,
    title: 'Страна',
    value: 'country',
  },
  {
    id: 9,
    title: 'Цена, продажа',
    value: 'price',
  },
  {
    id: 10,
    title: 'Описание',
    value: 'description',
  },
  {
    id: 11,
    title: 'Размер',
    value: 'size',
  },
  {
    id: 12,
    title: 'Материал',
    value: 'material',
  },
  {
    id: 13,
    title: 'Срок годности',
    value: 'exprire',
  },
]

const ImportList = () => {
  const numRows = 30;
  const numCols = 10;
  const dispatch = useDispatch()
  const [productTitle, setProductTitle] = useState({title: 'Не назначено', value: 'none'})
  const [data, setData] = useState(Array.from({ length: numRows }, () =>
    Array(numCols).fill({}),
  ))

  const [titles, setTitles] = useState([])
  const [removes, setRemoves] = useState([])
  const [isPaste, setPaste] = useState(false)

  const handlePaste = (e) => {
    if(!isPaste){
      setData(e) 
      dispatch(setImportDatas(JSON.stringify(data)))
    }
    setPaste(true)
  }

  function addValueToFirstEmptyCell(value, params) {
    if(isPaste){
      const newArr = [...data]
      setValueInArray(newArr, value?.value, params?.row, params?.column) 
      rearrangeArray(newArr, params)
      getLastNonEmptyColumnIndex(newArr)
      setData(newArr)
      setPaste(false)
      getLastNonEmptyRowIndex(newArr)
      dispatch(setImportDatas(JSON.stringify(newArr)))
    }
  }

  function setValueInArray(newArr ,value, row, column) {
    if (newArr[row] && newArr[row][column]) {
      newArr[row][column] = { value };
    }
  }

  function rearrangeArray(arr, params) {
    if(params){
      if(!arr[0][0]?.value && params?.row === 0 && params.column === 0){
        arr[0][0] = {value: arr[params?.row][params?.column].value}
        arr[params?.row][params?.column] = {}
      }else if(!arr[0][0]?.value && params?.row === 0){
        arr[0][0] = {value: arr[params?.row][params?.column].value}
        arr[params?.row][params?.column] = {}
      }else{
        let isValid = 0
        for(let i = 0; i < arr.length; i++){
          if(arr[i][0]?.value){
            isValid = false
          }else{
            isValid = true
          }
        }
  
        if(isValid){
          if(!arr[params?.row][0]?.value && params.row !== 0){
            for(let i = 0; i < arr.length; i++){
              if(!arr[i][0]?.value){
                arr[i][0] = { value: arr[params?.row][params?.column].value }
                arr[params?.row][params?.column] = {}
                return
              }
            }
          }else if(params.column === 0 && params.row !== 0){
            for(let i = 0; i < arr.length; i++){
              if(!arr[i][0]?.value){
                arr[i][0] = { value: arr[params?.row][params?.column].value }
                arr[params?.row][params?.column] = {}
                return
              }
            }
          }
        }
      }
    }
  }

  function getLastNonEmptyRowIndex(arr) {
    let lastIndex = -1;
    for (let i = 0; i < arr.length; i++) {
      const row = arr[i];
      if (row.some((item) => Object.keys(item).length > 0)) {
        lastIndex = i;
      }
    }
    const res = []
    for(let i = 0; i < lastIndex + 1; i++){
      res.push({ id: i + 1})
    }
    setRemoves(res)
  }

  function getLastNonEmptyColumnIndex(arr) {
    if(arr){
      const numRows = arr?.length;
      const numCols = arr[0]?.length;
      let lastNonEmptyColIndex = -1;
      for (let col = numCols - 1; col >= 0; col--) {
        for (let row = 0; row < numRows; row++) {
          if (Object.keys(arr[row][col])?.length !== 0 && arr[row][col]?.value !== ' ') {
            lastNonEmptyColIndex = col;
            break;
          }
        }
        if (lastNonEmptyColIndex !== -1) {
          break;
        }
      }

      if(lastNonEmptyColIndex + 1 !== titles.length){
        const res = []
        for(let i = 0; i < lastNonEmptyColIndex + 1; i++){
          res.push({ id: i, title: 'Не назначено', value: 'none' })
        }
        setTitles((prev) => prev.length < res.length ? [...prev, ...res.slice([prev.length])] : res)  
        dispatch(setImportTitles(titles.length < res.length ? [...titles, ...res.slice([titles.length])] : res))
      }
    }
  }

  const productTitleHandler = (elem) => {
    const hasValue = titles.find(item => item.title === elem.title && elem.title !== 'Не назначено')

    if(!hasValue){
      setTitles((prev) => prev.map(item => item.id === productTitle.id ? {...item, title: elem.title, value: elem.value} : item))
      dispatch(setImportTitles(titles.map(item => item.id === productTitle.id ? {...item, title: elem.title, value: elem.value} : item)))
      setProductTitle({})
    }else{
      setProductTitle({})
    }
  }

  const deleteRowHandler = (e) => {
    const res = [...data]

    for(let i = 0; i < res.length; i++){
      if(res[e][i]?.value){
        res[e][i] = {}
      }
    } 

    setData(res)
  }
    
  return <div className={cls['import']}>
    <h3>
      Скопируйте товары в вашей таблице, кликните на ячейку и нажмите Ctrl+V - товары вставятся. 
      Далее назовите столбцы и нажмите «Импортировать»
    </h3> 
    <div className={cls['import-table']}>
      <div className={cls['import-title']}>
        {titles?.map((item) => {
          return <div key={item.id}>
            <span onClick={() => setProductTitle(item)}>{item?.title} <BsChevronDown/></span>
            {productTitle?.id === item.id && <ul>
              {titleData.map(item => (
                <li onClick={() => productTitleHandler(item)} key={item?.id}>{item?.title}</li>
              ))}
            </ul>}
          </div>
        })}
      </div>
      <div className={cls['import-body']}>
        {/* <div className={cls['import-removes']}>
          {removes.map(item => (
            item.id && <button onClick={() => deleteRowHandler(item.id)} key={item.id}><RiDeleteBin5Line/></button>
          ))}
        </div> */}
        <Spreadsheet 
          hideRowIndicators={true} 
          hideColumnIndicators={true} 
          data={data}
          onChange={(e) => handlePaste(e)}
          onCellCommit={(_,value,params) => addValueToFirstEmptyCell(value, params)}
        />
      </div>
    </div>
  </div>;
}

export default ImportList