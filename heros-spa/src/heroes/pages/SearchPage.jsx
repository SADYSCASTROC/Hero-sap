import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { HeroCard } from "../components"
import { useForm } from "../../hooks/usForm"
import { getHeroesByNAme } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heros = getHeroesByNAme(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heros.length === 0;



  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);

  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searchhing</h4>
          <hr />
          <form action="" onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder="Search Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary m-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {/* 
          {
            (q === '')
              ? <div className="alert alert-primary">Search a hero</div>
              : ( heros.length === 0) && <div className="alert alert-danger"> there's no results <b>{q}</b></div>

          } */}

          <div className="alert alert-primary" style={{display: showSearch ? '' :'none'}}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={{display: showError ? '' : 'none'}}>
            there's no results <b>{q}</b>
          </div>




          {
            heros.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }


        </div>
      </div>



    </>
  )
}
