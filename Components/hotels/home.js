//import home from ""

const Home = ({ hotelsData}) => {
    console.log(hotelsData)
    return (  
        <div>
            {Home.map(hotelsData => hotel(
                <div>
                    key={hotel.slug}
                    hotel={hotelsData}
                </div>
                )
            )}
        </div>
    );
}

export default Home;






/*
export default class Home extends React.Component {
    render() {
        const { data } = this.props
        console.log(data);
        return (
            <div>
                {data.map(hotelinfo =>
                    
                    <div>
                        key={hotelinfo.id}
                    hotelinfo={hotelinfo} 

                    </div>
                )}
            </div>
        )
    }
}



{
    hotels.map(hotel =>
        <HotelInfo
            key={hotel.id}
            hotel={hotel} />
    )
}
*/