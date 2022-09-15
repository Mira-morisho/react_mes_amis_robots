import { useEffect, useState } from "react";
import "./App.css"

export default function InputSearch() {

const [result, setResult] = useState(null);
const [searchBar, setSeachBar] = useState("");
const [robots, setrobots] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setrobots(data))
      .catch((error) => error);
  }, []);

function inputData(e){
    setSeachBar(e.target.value)
}

    return (
        <>
        <h1> Mes amis Robots</h1>
        <input value={searchBar} type="text" placeholder="Rechercher par un nom" onChange={inputData}></input>
        <div className="cards">

        {
            robots.filter((robot) => 
            searchBar.length < 3 ? robot :
            (robot.name.toLowerCase().includes(searchBar.toLowerCase()))
            ).map(card =>
                    <div className='card' key={card.id}>
                        <div className='card-image'><img src={`https://robohash.org/${card.id}?size=200x200`} />
                            <h2 className='card-name'> {card.name} </h2>
                            <p className='card-mail'>{card.email}</p>

                        </div>

                    </div>
                )
            }
        </div>
        </>
    )

}