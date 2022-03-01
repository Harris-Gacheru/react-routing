import MainNavigation from "../components/MainNavigation";
import MeetupCard from "../components/MeetupCard";
import classes from './AllMeetups.module.css';

function AllMeetups() {
    return (
        <div className={classes.container}>
            <h3>All Meetups</h3>
            <div className="row">
                <MeetupCard title='Fusce' description='Integer nunc nisi, hendrerit in felis sit amet, vulputate hendrerit tortor.' address='23 Long Island' image='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'/>
                <MeetupCard title='Ipsum' description='Fusce varius libero eu est sollicitudin, quis ullamcorper magna vestibulum.' address='123 Bull frog' image='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-st-michel.jpg'/>                
                <MeetupCard title='Lorem ipsum' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' address='123 Bull frog' image='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-versailles-gardens.jpg'/>
                <MeetupCard title='Lorem' description='Quisque in tortor metus. Nulla mollis purus at feugiat convallis. Phasellus tincidunt iaculis magna, sit amet ultrices libero fringilla et.' address='123 Bull frog' image='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-chateau-de-chenonceau.jpg'/>
            </div>
        </div>
    );
}

export default AllMeetups;