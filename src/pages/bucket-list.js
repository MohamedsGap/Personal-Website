import React from "react";
import Layout from "@theme/Layout";

function BucketList() {
  return (
    <Layout>
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 markdown">
            <h1>Bucket List</h1>

            <h3>TODO</h3>
            <ul>
              <li>Speak at a Tech Conference.</li>
              <li>Help other people as much as I could.</li>
              <li>Visit new cities I've been never been to.</li>
              <li>Write a blog post weekly about what I like and learn.</li>
              <li>
                Have an opportunity to meet Brian Vaughn and Rachel Nabors (tech
                community).
              </li>
            </ul>
            <h3>In Progress</h3>
            <ul>
              <li>Build a Chrome & VScode extension.</li>
              <li>Always eager to learn new technologies.</li>
              <li>Prepare for AWS cloud practitioner exam.</li>
              <li>contribute to open source projects in spare time.</li>
            </ul>
            <h3>Done</h3>
            <ul>
              <li>Got a computer science bachelor degree (Aug 17, 2020).</li>
              <li>
                Got my first job as full time software engineer (Nov 2020).
              </li>
              <li>
                Participated in Huawei seeds of the future program (Oct. 2020).
              </li>
              <li>
                One of the top 5 students in Cloud track of Huawei ICT
                competition (2019-2020).
              </li>
              <li>
                Got two Udacity certifications in Cloud DevOps & Web
                development.(2018 & 2020).
              </li>
              <li>
                Completed a software development diploma in 12 months fully
                funded by Facebook (July 2020).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BucketList;
