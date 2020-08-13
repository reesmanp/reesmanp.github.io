import { Map } from 'immutable';

const Welcome = Map({
  'Well, hello there!': Map({
    Welcome: 'Welcome to my online portfolio! Feel free to browse around my web page and even send me an email if you have any questions. If you are a possible employer or someone who wants some work done, don\'t feel shy; please reach out and let me know what you are looking for. Safe travels, friend!',
    GitHub: 'All of my current projects and most of my completed projects\' source code can be found at my github <a href="https://github.com/reesmanp" target="_blank">repository</a> including the source code for this website <a href="https://github.com/reesmanp/reesmanp.github.io" target="_blank">here</a>.'
  })
});

const Bio = Map({
  Bio: Map({
    Introduction: 'My name is Paul Reesman and I have a long and colorful history filled with experience, creativity, curiosity, and leadership. Originally from Phoenix, Arizona I joined the army after high school and became a member of the elite unit known as the \'Rangers\' up in the state of Washington. Throughout my tenure I advanced to the rank of sergeant and deployed to Afghanistan on four separate occasions. Upon honorably separating from the armed forces, I was left with the same thoughts of nearly any other veteran, \'What next?\'',
    Interests: 'I am currently interested in machine learning, game programming, and systems programming. When it comes to machine learning, I am most interested in reinforcement learning and evolutionary algorithms however supervised and unsupervised learning is extremely interesting to me as well. When it comes to game development, I have built my own game(s) as seen in the portfolio section. I have experience with Unreal Engine, Unity, and Amethyst. With systems development, I am a Rustacean thus I would love a job working with rust.'
  }),
  Education: Map({
    'Oregon State University: 2014-2015': 'I looked toward college as the next chapter of my life started to unfold. Starting off at Arizona State University, I felt that the school was not a good match for who I was. I then transferred to Oregon State University and continued on my track pursuing a four year degree in <b>computer science focusing in data science</b>. It only took me three years from the end of my enlistment to gain my degree. During my last term, I looked forward to finally joining the industry.',
    'John\'s Hopkins University: 2018-2020': 'I attended John\'s Hopkins Whiting School of Engineering while working full time. I was able to graduate with a <b>Masters of Science in Computer Science with a focus in Machine Learning</b>. From this education, I participated in self-driven research in the fields of evolutionary computation and reinforcement learning. Furthermore, I implemented these experiments along with the coursework for neural networks with Rust.',
  }),
  'Work Experience': Map({
    'Seattle Children\'s Hospital: 2016-2017': 'Immediately after graduating from Oregon State University, I received an email from Seattle Children\'s Hospital offering me a position as an application developer up in Seattle. This opportunity provided me to get my foot in the door in the Seattle area. This is where I learned ReactJS and DevOps and what it meant to be a full stack developer. I stayed there for a little over a year and a half and loved every moment.',
    'Coding With Kids: 2016-2017': 'A month or two after moving to Seattle I was also hired on by <a href=https://www.codingwithkids.com" target="_blank">Coding With Kids</a> as an instructor. I ended up teaching children how to code for a little over a year. I worked here while concurrently working at Seattle Children\'s Hospital.',
    'Nordstrom: 2017-2019': 'I was hired as a fullstack software engineer working on Nordstrom\'s product page. Here I used ReactJS, Redux, NodeJS, and C# to build and maintain the website. We rebuilt the entire front end of the entire website. This was a massive inter-team project that integrated each team\'s respective front end application into a single page application. My team eventually re-wrote our backend application and migrated it to Go.',
    'Smartsheet, Inc.: 2019-Present': 'I am currently an Engineer II here working on the Grid team, specifically on the Grid Storage and History team. My first project was to lead the development of a tool to migrate users from one instance of Smartsheet to another. This allowed our government clients to seamlessly transition their workflows from our commercial site to our government site. Since then, I am now the owner of the SheetLink service and am leading development to improve this service.',
  })
});

