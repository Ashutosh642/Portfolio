import React,{useState,useEffect,useRef} from 'react';
import './Contact.css';
import emailjs from 'emailjs-com'
function Contact() {
    const intialValues={name:"", email:"", subject:"", message:""};
    const [formValues, setFormValues]= useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const form = useRef();
    const handleChange = (e) =>{
        const {name, value} =e.target;
        setFormValues({...formValues,[name]: value});
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));     
        setIsSubmit(true);        
      };

      useEffect(()=>{
          console.log(formErrors);
          if(Object.keys(formErrors).length === 0 && isSubmit){
              console.log(formValues)
              emailjs.sendForm('service_wgit269', 'template_f1h92uq', form.current, 'user_cWGpK15sTZU8rJKbVjCA3')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          }
          setFormValues({name:"", email:"", subject:"", message:""});
      },[formErrors]);

    const validate = (values) =>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if(!values.name){
            errors.name = "Name is required!"
        }

        if(!values.email){
            errors.email = "Email is required!"
        }else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }

        if(!values.subject){
            errors.subject = "Subject is required!"
        }

        if(!values.message){
            errors.message = "Message is required!"
        }

        return errors;
    }

    
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta" style={{'marginBottom':'50px'}}>
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+918018978793</strong> or email <strong>ashutoshpanigrahi086@gmail.com</strong></p>
                        </div>
                        {Object.keys(formErrors).length === 0 && isSubmit ? 
                        (
                            <i 
                                style= {{
                                    'color':'black', 
                                    'fontSize':'20px',
                                    'border':'2px solid black',
                                    'padding':'20px',
                                    'backgroundColor':'yellow',
                                    'borderRadius':'30px'
                                }}>
                                Email has been sent successfully
                            </i>
                        ) : (
                           null
                        )}

                        <form style={{'marginTop':'50px'}} ref={form} className="input__box" onSubmit={sendEmail}>
                           <input 
                            type="text" 
                            className="contact name" 
                            placeholder="Your name *"  
                            name="name" 
                            value={formValues.name}
                            onChange={handleChange}
                           
                            />
                            <p style={{'color':'yellow'}}>{formErrors.name}</p>
                           <input 
                            type="text" 
                            className="contact email" 
                            placeholder="Your Email *" 
                            name="email" 
                            value={formValues.email}
                            onChange={handleChange}
                            
                            />
                            <p style={{'color':'yellow'}}>{formErrors.email}</p>
                           <input 
                            type="text" 
                            className="contact subject" 
                            placeholder="Write a Subject *" 
                            name="subject" 
                            value={formValues.subject}
                            onChange={handleChange}
                            
                            />
                            <p style={{'color':'yellow'}}>{formErrors.subject}</p>
                           <textarea 
                            id="message" 
                            placeholder="Write Your message *" 
                            name="message" 
                            value={formValues.message}
                            onChange={handleChange}
                           >
                            </textarea>
                            <p style={{'color':'yellow'}}>{formErrors.message}</p>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col__2">
                    <div className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact