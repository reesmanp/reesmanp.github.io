import { Map } from 'immutable';

const Welcome = Map({
  Välkommen: Map({
    Welcome: 'Welcome to my online portfolio! Feel free to browse around my webpage and even send me an email if you have any questions. If you are a possible employer or someone who wants some work done, don\'t feel shy; please reach out and let me know what you are looking for. Safe travels, friend!',
    'Open Source Projects I Contribute To': '<a href="https://github.com/react-materialize/react-materialize" target="_blank">React Materialize</a><br /><a href="https://github.com/PCGen/pcgen" target="_blank">PCGen</a>'
  })
});

const Bio = Map({
  Bio: Map({
    Introduction: 'My name is Paul Reesman and I have a long and colorful history filled with experience, creativity, curiosity, and leadership. Originally from Phoenix, Arizona I joined the army after high school and became a member of the elite unit known as \'Rangers\' up in the state of Washington. Throughout my tenure I advanced to the rank of sergeant and deployed to Afghanistan on four separate occasions. Upon separating from the armed forces, I was left with the same thoughts of nearly any other veteran, \'What next?\'',
    Undergrad: 'I looked toward college as the next chapter of my life started to unfold. Starting off at Arizona State University, I felt that the school was not a good match for who I was. I then transferred to Oregon State University and continued on my track pursuing a four year degree in computer science. It only took me three years from the end of my enlistment to gain my degree. During my last term, I looked forward to finally joining the industry.',
    'Graduate School': 'I decided to apply to grad school in December 2017 and in early January I received notice that I had been accepted into the <a href="https://ep.jhu.edu/programs-and-courses/programs/computer-science" target="_blank">Online Professional Masters program in Computer Science</a> at John\'s Hopkins University. I am currently studying there pursuing the Enterprise and Web Computing track.',
    'Seattle Children\'s Hospital': 'Immediately after graduating from college, I received an email from Seattle Children\'s Hospital offering me a position as an application developer up in Seattle. This opportunity provided me to get my foot in the door in the Seattle area. This is where I learned ReactJS and DevOps. I stayed there for a little over a year and a half and loved every moment.',
    'Coding With Kids': 'A month or two after moving to Seattle I was also hired on by <a href=https://www.codingwithkids.com" target="_blank">Coding With Kids</a> as an instructor. I ended up teaching children how to code for a little over a year.',
    Nordstrom: 'I am currently employed at Nordstrom as an Engineer I, working on their product page. Here I am using ReactJS, Redux, NodeJS, and C# to build and maintain the website.',
    'Special Projects of Note': 'I am one of the founders of an app called Lender. Lender is a platform for people to administer nano-loans anonymously. This application is currently under development and the release of Alpha testing is imminent. You can find more at <a href="www.wearelender.com" target="_blank">wearelender.com</a>',
    Interests: 'Lastly, I am looking forward to grad school as my interests are broad: Artificial Intelligence, Parallelization/Distributed Computing (Including Cloud and Enterprise computing), and Compiler Design.'
  })
});

const Portfolio = Map({
  'Current Projects': Map({
    Lender: 'I am co-founder and lead backend developer for a new and upcoming app called Lender. The source code lives in a private repo on GitHub, thus I cannot share it with you. To learn more about Lender, visit us at <a href="www.wearelender.com" target="_blank">wearelender.com</a> or visit us on <a href="https://www.facebook.com/wearelender/" target="_blank">Facebook</a> or even follow us on Twitter at <a href="https://twitter.com/wearelender" target="_blank">@WeAreLender</a>',
    BoothTool: 'I am currently building a ReactJS program to be used in festival booths to help with front-end transactions and kitchen area accountability. This is being built with TypeScript and will be deployed as a standalone application. My first version of this was with Python using the Tkinter toolkit. Building and maintaining a fitting frontend for the app became overwhelming and I decided a programming language switch was necessary. The old Python code lives in it\'s own repository for nostalgia\'s sake.',
    'End of the Cave': 'I am currently making a game in Unity using c#. This is the bulk of my c# knowledge and it heavily reminds me of my early Java years. The game is in the very early stages but still worth noting.'
  }),
  'Completed Projects': Map({
    'Laser Targeting Device': 'I was employed as the \'Senior Computer Science Expert\' for a laser targeting device prototype that was being researched at Oregon State University which was funded by the United States Army. I designed several User Interfaces to help find the most \'intuitive\' format based off of real soldiers\' feedback. <b>January 2015 - December 2015</b>',
    'Splunk App': 'For my Senior Design Project, I was assigned into a random group of 4 students and we were randomly assigned a real life project sponsored by an actual company. I was assigned to build a Splunk Application for Elemental Technologies. <b>September 2014 - June 2015</b>',
    MicroGravity: 'During my stint at Arizona State University I joined the Microgravity team. We proposed an experiment to NASA where we would study dust coagulation in microgravity to help explain how galaxies are formed. We were one of only a few teams to get selected and be able to conduct our experiment on NASA\'s microgravity plane. <b>October 2013 - Spring 2014</b>'
  }),
  'Repository': Map({
    GitHub: 'All of my current projects and most of my completed projects\' source code can be found at my github <a href="https://github.com/reesmanp" target="_blank">repository</a> including the source code for this website <a href="https://github.com/reesmanp/reesmanp.github.io" target="_blank">here</a>.'
  })
});

