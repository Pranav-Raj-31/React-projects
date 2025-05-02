
import React from 'react';
import './Services.css';
import { Link } from "react-router-dom";


const Services = () => {
  const data1=[
    {image:'/public/image1.png',name:"Overthinking",path:"/Overthinking"},
    {image:'/public/image3.png',name:"Tired minde",path:"/Tiredmind"},
    {image:'/public/image2.png',name:"Absent mind",path:"/Absentmind"},
    {image:'/public/image5.png',name:"Depression",path:"/Depression"},
 ]
 const data2=[
  {image:'/public/image10.jpeg',name:"Insomnia",path:"/Insomnia"},
  {image:'/public/image9.png',name:"ADHD",path:"/ADHD"},
  {image:'/public/image12.jpeg',name:"Anxiety",path:"/Anxiety"},
  {image:'/public/image6.png',name:"OCD",path:"/OCD"},
]

const data3=[
  {image:'https://img.freepik.com/premium-photo/ai-enhanced-personal-therapist-mental-health-support-work_839035-13787.jpg',name:"Dr piyush Dholariya",post:"psychologist",work:"holistic wellness coach",info:"A Warm, empathetic,and non-judgmental therapist counseling with all ages peopel to overcome issues and liv...",location:"Ahmedabad,Gujarat",availabale:" has Availability",path:"/Contact"},

  {image:'https://img.freepik.com/premium-photo/portrait-confident-young-woman-working-as-mental-health-counselor-created-with-generative-ai_762026-21852.jpg',name:"Mrs Ashkhen Hovhannisyan",post:"psychologist(counselling)",work:"",info:"Counselling Psychologist/Psychodynamic Therapy(ISTDP with Supervision) with 5 years of experien..",location:"Ahmedabad,Gujarat",availabale:" has Availability",path:"/Contact"},

  {image:'https://img.freepik.com/premium-photo/ai-enhanced-personal-therapist-mental-health-support-work_839035-13884.jpg',name:"Mrs Gunjan Arya",post:"psychologist(counselling)",work:"CBT psychotherapist",info:"Level 3 Advanced TEAM-CBT Counselling Psychologist following the T.E.A.M approach,primary support...",location:"Ahmedabad,Gujarat",availabale:"has Availability",path:"/Contact"},

  {image:'https://img.freepik.com/premium-photo/ai-enhanced-personal-therapist-mental-health-support-work_839035-13831.jpg',name:"Dr Jignesh Ahir Ph.D.",post:"psychologist (counselling)",work:"Relationship Therapist",info:"Psychologist Dr.Jignesh Ahir provides a comfortable,safe,and confidential enviroment for you to discuss and ad..",location:"paladi,Ahmedabad",availabale:" has Availability",path:"/Contact"},

  {image:'https://img.freepik.com/premium-photo/portrait-confident-young-woman-working-as-mental-health-counselor-created-with-generative-ai_762026-21850.jpg',name:"Mrs abigali Kellogg",post:"psychotherapist",work:"",info:"I am an expeienced, committed, empathetic counselling psychologist practising an Eclectic Therapeutic App...",location:"Ahemedabad,Gujarat",availabale:"has Availability",path:"/Contact"},

  {image:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/10/GettyImages-1207514066_header-1024x575.jpg?w=1155&h=1528',name:"Mrs Krisha jain",post:"psychological Counselor",work:"",info:"An Experienced, Competent and compassionate Psychological counselor Having a rich background of 3.5 year...",location:"Rajkot,Gujarat",availabale:"has Availability",path:"/Contact"},

  {image:'http://psychology4u.net/wp-content/uploads/2020/05/conversation-with-patient-KTZMUAL-scaled.jpg',name:"Mrs Purvangi Shukla",post:"psychologist",work:"holistic wellness coach",info:"I am a psychologist in Surat,Gujarat. I am an experienced,qualified psychotherapist Counsellor with Years...",location:"Surat,Gujarat",availabale:" has Availability",path:"/Contact"},
  {image:'https://i.ytimg.com/vi/dCLdK3hvUOE/maxresdefault.jpg',name:"Mrs Astha shah",post:"psychologist",work:"holistic wellness coach",info:"Counselling psychologist,assisting an individual on their journey.",location:"Ahemedabad,Gujarat",availabale:" has Availability",path:"/Contact"},
  {image:'https://cdn.pixabay.com/photo/2023/05/15/19/43/ai-generated-7995840_1280.jpg',name:"Mrs Krishna Panchal",post:"Licensed Clinical Psychologist",work:"holistic wellness coach",info:"Licensed Clinical Psychologist and counselor.",location:"Ahemedabad,Gujarat",availabale:"has Availability",path:"/Contact"},
  {image:'https://www.thehrdirector.com/wp-content/uploads/2023/06/Asim-57695a20.jpg',name:"Mr john ",post:"psychologist(Clinical)",work:"Psychoanalytic Psychotherapist",info:"Clinical psychogist / Psychoanalytic Psychotherapist with 25 years of experience with people from around t..",location:"Navsari,Gujarat",availabale:"has Availability",path:"/Contact"}
 
]
  return (
    <div className="services" >
      <h2>Our Services</h2>
      
      <div className="service-cards">
      {data1.map((elem,index)=>
        <div className="card">
          <img src={elem.image} alt="ADHD" />
          <h3>{elem.name}</h3>
          <button className='helpbtn'> <Link to={elem.path}>Get Help</Link></button>

        </div>
          )}
      </div>
    
      <div className='image-content'>
        <div className="image-contenar">
          <img src="/public/image6.png" alt="overthinking" />
        </div>
        <div className="image-contenar">
           <img src="/public/image7.png" alt="overthinking" />
        </div>
        <div className="image-contenar">
           <img src="/public/image8.png" alt="overthinking" />
       </div>
    </div>
    <div className="service-cards">
      {data2.map((elem,index)=>
        <div className="card">
          <img src={elem.image} alt="ADHD" />
          <h3>{elem.name}</h3>
          <button className='helpbtn'> <Link to={elem.path}>Get Help</Link></button>
        </div>
          )}
      </div>
      <div className="solution">
        <img src='https://static.wixstatic.com/media/8d601e_bf27560b50994ca196f1b708306eff42~mv2.jpg/v1/fill/w_1175,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1670145448.jpg' alt=''></img>
        <h1>Let's Talk. Together we can Find Solution.</h1>
        </div>
        <div className="scroll">
            <div className="scroll-container">
                <img src="https://img.freepik.com/premium-photo/ai-enhanced-personal-therapist-mental-health-support-work_839035-13787.jpg" alt=""></img>
                <img src="https://img.freepik.com/premium-photo/portrait-confident-young-woman-working-as-mental-health-counselor-created-with-generative-ai_762026-21852.jpg" alt=""></img>
                <img src="https://img.freepik.com/premium-photo/ai-enhanced-personal-therapist-mental-health-support-work_839035-13884.jpg" alt=""></img>
                <img src="https://img.freepik.com/premium-photo/ai-enhanced-personal-therapist-mental-health-support-work_839035-13831.jpg" alt=""></img>
                <img src="https://cdn.pixabay.com/photo/2023/05/15/19/43/ai-generated-7995840_1280.jpg" alt=""></img>
                <img src="http://psychology4u.net/wp-content/uploads/2020/05/conversation-with-patient-KTZMUAL-scaled.jpg" alt=""></img>
            
            </div>
            <div className="scroll-container">
                <img src="https://img.freepik.com/premium-photo/ai-enhanced-personal-therapist-mental-health-support-work_839035-13787.jpg" alt=""></img>
                <img src="https://img.freepik.com/premium-photo/portrait-confident-young-woman-working-as-mental-health-counselor-created-with-generative-ai_762026-21852.jpg" alt=""></img>
                <img src="https://img.freepik.com/premium-photo/ai-enhanced-personal-therapist-mental-health-support-work_839035-13884.jpg" alt=""></img>
                <img src="https://img.freepik.com/premium-photo/ai-enhanced-personal-therapist-mental-health-support-work_839035-13831.jpg" alt=""></img>
                <img src="https://cdn.pixabay.com/photo/2023/05/15/19/43/ai-generated-7995840_1280.jpg" alt=""></img>
                <img src="http://psychology4u.net/wp-content/uploads/2020/05/conversation-with-patient-KTZMUAL-scaled.jpg" alt=""></img>
            
            </div>
        </div>
        <div className='findtherapist'><h2>Find therapists</h2></div>
        <div className='book'>
        {data3.map((elem,index)=>
            <div className='book-content'>
             
                  <div className='content-info'>
                    <img src={elem.image} alt=''></img>
                    <h2>{elem.name}</h2>
                    <p className='work'>{elem.post}</p>
                    <p className='work'>{elem.work}</p>
                    <p className='info'>{elem.info}</p>
                    <h6>{elem.location}</h6>
                  </div>
                  <div className='content-last'>
                      <div className='availabale'>
                          <div className='round'></div>
                          <h5>{elem.availabale}</h5>
                      </div>
                      <button className='bookbtn'> <Link to={elem.path}>contact us</Link></button>

                  </div>
               
                 
            </div>
             )}
        </div>  
  </div>
  );
};

export default Services;
