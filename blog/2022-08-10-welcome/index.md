---
slug: Famed - Hello, World! 
title: Famed - Hello, World! 
authors: [0ksure]
tags: [hello, world!, famed, morphysm]
---
![logo03](https://user-images.githubusercontent.com/110388591/189366931-a9be8ba5-48c8-4445-8078-e040eecd1764.svg)


# Hello, world! 

We proudly announce Famed — ***an Open Source security reputation system for the vulnerability lifecycle & public vulnerability disclosure.***

Famed is currently an extension to the CVE program and is being developed as a [GitHub App](https://github.com/marketplace/getfamed) with 💜 by [morphysm.io](https://www.morphysm.io/), a Decentralized Community of Security Researchers. 

Software Security is of paramount value to the Ethereum Ecosystem, Web3, the Open Source Community, all Humans and, therefore, a public good. 
![image](./globe.png)

In this first post, we'll review some of our Design Goals for the Famed Security Reputation System, our Motivation to evolve Morphysm into a Decentralized Autonomous Organization for Public Vulnerability Disclosure and Software Security Reputation. Our goal is to fundamentally improve the Security of the Open Source Supply Chain and Public Goods. 

Next, we'll introduce the Famed GitHub App: a suite of CI/CD security-hygiene tools we developed for threat modeling, static- and dynamic vulnerability analysis. 
The Famed App accelerates Projects in their transition and kickstarts their security reputation system with vulnerability lifecycle scoring & public vulnerability disclosure.

## What is Famed? A Bayesian Game of Security Signals 

> A system should be secure, even if everything about the system, except secret keys, is public knowledge. 

While Kerkoff's Principle/Shannon's maxim is a clear pole for what Security in *an ideal, mathematical world* means, in Practice, Security Signal emerges out of Obscurity in the head of Security Researchers or Attackers, with some lead for some Bugs. 

Vulnerabilities are part of a Bayesian Game of incomplete information with an unknown set of players - a game with many wrong and rarely any right answers; 
How severe is this, and how difficult is it to deploy an exploit for an attacker? Who needs to know, balancing urgency and least privilege? Whitehat or stealth patch? Who are our attackers, and are they listening? When to inform all dependencies, when to notify users? Is there a process for these alerts on Sunday? Is this Bug even Security relevant?

![Untitled 2](https://user-images.githubusercontent.com/61067943/190812038-645c6202-6e50-4166-96cc-4a0fba6729e5.png)


Given good security hygiene and proactive policies, Security Signals traversal reports through many screens and heads on their journey through the vulnerability lifecycle. Balancing these trade-offs is a team sport. Suppose all goes well; while vulnerability originates in an obscure state, most teams follow Kerkoff's principle and publicly disclose vulnerabilities. Bugs become a trophy, a study subject, and a public good, hardening the affected system and its dependencies in the sense of Kerkoff's Principle.

But is this the best we can do? Sometimes (... Twitter, Log4j, TikTok, Uber ... ) go very wrong. Millions lose their confidential data or assets to cyber criminals. Exponential growth in lines of code makes it increasingly difficult to fully understand what is a priority to defense. For the foreseeable future, attackers will attack while defenders will defend. 

The best we can do in this infinite Bayesian Security Game is to shift the equilibria, backup the defenders, and create aligned incentives. Open Source Security Reputation is one of the core ideas of Famed: `Fame for all the players but the Attackers; the SOC, the Blue Teamers, Red Teamers, Auditors, Bounty Hunters, Security Analysts and Tools for spotting & patching vulnerabilities before they are exploited. They are no heroes; they deserve a bonus. 

While the nuances of the Fame Security Reputation System are out of scope for this post, one of the most potent mechanisms in Famed's Security Reputation System is to *incentivize projects to publicly disclose their vulnerabilities*:

        Security Reputation += Public Disclosure


![image](./flow.png)


#### What we have been working on:

- **Open, asynchronous, transitive Security Reputation:**  Famed communicates your commitment, efforts & achievements to secure your Software - within your Organisation, to up&downstream dependencies, your Users, and the Outside World. 
- **Blue Team Rewards:** Reward functions incentivize all players (Blue Teamers, Red Teamers, Auditors, Bounty Hunters, and Tools) of the security game to spot & patch vulnerabilities and receive rewards for their efforts.
- **OpSec and Privacy enabled Visibility:** Our security "Walls of Fame" seamlessly see who's on top and who needs to step up their game." everyone involved in the vulnerability lifecycle can see how things are going.
- **Continuous Security Hygiene:** A suite of CI/CD tools for threat modeling, static & dynamic analysis, fuzzing, vulnerability bounties, and code audits. 

![wall_of_fame](https://user-images.githubusercontent.com/61067943/190688424-62888b62-c5d5-4b04-9109-1b5b1f2a2023.png)


Your GitHub Repository can [getFamed](https://github.com/marketplace/getfamed) now. Currently, this is what the Famed App will do for your code's hygiene: 

- ***A badge displaying the Security Reputation of your Repository and Website***

- ***A Dynamic Wall of Fame*** for your Blue Teamers, Red Teamers, Auditors, Bounty Hunters and Tools.

- Optionally: CI/CD Threat Modeling, Automated Static and Dynamic Scans for Security Vulnerabilities, especially for Smart Contracts  


If you want to learn more about what the Famed App can do for the Security of your Company, Organisation, or Project - follow us on Medium. If you think you have something to contribute, send us an Email to contact [at] morphysm [dot] com to create with us in the early days of the emerging Security Economy.
