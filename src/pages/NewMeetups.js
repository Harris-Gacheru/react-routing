import NewMeetupForm from '../components/NewMeetupForm';
import classes from './NewMeetups.module.css';

function NewMeetups(){
    function addMeetupHandler(meetupData){
        fetch('https://routing-app-c5356-default-rtdb.firebaseio.com/meetups',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    return(
        <div className={classes.container}>
            <div className={classes.form_container}>
                <h3>New Meetup</h3>

                <NewMeetupForm onAddMeetup={addMeetupHandler}/>
            </div>
        </div>
    );
}

export default NewMeetups;