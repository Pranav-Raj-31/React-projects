import React from 'react';
import './Overthinking.css';

const Overthinking=()=>{
    return(
    <div className='overthink'>
        <div className='signs'>
            <img src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/04/depression-symptoms-treatment-icons-depression-symptoms-treatment-icons-infographic-concept-mental-health-vector-126790020-01.jpeg" alt="" />
            <div className='signs-text'>
                <h2>Signs and Symptoms</h2>
                <ol>
                    <li>poor concentration</li>
                    <li>feelings of excessive guilt or low self-worth</li>
                    <li>hopelessness about the future</li>
                    <li>thoughts about dying or suicide</li>
                    <li>disrupted sleep</li>
                    <li>changes in appetite or weight</li>
                    <li>feeling very tired or low in energy</li>
                    <li>Aches, pains, and physical symptoms</li>
                    <li>Anger and irritability</li>

                </ol>
            </div>
        </div>
        <div className='managing'>
            <div className='managing-text'>
                <h2>Managing Symptoms - What You Can Do</h2>
                <ol>
                    <li>try to keep doing activities you used to enjoy</li>
                    <li>stay connected to friends and family</li>
                    <li>exercise regularly, even if it’s just a short walk</li>
                    <li>stick to regular eating and sleeping habits as much as possible</li>
                    <li>avoid or cut down on alcohol and don’t use illicit drugs, which can make depression worse
                    </li>
                    <li>talk to someone you trust about your feelings</li>
                    <li>seek help from a healthcare provider</li>                  
                </ol>
            </div>
            <img src="http://www.livingwellmag.com/wp-content/uploads/2015/01/Manage-Stress.jpg" alt="" />
        </div>
        <div className='sucide'>
        <img src="https://www.gannett-cdn.com/-mm-/2b06f05d8e31b4112ec2ecbca6e9ef0db0cf4d0b/c=0-108-2125-1309/local/-/media/2015/06/18/WIGroup/Marshfield/635702319163108556-suicide-word-cloud.jpg?width=2125&height=1201&fit=crop&format=pjpg&auto=webp" alt="" />

            <div className='sucide-text'>
                <h2>If You Have Thoughts of Suicide</h2>
                <ol>
                    <li>remember you are not alone, and that many people have gone through what you’re experiencing and found help</li>
                    <li>talk to someone you trust about how you feel</li>
                    <li>talk to a health worker, such as a doctor or counsellor</li>
                    <li>join a support group</li>
                </ol>
            </div>
        </div>
        <div className='help'>
            <h2>Get help</h2>
            <ul>
                <li><a href='http://www.nimh.nih.gov/findhelp'>NIMH-Find help</a></li>
                <li><a href='https://findtreatment.gov/'>SAMHSA-Find Treatment</a></li>
            </ul>
        </div>
    </div>
        
    );
};

export default Overthinking;