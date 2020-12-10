# Getting started

1. Clone this repo: `git clone git@github.com:aprilmintacpineda/spaghetti-code-example.git`
2. `cd` to the directory: `cd spaghetti-code-example`
3. Install dependencies: `yarn`
4. Run app: `yarn start`

Working examples can be found here:

- [Spaghetti code example](https://github.com/aprilmintacpineda/spaghetti-code-example/tree/spaghetti-code)
- [clean code example](https://github.com/aprilmintacpineda/spaghetti-code-example/tree/clean-code)

# Writing readable codes using ReactJS as an example

<img src="assets/leaves-company.jpg" width="250" height="250">

In this discussion, I aim to educate the audience about the problem of spaghetti code.

- We will define what spaghetti code is.
- Dive into examples of spaghetti codes.
- Find the root cause of spaghetti code.
- Propose a solution to avoid spaghetti code.

######  Inspiration: What drove me to choose to talk about this topic?

A while back, I had a conversation with some developers about spaghetti code, I asked them to give me an example, in codepen, in jsfiddle, or other similar sites, of codes that would be deemed as spaghetti code. One of them responded he can't give any because (and I quote) "calling it spaghetti is more subjective rather than objective". This leads me to believe that a lot of people don't really have a firm understanding of code, they simply write codes and hope that the program works. Not to say that he is wrong, there's a bit of truth to it, but that's a very small slice of a much bigger pie.

So I'm looking to shed some light on this topic especially for people who are just starting out their developer career, I believe it's very important for developers to have a clear understanding of what spaghetti code is, this will increase the general quality of the codes that we write, and also present an example of spaghetti code and the clean version of the same code.

So, let's get started.

## What is spaghetti code?

Wikipedia defined the term "spaghetti code" as

"Spaghetti code is a pejorative phrase for unstructured and difficult-to-maintain source code."

It's quite generic but it's the most common thing that you'll hear from people when you ask them what spaghetti code is, and if you ask them for some example codes, they wouldn't really be able to give that.

For us to be able to prevent spaghetti code, we need to understand its nature.