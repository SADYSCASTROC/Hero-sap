import { Link } from "react-router-dom";
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImgUrl = `/asset/heroes/${ id }.jpg`;
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters" >
                    <div className="col-4">
                        <img src={heroImgUrl} alt={ superhero }  className="card-img"/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero} </h5>
                            <p className="card-text">{ alter_ego}</p>

                            {
                                (alter_ego !== characters ) && ( <p >{characters}</p> )
                            }
                            <p className="card-text">{ first_appearance }</p>
                            
                            <Link to={`/hero/${id}`}>
                            Más informacion
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
