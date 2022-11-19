/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

main();

async function main() {
  await createUsers();
  await createTags();
  await createPosts();
  await createPostTags();
  await createCharities();
  await createCharityTags();
  await createVotes();
}

async function createUsers() {
  // create 10 generic users
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        email: "alice@justly.dev",
        handle: "aliceinwonderland",
      },
      {
        name: "Bob",
        email: "bob@justly.dev",
        handle: "bobthebuilder",
      },
      {
        name: "Charlie",
        email: "charlie@justly.dev",
        handle: "charliechaplin",
      },
      {
        name: "Dora",
        email: "dora@justly.dev",
        handle: "doratheexplorer",
      },
      {
        name: "Mohammad",
        email: "momo@justly.dev",
        handle: "hackr",
      },
      {
        name: "Preet",
        email: "preet@justly.dev",
        handle: "premchib",
      },
      {
        name: "Annie",
        email: "annie@justly.dev",
        handle: "tibbers",
      },
      {
        name: "Tyler",
        email: "tyler@justly.dev",
        handle: "tylerchen",
      },
      {
        name: "Mar",
        email: "mar@justly.dev",
        handle: "tofuzu",
      },
      {
        name: "Gagan",
        email: "gagan@justly.dev",
        handle: "focuspocus",
      },
    ],
  });
}

async function createTags() {
  // create 10 generic tags
  await prisma.tag.createMany({
    data: [
      {
        name: "Education",
        color: "#3399CC",
      },
      {
        name: "Health",
        color: "#A4AF69",
      },
      {
        name: "Environment",
        color: "#D35269",
      },
      {
        name: "Animals",
        color: "#F2C94C",
      },
      {
        name: "Human Rights",
        color: "#F2994A",
      },
      {
        name: "Poverty",
        color: "#6FCF97",
      },
      {
        name: "Arts and Culture",
        color: "#2D9CDB",
      },
      {
        name: "Disaster Relief",
        color: "#EB5757",
      },
      {
        name: "Hunger",
        color: "#56CCF2",
      },
      {
        name: "Science and Technology",
        color: "#9B51E0",
      },
    ],
  });

  // create 10 generic country tags
  await prisma.tag.createMany({
    data: [
      {
        name: "Canada",
        color: "#3399CC",
      },
      {
        name: "United States",
        color: "#A4AF69",
      },
      {
        name: "United Kingdom",
        color: "#D35269",
      },
      {
        name: "Australia",
        color: "#F2C94C",
      },
      {
        name: "India",
        color: "#F2994A",
      },
      {
        name: "China",
        color: "#6FCF97",
      },
      {
        name: "Japan",
        color: "#2D9CDB",
      },
      {
        name: "Germany",
        color: "#EB5757",
      },
      {
        name: "France",
        color: "#56CCF2",
      },
      {
        name: "Brazil",
        color: "#9B51E0",
      },
    ],
  });
}

async function createPosts() {
  await prisma.post.createMany({
    data: [
      {
        title: "The trees are dying",
        description: "We need to save the trees!!!",
        authorId: (await prisma.user.findFirst({
          where: { handle: "hackr" },
        }))!.id,
      },
      {
        title: "An earthquake hit my city",
        description: "Brazil is in need of help",
        authorId: (await prisma.user.findFirst({
          where: { handle: "premchib" },
        }))!.id,
      },
      {
        title: "We need to feed the poor!",
        description: "Japanese people are starving",
        authorId: (await prisma.user.findFirst({
          where: { handle: "focuspocus" },
        }))!.id,
      },
    ],
  });
}

async function createPostTags() {
  // TODO: implement
}

async function createCharities() {
  await prisma.charity.createMany({
    data: [
      {
        name: "Save the Trees",
        markdown: `# Save the Trees
        
        We need to save the trees!!!
      
        ## How to help us
        
        1. Donate
        2. Donate
        3. Donate
        
        ## Contact us
        
        Email: [alice@justly.dev](mailto:alice@justly.dev)`,
        managerId: (await prisma.user.findFirst({
          where: { handle: "aliceinwonderland" },
        }))!.id,
        handle: "savethetrees",
      },
      {
        name: "Feed the Poor",
        markdown: `# Feed the Poor
        
        We need to feed the poor!!!
        
        ## How to help us
        
        1. Donate Food
        2. Donate Money
        3. Donate Time
        
        ## Contact us
        
        Email: [bob@justly.dev](mailto:bob@justly.dev)`,
        managerId: (await prisma.user.findFirst({
          where: { handle: "bobthebuilder" },
        }))!.id,
        handle: "feedthepoor",
      },
    ],
  });
}

async function createCharityTags() {
  // TODO: implement
}

async function createVotes() {
  await prisma.vote.createMany({
    data: [
      {
        postId: (await prisma.post.findFirst({
          where: { title: "The trees are dying" },
        }))!.id,
        userId: (await prisma.user.findFirst({
          where: { handle: "tofuzu" },
        }))!.id,
      },
      {
        postId: (await prisma.post.findFirst({
          where: { title: "The trees are dying" },
        }))!.id,
        userId: (await prisma.user.findFirst({
          where: { handle: "tylerchen" },
        }))!.id,
      },
      {
        postId: (await prisma.post.findFirst({
          where: { title: "An earthquake hit my city" },
        }))!.id,
        userId: (await prisma.user.findFirst({
          where: { handle: "hackr" },
        }))!.id,
      },
      {
        postId: (await prisma.post.findFirst({
          where: { title: "An earthquake hit my city" },
        }))!.id,
        userId: (await prisma.user.findFirst({
          where: { handle: "focuspocus" },
        }))!.id,
      },
    ],
  });
}