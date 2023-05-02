import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import daniel from "./assets/images/image-daniel.jpg";
import jeanette from "./assets/images/image-jeanette.jpg";
import jonathan from "./assets/images/image-jonathan.jpg";
import kira from "./assets/images/image-kira.jpg";
import patrick from "./assets/images/image-patrick.jpg";

import { Card } from "./Card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <div>
        <div className="grid-cards">
          <Card
            estilo="grid-item-1"
            nameColor="title-color-white"
            img={daniel}
            user="Daniel Clifford"
            verified="Verified Graduate"
            title="I  received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
            testimonial="I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."
          />

          <Card
            estilo="grid-item-2"
            nameColor="title-color-white"
            img={jonathan}
            user="Jonathan Walters"
            verified="Verified Graduate"
            title="The team was very supportive and kept me motivated"
            testimonial="I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."
          />

          <Card
            estilo="grid-item-3"
            nameColor="title-color-gray"
            img={jeanette}
            user="Jeanette Harmon"
            verified="Verified Graduate"
            title="An overall wonderful and rewarding experience"
            testimonial="Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
          />

          <Card
            estilo="grid-item-4"
            nameColor="title-color-white"
            img={patrick}
            user="Patrick Abrams"
            verified="Verified Graduate"
            title="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
            testimonial="The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
          />
        
          <Card
            estilo="grid-item-5"
            nameColor="title-color-gray"
            img={kira}
            user="Kira Whittle"
            verified="Verified Graduate"
            title="Such a life-changing experience. Highly recommended!"
            testimonial="Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
          />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
