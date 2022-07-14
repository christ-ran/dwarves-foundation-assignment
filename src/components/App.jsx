// Copyright (C) 2022 - Kha Tran

import React, { useEffect, useState, useRef } from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiFillStar, AiFillEye } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";

import Header from './Header'
import Body from './Body'
import Repo from './Repo'

import Logo from '../assets/Logo.png'

import URL from '../utilities/URL.json'
import { quickSort } from '../utilities/sort';

const App = () => {
  const [data, setData] = useState([])

  const input = useRef(null)

  const onClick = async (e) => {
    e.preventDefault()

    const content = input.current.value

    if (content.length <= 20) {
      const github = URL.github
      const data = await fetch(github.url + content + '/repos', {
        method: github.method,
        headers: github.headers,
      })
        .then(res => {
          return res.json()
        })
        .catch(err => {
          console.log(err)
        })

      setData(data);
    }
  }

  const sortStars = (e) => {
    e.preventDefault()

    let newData = quickSort(data, "stargazers_count")
    
    setData(newData);
  }

  const sortViews = (e) => {
    e.preventDefault()

    let newData = quickSort(data, "watchers_count")

    setData(newData);
  }

  const sortForks = (e) => {
    e.preventDefault()

    let newData = quickSort(data, "forks_count")

    setData(newData);
  }

  useEffect(() => {
    const meRepo = async () => {
      const github = URL.github;

      setData(await fetch(github.url + "shelldog" + "/repos", {
        method: github.method,
        headers: github.headers
      }).then(res => { return res.json() }))
    }

    meRepo();
  }, []);

  return (
    <div className="app">
      <Header>
        <header className="container container-p-all">
          <div className="header-logo-c flex">
            <img
              src={Logo}
              alt="Dwarves Foundation Logo"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            />
            <h1 className="header-heading">Dwarves</h1>
          </div>
        </header>
      </Header>
      <Body>
        <div className="container container-p-all">
          <div className="body-c">
            <div className="s-c flex jc-c-sb ai-c">
              <div className="s-b-c">
                <p className="s-h">Search repository:</p>
                <div className="flex ai-c">
                  <input
                    className="s-i"
                    placeholder="Username, organization, ..."
                    ref={input}
                  />
                  <a className="s-btn flex ai-c jc-c" onClick={onClick}>
                    <BiSearch />
                  </a>
                </div>
              </div>
              <div className="sort-select">
                <p className="sort-h">Sort by:</p>
                <div className="flex">
                  <a className="sort-s" onClick={sortStars}>
                    <AiFillStar /> 
                  </a>
                  <a className="sort-s" onClick={sortViews}>
                    <AiFillEye />
                  </a>
                  <a className="sort-s" onClick={sortForks}>
                    <TbGitFork /> 
                  </a>
                </div>
              </div>
            </div>
            <div className="r-c container container-p-all">
              <div className="grid">
                {data.map(d => (
                  <Repo key={d.id} name={d.name} visibility={d.visibility} language={d.language} stars={d.stargazers_count} url={d.html_url}>
                    {d.description}
                  </Repo>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Body>
    </div>
  )
}

export default App