const Game_Portfolio = Map({
  'Evil Penguin': Map({
    Media: '<iframe src=\'https://gfycat.com/ifr/ScholarlyArtisticHyracotherium\' frameborder=\'0\' scrolling=\'no\' allowfullscreen width=\'640\' height=\'404\'></iframe>',
    Design: 'Evil Penguin follows an ECS game design through the <a href="https://amethyst.rs/" target="_blank">Amethyst</a> game engine. Written entirely in Rust, this is a simple 2D top-down game which involves the player attempting to collect coins while simultaneously avoiding the evil penguin. The game has three difficulties, easy, medium, and hard. The AI which controls the penguin uses different tactics in each. In easy, the penguin chases you by heading directly towards you. In medium, the penguin heads to where you will be via your velocity vector. Finally, the hardest mode is machine learned (in progress as of July 2020).',
    Resources: 'The game can be found <a href="https://github.com/reesmanp/evil_penguin/releases">here</a>.'
  }),
  'Evil Penguin 2': Map({
    'In Progress': 'As of July, 2020 the game is still in its early stages of development. This will be a 3D game with a story. Thematically it will be a horror game starring Fishy the Fish, Mommy the Fish, and the Evil Penguin.'
  })
});

const Machine_Learning_Portfolio = Map({
  'Reinforcement Learning': Map({
    'Evil Penguin AI': 'This is the AI on hard mode that is described in the "Game Portfolio" tab. Essentially this uses a small neural network. The number of inputs depends on the current position on the penguin, the current position of the player, the current velocity of the penguin, the current velocity of the player, and all of the coins. The coin inputs are either 1 for "still remaining" or 0 for "captured". The network has 1 hidden layer and an output layer of 4 neurons, one for each direction the penguin can decide to go.',
    'Research Paper (Unpublished): Meta-Learning Friend or Foe Detection Via Q-Learning in Mixed-Agent Environments': 'During my masters degree at John\'s Hopkins, I took an Advanced Machine Learning course which was research based taught by <a href="https://ep.jhu.edu/about-us/faculty-directory/347-john-sheppard" target="_blank">Dr. John Sheppard</a>. One of the requirements of this course was to write a research paper that could be publishable. I have a profound interest in reinforcement learning so I targeted my research towards that area. Friend-or-Foe detection is what it seems, an agent is sent into the unknown and has contact with other agents that have been there longer than this agent. The agent\'s goal is to then find out who is trustworthy (friendly) or not. I created an extension of Q-Learning to solve this problem and compared it to counterfactual minimization techniques and found this Q-Learning version to converge faster with an equally high overall score. You can find that paper <a href="../../static/images/FoF_QLearning_Reesman.pdf" target="_blank">here</a>.'
  }),
  'Supervised Learning': Map({
    'Research Paper (Unpublished): Island Models Using Factored Evolutionary Algorithms': 'During my masters degree at John\'s Hopkins, I took an Evolutionary Computation course which was research based taught by <a href="https://ep.jhu.edu/about-us/faculty-directory/347-john-sheppard" target="_blank">Dr. John Sheppard</a>. One of the requirements of this course was to write a research paper that could be publishable. Dr. Sheppard was one of the creators behind Factored Evolutionary Algorithms which take a possibly overlapping factoring of the population where each factor was responsible for only a strict subset of the whole solution. Through cooperative learning each factor would combine into a full solution and each factor acted independently of the others when it came to reproduction and mutation. Island models seem to fit this very nice as each island can be seen as a non-overlapping factor with a migration chance. I attempted to combine both techniques and applied it to the Flexible Job Shop Scheduling Problem. The paper can be seen <a href="../../static/images/IM_With_FEA_Reesman.pdf" target="_blank">here</a>.',
    Kaggle: 'Other than the above research, my main experience is small data sets with Kaggle as I am getting used to scikit, numpy, pandas, etc.'
  })
});

const Resume = Map({
  Resume: Map({})
});

const Contact_Me = Map({
  Contact: Map({
    Email: '<a href="mailto:Paul.R.Reesman@gmail.com">Paul.R.Reesman@gmail.com</a>',
    GitHub: 'My <a href="https://github.com/reesmanp">GitHub</a> profile.'
  })
});

export const contentCopy = Map({
  Welcome,
  Bio,
  Game_Portfolio,
  Machine_Learning_Portfolio,
  Resume,
  Contact_Me
});
