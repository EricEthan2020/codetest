import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import IdeaImg from "../assets/images/Idea-Star.png";
import Layout from "./Layout";
const Idea = () => {
  return (
    <Layout>
      <div className="flex items-center gap-x-44">
        <div>
          <Heading text={"Have idea about project?"} />
          <div className="space-y-9">
            <p className="text-white leading-7">
              Write anything here something about yourself to showcase what
              actually you doing or targeting etc.
            </p>
            <Button text="Send us a message" />
          </div>
        </div>
        <div>
          <img src={IdeaImg} alt="Idea" className="size-96" />
        </div>
      </div>
    </Layout>
  );
};

export default Idea;
