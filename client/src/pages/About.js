import React from "react";
import homeimage from "../assets/images/employeeproduct.jpg";
import Header from '../components/Header';
import ContactForm from '../components/Contact';


const About = () => {

  const imageDisplayed = homeimage;
  const roleDisplayed = "H!red";

    return (
      <section style={{margin:0}}>
      <Header image={imageDisplayed} role={roleDisplayed}></Header>
        <div className="main-content paddsection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="container-main single-main">
                  <div className="col-md-12">
                    <div className="block-main mb-30">
                      <div className="content-main single-post padDiv">
                        <div className="journal-txt">
                          <h4><a href="#">SO LETS MAKE THE MOST IS BEAUTIFUL</a></h4>
                        </div>
                        <p className="mb-30">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                          using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
                          sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <p className="mb-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <blockquote>If you are still looking for that one person who will change your life, take a look in the mirror.</blockquote>
                        <p className="mb-30">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                          Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                          "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cmt padDiv">
                      <ContactForm></ContactForm>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  };
  
  export default About;
  