import React from "react";
import Layout from "@theme/Layout";
import classnames from "classnames";
import styles from "./styles.module.css";
import GenerateImgURL from "./utils";

const users = [
  // Please add in alphabetical order of title.
  {
    title: "Would You Rather",
    description:
      "Built Would You Rather game application with React, Redux and Semantic UI.",
    preview: "img/wyr.png",
    website: "https://mohamedsgap.github.io/WYR-app/",
    source: "https://github.com/mohamedsgap/WYR-app",
  },
  {
    title: "MyReads 📚",
    description:
      "Created a bookshelf app that allows us to select and categorize books we have read, are currently reading, or want to read. The project emphasizes using React to build the application.",
    preview: "img/myreads-app.png",
    website: "https://mohamedsgap.github.io/myreads-app/",
    source: "https://github.com/mohamedsgap/myreads-app",
  },
  {
    title: "Restaurant Reviews 🍽️",
    description:
      "Built a fully functional restaurant reviews app with React, to discover the restaurants around, integrated with different APIs.",
    preview: "img/restaurant-reviews.png",
    website: "https://mohamedsgap.github.io/restaurant-reviews/",
    source: "https://github.com/mohamedsgap/restaurant-reviews",
  },
  {
    title: "Track Your Meal 🍔",
    description:
      "The app will feature a customizable calendar for users to track their meals through the week. Users will leverage Edamam's Recipe Search API to add meals, Built with React and Redux",
    preview: "img/track-your-meal.png",
    website: "https://mohamedsgap.github.io/meal-tracking-app/",
    source: "https://github.com/mohamedsgap/meal-tracking-app",
  },
  {
    title: "Zombie vs Human 🧟‍♂️",
    description: "Built a fully functional turn-based game in JavaScript",
    preview: "/img/zombie-human.png",
    website: "https://mohamedsgap.github.io/zombie-vs-human/",
    source: "https://github.com/mohamedsgap/zombie-vs-human/",
  },
  {
    title: "Reddit Clone",
    description: "Building a Reddit clone app using React, Redux and Node.js.",
    preview: "/img/reddit-clone.png",
    source: "https://github.com/mohamedsgap/reddit-clone",
  },
  {
    title: "Social Memory Game 🧩",
    description:
      "Built my own version of the classic memory game using JavaScript",
    preview: "/img/smg.png",
    website: "https://mohamedsgap.github.io/social-memory-game/",
    source: "https://github.com/mohamedsgap/social-memory-game",
  },
  {
    title: "Quotations Generator 🤔",
    description: "Built quotations generator app in Vanilla JS and React",
    preview: "/img/quotes-generator.png",
    website: "https://mohamedsgap.github.io/quotations-generator/",
    source: "https://github.com/mohamedsgap/quotations-generator",
  },
  {
    title: "2048 Game 🎰",
    description:
      "2048 is a single-player sliding block puzzle game. The game's objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.",
    preview: "/img/2048-game.png",
    website: "https://mohamedsgap.github.io/2048-game/",
    source: "https://github.com/mohamedsgap/2048-game",
  },
  {
    title: "Flashcards 📱",
    description:
      "Flashcards is a React Native app for iOS and Android that allows users to create decks, add cards and quiz themselves.",
    preview: "/img/flash-mini.png",
    source: "https://github.com/mohamedsgap/flashcards-app",
  },
  {
    title: "Fitness 📱",
    description:
      "Fitness App is a Triathlon Tracking App for iOS and Android built with React Native.",
    preview: "/img/flashcards.png",
    source: "https://github.com/mohamedsgap/fitness-app",
  },
];

const TITLE = "Projects by Mohamed";

function Showcase() {
  return (
    <Layout title={TITLE}>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
        </div>
        <div className="row">
          {users.map((user) => (
            <div key={user.title} className="col col--4 margin-bottom--lg">
              <div className={classnames("card", styles.showcaseUser)}>
                <div className="card__image">
                  <GenerateImgURL imgURL={user.preview} />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">{user.title}</h4>
                      <small className="avatar__subtitle">
                        {user.description}
                      </small>
                    </div>
                  </div>
                </div>
                {(user.website || user.source) && (
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      {user.website && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={user.website}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Website
                        </a>
                      )}
                      {user.source && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={user.source}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;
