import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [rateDuck, setRateDuck] = useState ('')
  const [duckTime, setDuckTime] = useState ('')
  const [duckThoughts, setDuckThoughts] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [formData, setFormData] = useState('')

  console.log({rateDuck, duckTime, duckThoughts,userName,userEmail,})



  const duckColourRating = (e) => {
    setRateDuck(e.target.value)
  }

  const duckTimeSpent = (e) => {
    setDuckTime(e.target.value)
  }

  const duckReview = (e) => {
    setDuckThoughts(e.target.value)
  }

  const inputName = (e) => {
    setUserName(e.target.value)
  }


  const inputEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const finalSubmit = (e) => {
    e.preventDefault()
    setFormData(rateDuck, duckTime, duckThoughts,userName,userEmail)
  }
  console.log(formData)


  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>

        {/* answers should go here */}


      </section>
      <section className="main__form">{
      <form class="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>

        {/* <!-- Radio inputs go here --> */}
        <ul>
          <li>
            <input id="color-one" type="radio" name="color" value="1" required onClick={duckColourRating}/><label
              for="color-one"
              >1</label>
          </li>
          <li>
            <input id="color-two" type="radio" name="color" value="2" required onClick={duckColourRating}/><label
              for="color-two"
              >2</label>
          </li>
          <li>
            <input id="color-three" type="radio" name="color" value="3" required onClick={duckColourRating}/><label
              for="color-three"
              >3</label>
          </li>
          <li>
            <input id="color-four" type="radio" name="color" value="4" required onClick={duckColourRating} /><label
              for="color-four"
              >4</label>
          </li>
        </ul>



      </div>
      <div class="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        


        {/* Checkboxes */}
        <ul>
        <li>
          <label required
            ><input
              name="spend-time"
              type="checkbox"
              value="swimming"
              
              onChange={duckTimeSpent}
              checked={duckTime === 'swimming'} 
            />Swimming</label>
        </li>
        <li>
          <label
            ><input name="spend-time" type="checkbox" value="bathing"  onChange={duckTimeSpent} checked={duckTime === 'bathing'} 
            />Bathing</label>
        </li>
        <li>
          <label
            ><input
              name="spend-time"
              type="checkbox"
              value="chatting"
              
              onChange={duckTimeSpent}
              checked={duckTime === 'chatting'} 
            />Chatting</label>
        </li>
        <li>
          <label><input name="spend-time" type="checkbox" value="noTime"  onChange={duckTimeSpent} checked={duckTime === 'noTime'} 
            />I don't like to spend time with it</label>
        </li>
      </ul>



      </div>
      <label>What else have you got to say about your rubber duck?<textarea
          name="review"
          cols="30"
          rows="10"
          onChange={duckReview}
        ></textarea></label
      ><label
        >Put your name here (if you feel like it):<input
          type="text"
          name="username"
          onChange={inputName}
          /></label
      ><label>Leave us your email pretty please??<input
          type="email"
          name="email"
          onChange={inputEmail} /></label>
          <input class="form__submit" type="submit" value="Submit Survey!" onClick={finalSubmit}/>
    </form>
    
     
      }</section>
    </main>
  );
}

export default Main;
