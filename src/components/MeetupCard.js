function MeetupCard (props){
    return(
        <div className="col-md-4 col">
            <div className="card">
                <img src={props.image} alt={props.title} />
                <div className="card-body">
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                    <address>{props.address}</address>
                    <div align='center'>
                        <button>To Favourites</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MeetupCard;