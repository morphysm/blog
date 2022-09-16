---
slug: Famed - Hello, World! 
title: Famed - Hello, World! 
authors: [0ksure]
tags: [hello, world!, famed, morphysm]
---
![logo03](https://user-images.githubusercontent.com/110388591/189366931-a9be8ba5-48c8-4445-8078-e040eecd1764.svg)


# Hello, world! 

We proudly announce Famed — ***an Open Source security reputation system for the vulnerability lifecycle & public vulnerability disclosure.***

Famed is currently an extension to the CVE program and being developed as a [GitHub App](https://github.com/marketplace/getfamed) with 💜 by [morphysm.io](https://www.morphysm.io/), a Decentralized Community of Security Researchers. 

Software Security is of paramount value of the Ethereum Ecosystem, Web3, the Open Source Community, and all Humans and, therefore, a public good. We are establishing a Decentralized Autonomous Organisation for Public Vulnerability Disclosure and Software Security Reputation. 
![image](./globe.png)

In this first post, we'll review some of our Design Goals and the Motivation of the Famed Reputation System, how we will create a Decentralized Autonomous Organization for Security Reputation and improve the Security of the Open Source Supply Chain and the Public Goods. 

Next, we'll introduce the Famed GitHub App: a suite of CI/CD security-hygiene tools for threat modeling, static- and dynamic vulnerability analysis, and an end-to-end security vulnerability lifecycle management tool, to support customers in their security transformation.

## What is Famed? A Bayesian Game of Security Signals 

> A system should be secure, even if everything about the system, except secret keys, are public knowledge. 

While Kerkoff's Principle/Shannon's maxim is a clear pole for what Security in *ideal, mathematical world* means. In Practice, Security Signal emerges out of Obscurity in the head of Security Researchers or Attackers, with some lead for some Bug. 

When vulnerabilties are identified, they become part of a Bayesan Game of incomplete information with an unknown set of players - a game with many wrong and rarely right answers; 
How severe is this and how difficult is it to deploy an exploit for an attacker? Who needs to know, balancing urgency and least privilidge? Whitehack or stealth patch? Who are our attackers, are they listening? When to inform all dependencies, when to inform users? Is there a process for these alerts on Sunday? Is this Bug even Security relevant?

![image](https://user-images.githubusercontent.com/61067943/190792357-fa9c92e5-c8c6-4ede-a7a2-5493f3ddbd61.png)


Given good security-hygiene and pro-active policies, Security Signals traversal reports through many screen and heads on their journey through the  vulnerability lifecycle, and balancing these trade-offs is a team-sport. If all goes well, while vulnerability originates in an obscure state, eventually being publicly disclosed. Bugs become a trophy, a study subject and a public good, hardening the affected system and its dependencies in the sense of Kerkoff's Principle.

But is this is this best we can do? Sometimes (... Twitter, Log4j, TikTok, Uber ... ) go very wrong. Millions loose their confidential data or assets to cyber criminals. An exponential growth in lines of code, makes it increasingly difficult to even fully understand what needs to be defended, and for the foreseeable future, attackers will attack while defenders will defend. 

The best we can do in this infinite Bayesian Security Game is to shift the equivilibira; backup the defenders and create aligned incentives. This is one of the core ideas of Famed: Open Source Security Reputation: `Fame for all the players; the SOC, the Blue Teamers, Red Teamers, Auditors, Bounty Hunters, Security Analysts and Tools for spotting & patching vulnerabilities before they are exploited. They are no heroes, they just deserve a bonus. 

While the nuances of the Fame Security Reputation System are out of scope for this post, one of the most powerful mechanisms in Famed's Security Reputation System is to *incentivse projects to publicly disclosing their vulnerabilities*:

        Security Reputation += Public Disclosure


![image](./flow.png)


#### What we have been working on:

- **Open, asynchronous, transitive Security Reputation:**  Famed communicates your commitment, efforts & achievements to secure your Software - within your Organisation, to up&downstream dependencies, your Users, and the Outside World. 
- **Blue Team Rewards:** Reward functions incentivize all players (Blue Teamers, Red Teamers, Auditors, Bounty Hunters, and Tools) of the security game to spot & patch vulnerabilities and receive rewards for their efforts.
- **OpSec and Privacy enabled Visibility:** Our security "Walls of Fame" seamlessly see who's on top and who needs to step up their game." everyone involved in the vulnerability lifecycle can see how things are going.
- **Continuous Security Hygiene:** A suite of CI/CD tools for threat modeling, static & dynamic analysis, fuzzing, vulnerability bounties, and code audits. 

![wall_of_fame](https://user-images.githubusercontent.com/61067943/190688424-62888b62-c5d5-4b04-9109-1b5b1f2a2023.png)


Your GitHub Repository can [getFamed](https://github.com/marketplace/getfamed) now, currently, this is what the Famed App will do for you: 

- ***A badge displaying the Security Reputation of your Repository and Website***

- ***A Dynamic Wall of Fame*** for your Blue Teamers, Red Teamers, Auditors, Bounty Hunters and Tools.

- Optionally: CI/CD Threat Modeling, Automated Static and Dynamic Scans for Security Vulnerabilities, especially for Smart Contracts  


If you would like to learn more about what the Famed App can do for the Security of your Company, Organisation, or Project - follow us on Medium. If you think you have something to contribute, send us an Email to contact at morphysm dot com to start creating with us in the early days of emerging Security Economy.
