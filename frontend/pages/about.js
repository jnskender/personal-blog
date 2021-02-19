import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import { fetchAPI } from "../lib/api";
import styled from "styled-components";
import Image from "../components/image";

const Wrapper = styled.div`
  width: 65ch;
  h1 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 3.25rem;
    margin-top: 0;
    margin-bottom: 2.35625rem;
  }
  .card {
    display: flex;
  }
  .stat {
    display: flex;
  }
  .avatar {
    img {
      border-radius: 50%;
      max-height: 200px;
      width: auto;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    max-height: 600px;
  }
`;
export default function About({ aboutPage, author }) {
  return (
    <Wrapper>
      <h1>{aboutPage.Hero.title}</h1>
      <section>
        <ReactMarkdown source={aboutPage.content} escapeHtml={false} />
      </section>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const [aboutPage, author] = await Promise.all([
    fetchAPI(`/about`),
    fetchAPI(`/writers/3`),
  ]);

  return {
    props: { aboutPage, author },
    revalidate: 1,
  };
}
