
import React, { useEffect, useState } from "react";
import axios from "axios";
import Side from "../nav";
import Footer from "../footer";
function Contact() {


    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "", // Assuming initial value 't' is intentional
        mobile: "",
        description: "",
      });
    
      // Function to update state on form input change
      const addData = (e) => {
        const { name, value } = e.target;
        const regex = /^[0-9]*$/; // Regular expression to allow only numeric characters
        if (name === 'mobile' && (regex.test(value) || value === '') || name !== 'mobile') {
          setData({ ...data, [name]: value });
        }
      };
    
      // Function to submit the form data
      const submit = async () => {
        if (data.name.trim() === '') {
            alert('Text box cannot be blank!');return;
          } 

          if (data.email.trim() === '') {
            alert('Text box cannot be blank!');return;
          } 

          if (data.subject.trim() === '') {
            alert('Text box cannot be blank!');return;
          } 

          if (data.mobile.trim() === '') {
            alert('Text box cannot be blank!');return;
          } 
    
        try {
          // Ensure REACT_APP_IP is correctly set in your .env file
          const response = await axios.post(`${process.env.REACT_APP_IP}/contactForm`, data);
    
          if (response.data && response.data.msg) { // Ensure there's a response and it contains a message
            // Reset the form data
            setData({
              name: "",
              email: "",
              subject: "",
              mobile: "",
              description: "",
            });
    
            alert("Data saved");
          } else {
            // Handle the case where the response might not be as expected
            alert("An unexpected response was received from the server.");
          }
        } catch (error) {
          console.error("An error occurred:", error);
          alert("Failed to send data.");
        }
      };
    


  return (
    <div>
           <Side />

           <section class="inner-banner py-5">
        <div class="w3l-breadcrumb py-lg-5">
            <div class="container pt-sm-5 pt-4 pb-sm-4">
                <h4 class="inner-text-title font-weight-bold pt-5">Contact Us</h4>
                <ul class="breadcrumbs-custom-path">
                    <li><a href="index.html">Home</a></li>
                    <li class="active"><span class="fa fa-chevron-right mx-2" aria-hidden="true"></span>Contact</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="w3l-contact-11 py-5" id="contact">
        <div class="container py-md-5 py-4">
            <div class="row text-center mb-5 pb-sm-4">
                <div class="col-lg-3 col-sm-6 contact-info">
                    <i class="fas fa-map-marked-alt"></i>
                    <h4>Location</h4>
                    <p>London, 235 Terry, 10001</p>
                </div>
                <div class="col-lg-3 col-sm-6 contact-info mt-md-0 mt-4">
                    <i class="fas fa-headset"></i>
                    <h4>Phone</h4>
                    <p><a href="tel:+44 987 654 321">+44 123 984 439</a></p>
                </div>
                <div class="col-lg-3 col-sm-6 contact-info mt-lg-0 mt-4">
                    <i class="fas fa-envelope-open-text"></i>
                    <h4>Email</h4>
                    <p><a href="mailto:mail@example.com" class="email">mail@example.com</a></p>
                </div>
                <div class="col-lg-3 col-sm-6 contact-info mt-lg-0 mt-4">
                    <i class="fas fa-user-clock"></i>
                    <h4>Working Hours</h4>
                    <p>7:00 AM - 9:00 PM</p>
                </div>
            </div>
            <div class="form-inner-cont mx-auto" style={{ maxWidth: "800px" }}>
                <h3 class="title-style text-center mb-4">Get In Touch</h3>
                <form onSubmit={(e) => e.preventDefault()} class="signin-form">
                    <div class="row align-form-map">
                        <div class="col-sm-6 form-input">
                            <input type="text" name="name" id="w3lName"  required   value={data.name} placeholder="Name"   onChange={addData} />
                        </div>
                        <div class="col-sm-6 form-input">
                            <input type="email" name="email" id="w3lSender"  required  value={data.email}   onChange={addData} placeholder="Email"  />
                        </div>
                        <div class="col-sm-6 form-input">
                            <input type="text" name="subject"  required  value={data.subject}  onChange={addData} placeholder="Subject" class="contact-input"/>
                        </div>
                        <div class="col-sm-6 form-input">
                            <input  name="mobile"  maxLength={10} pattern="[0-9]*" required  value={data.mobile}   onChange={addData}placeholder="Phone Number" class="contact-input"/>
                        </div>
                    </div>
                    <div class="form-input">
                        <textarea placeholder="Message" name="description" required   value={data.description}  onChange={addData} id="w3lMessage" ></textarea>
                    </div>
                    <div class="submit text-right">
                        <button  onClick={submit} class="btn btn-style">Submit
                            Message</button>
                    </div>
                </form>
            </div>
        
            <div class="map-iframe mt-5 pt-md-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                    width="100%" height="400" frameborder="0" style={{ border: "0" }} allowfullscreen=""></iframe>
            </div>
            
        </div>
    </section>
    <div class="projects" id="special">
        <div class="projects-grids">
            <div class="istagram-feeds">
                <div class="projects-w3l-grid-info">
                    <a href="blog-single.html"><img src="assets/images/blog-s1.jpg" class="img-fluid" alt="" />
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-top">
                            <span class="fab fa-instagram"></span>
                        </div>
                    </a>
                </div>
                <div class="projects-w3l-grid-info">
                    <a href="blog-single.html"><img src="assets/images/blog-s2.jpg" class="img-fluid" alt="" />
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-top">
                            <span class="fab fa-instagram"></span>
                        </div>
                    </a>
                </div>
                <div class="projects-w3l-grid-info">
                    <a href="blog-single.html"><img src="assets/images/blog-s3.jpg" class="img-fluid" alt="" />
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-top">
                            <span class="fab fa-instagram"></span>
                        </div>
                    </a>
                </div>
                <div class="projects-w3l-grid-info">
                    <a href="blog-single.html"><img src="assets/images/blog-s4.jpg" class="img-fluid" alt="" />
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-top">
                            <span class="fab fa-instagram"></span>
                        </div>
                    </a>
                </div>
                <div class="projects-w3l-grid-info">
                    <a href="blog-single.html"><img src="assets/images/blog-s5.jpg" class="img-fluid" alt="" />
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-top">
                            <span class="fab fa-instagram"></span>
                        </div>
                    </a>
                </div>
                <div class="projects-w3l-grid-info">
                    <a href="blog-single.html"><img src="assets/images/blog-s6.jpg" class="img-fluid" alt="" />
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-top">
                            <span class="fab fa-instagram"></span>
                        </div>
                    </a>
                </div>
                <div class="projects-w3l-grid-info">
                    <a href="blog-single.html"><img src="assets/images/blog-s8.jpg" class="img-fluid" alt="" />
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-top">
                            <span class="fab fa-instagram"></span>
                        </div>
                    </a>
                </div>
                <div class="projects-w3l-grid-info">
                    <a href="blog-single.html"><img src="assets/images/blog-s7.jpg" class="img-fluid" alt="" />
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-top">
                            <span class="fab fa-instagram"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
   <Footer />
    </div>
  )
}

export default Contact
