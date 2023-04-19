import React, { useEffect, useState } from 'react';
import './index.scss';
import Pagination from './components/Pagination';
import TagList from './components/TagList';
import GridCollections from './components/GridCollections';

const categories = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
];

const App = () => {
  //массив коллекций
  const [collection, setCollection] = useState([]);
  //состояние строки поиска по имени коллекции
  const [searchValue, setSearchValue] = useState('');
  //состояние по выбранной категории
  const [searchCategory, setSearchCategory] = useState(0);
  //состояние индикатора загрузки 
  const [isLoading, setIsLoading] = useState(true);
  //состояние выбранной страницы
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    setIsLoading(true);
    
    const category = searchCategory ? `&category=${searchCategory}` : '';

    fetch(`https://643e8870c72fda4a0bf95812.mockapi.io/photo-cpllections-react?page=${page}&limit=3${category}`)
      .then(responce => responce.json())
      .then(json => {
        setCollection(json);
      })
      .catch(err => {
        console.log(err);
        alert('Ошибка при получении данных');
      })
      .finally(() => setIsLoading(false))
  }, [searchCategory, page]);
 
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <TagList 
          categories={categories}
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
        />
        <input 
          className="search-input" 
          placeholder="Поиск по названию" 
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <div className="content">
        {isLoading 
          ? 
            <h2>Идет загрузка...</h2>
          :
          <GridCollections 
            collection={collection}
            searchValue={searchValue}
          />
        }
      </div>
      <Pagination 
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;