const Tools = Map({
  'Programming Languages': Map({
    'JavaScript, Node, and React': 'I have been using JavaScript as my front end solution for some time now. I have also used it a little bit for backend development using node. React has been my framework of choice for frontend development because I has the most professional experience with it. The way it makes writing HTML and CSS easy and stops full page re-rendering when it isn\'t needed makes my life so much easier when I am using it.',
    Python: 'Python is by far the quickest language to write in. Whenever I need a solution in a time sensitive environment, python is my go to language. It may not be the fastest language to run but that isn\'t always needed. I have built standalone one-off projects with python but I usually just develop quick scripts with it.',
    'C, C++, and OpenMP': 'I have only written academic assignments and personal projects in the c languages. I am currently building a compiler in C since I think the efficiency increase would be worth it as well as learning more about the language would be a plus. I have a love for parallel programming and OpenMP makes my life so much easier by abstracting the creation of threads.',
    'WASM!': '<a href="http://webassembly.org" target="_blank">WebAssembly</a> recently released their 1.0 standard which got picked up by most modern browsers. Basically, you write C code and you compile it to a WASM file which you can then integrate with JavaScript and the browser will run the WASm code as if it was native code, which means a huge speed boost for computationally expensive websites! This might be the new future of web development alongside the king, JavaScript.',
    'Other languages': 'Other languages that I have developed in, either professionally or privately, that I have not recognized are: PHP, Haskell, Bash, Batch, C#, and Java.'
  }),
  Atlassian: Map({
    Jira: 'I have been using Jira for a while now and it is a great tool. Since Atlassian has an entire suite of tools that easily integrate with one another, this tool has helped me throughout the development cycle to help track my issues. When I commit my code through Bitbucket, I can reference the issue I am working on and it will show up whenever I am looking at my issue.',
    Bitbucket: 'I started off using GitHub which was great since it is just Git. However When I switched to Bitbucket, I haven\'t looked back. The ability to add reviewers to your pull requests and several other features make it more Admin friendly which really helps out when there are new people on the team.',
    Bamboo: 'My deployment tool of choice is Bamboo. This allows for many ways of deploying code including NodeJS and even Bash with SSH and SCP protocols and more. This ies in well with Bitbucket, allowing webhooks to be generated and code builds to happen after certain commits or pull requests.'
  }),
  Jetbrains: Map({
    WebStorm: 'I was developing a lot of JavaScript code including JSX syntax on Notepad++ and I just about had it. After searching around for JavaScript IDE\'s, I finally came across WebStorm and it has solved all issues I had previously. It integrates seamlessly with Git (or even SVN and Mercurial) and project management is a breeze.',
    CLion: 'I have never been a fan of Visual Studio. It seems very clunky, slow, and I can never get it right. After my success with WebStorm I again looked toward Jetbrains for my IDE platform and found CLion. Since it is identical to WebStorm, I found it very easy to use.'
  })
});

const Resume = Map({
  Resume: Map({})
});

/*
const Blog = Map({
  '2016': Map({}),
  '2017': Map({})
});
*/

const Contact = Map({
  Contact: Map({
    Email: '<a href="mailto:Paul.R.Reesman@gmail.com">Paul.R.Reesman@gmail.com</a>',
    GitHub: 'My <a href="https://github.com/reesmanp">GitHub</a> profile.',
    Gitter: 'Active member in the <a href="https://gitter.im/nodejs/node">nodeJS gitter chatroom</a> as@reesmanp.'
  })
});

export const textStore = Map({
  Welcome: Welcome,
  Bio: Bio,
  Portfolio: Portfolio,
  'Tools I Use': Tools,
  Resume: Resume,
  //Blog: Blog,
  'Contact Me': Contact
});
