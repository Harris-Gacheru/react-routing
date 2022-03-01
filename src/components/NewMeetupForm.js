import { useRef } from 'react';

function NewMeetupForm(props){
    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    function submitHandler(e){
        e.preventDefault();

        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetupData);
        console.log(meetupData);
    }

    return(
        <form action="" method="post" onSubmit={submitHandler}>
            <div className="form-group mb-3">
                <label htmlFor="title">Meetup Title</label>
                <input type="text" name="title" id="title" className="form-control" ref={titleRef} required/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="image">Image url</label>
                <input type="url" name="image" id="image" className="form-control" ref={imageRef} required/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" className="form-control" ref={addressRef} required/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" className="form-control" rows="5" ref={descriptionRef} required></textarea>
            </div>
            <div align='center'>
                <button className="btn btn-primary">Add Meetup</button>
            </div>
        </form>
    );
}

export default NewMeetupForm;