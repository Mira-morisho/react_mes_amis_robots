import { useEffect, useState } from "react";

export default function Cards({ robots }) {

    return (
        <div className='cards'>
            {
                robots?.map(card =>
                    <div className='card' key={card.id}>
                        <div className='card-image'><img src={`https://robohash.org/${card.id}?size=200x200`} />
                            <h2 className='card-name'> {card.name} </h2>
                            <p className='card-mail'>{card.email}</p>

                        </div>

                    </div>
                )
            }</div>
    )
}

