import React from "react";
import clsx from "clsx";
import classnames from "classnames";
import Layout from "@theme/Layout";
//import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const mohamedImage = {
  imageUrl: "img/mohamed.png",
};

function intersperse(items, separator) {
  if (items.length < 1) {
    return items;
  }

  const arr = [items[0]];
  for (let i = 1; i < items.length; i++) {
    arr.push(separator);
    arr.push(items[i]);
  }

  return arr;
}

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { mohamedOnInternet } = siteConfig.themeConfig;
  const mohamedPic = useBaseUrl(mohamedImage.imageUrl);

  return (
    <Layout title={`${siteConfig.title} | Personal Website`}>
      <header className={styles.header}>
        <div className={styles.features}>
          <img
            src={mohamedPic}
            alt="logo"
            style={{
              borderRadius: "100%",
              maxWidth: 150,
            }}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <div className={styles.internetProfiles}>
            {intersperse(
              Object.keys(mohamedOnInternet).map((key) => {
                const item = mohamedOnInternet[key];
                return (
                  <a href={item.href} rel="noreferrer noopener" target="_blank">
                    {item.label}
                  </a>
                );
              }),
              <span className="padding-horiz--md">|</span>
            )}
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default Home;
