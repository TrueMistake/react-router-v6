import React from 'react';
import * as episode from '../api/episode.json'
import {Link, useSearchParams} from "react-router-dom";
import Select from "../components/Select";
import {sortASC} from "../helper/helper";
import * as characters from "../api/characters.json";

const Episode = () => {
  const [searchParams, setSearchParams] = useSearchParams({sort: 'asc'});
  const episodeSort = sortASC(characters.default, searchParams.get('sort'));

  const changeSort = (val) => {
    setSearchParams({sort: val})
  }

  return (
    <div>
      <Select sort={changeSort} val={searchParams.get('sort')}/>
      {episodeSort.map(item => (
        <Link to={`/episode/${item.id}`} key={item.id} className="block">
          <div className="text"><span>Название:</span> {item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Episode;