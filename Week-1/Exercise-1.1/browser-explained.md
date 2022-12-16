# Browsers (Refer images/basic-browser-function.jpeg)

1. Browsers basically allows us to access web pages stored on different geographic locations on server.
2. Before knowing more about browsers, we need to know about clients and server
   Client : It can be your laptop browser, phone browser etc by which you can access contents stored on server machines
   Server : Machines which hosts the web content and are delivered to as requested

# WWW

1. AKA world wide web
2. The clients server format enables the basic functioning of the web. The users request information on the web pages and the server works on transferring it to them. Software to serve these pages to the users is a web server. And the user’s computer here becomes the client and the browser on this allows document retrieval.
3. All websites are on this server as guests and every time there is a request, the server pays the hosting price. The second users type an URL on the search, www begins to work. The three key elements here are Hypertext Markup Language (HTML), Hypertext Transfer Protocol (HTTP) and Web browsers.

# Components of a web browser (Refer images/browser-components.jpeg)

Web Browsers consist of 7 different components listed below:

1. User Interface
   This component allows end-users to interact with all visual elements available on the web page. The visual elements include the address bar, home button, next button, and all other elements that fetch and display the web page requested by the end-user.

2. Browser Engine
   It is a core component of every web browser. The browser engine functions as an intermediary or a bridge between the user interface and the rendering engine. It queries and handles the rendering engine as per the inputs received from the user interface.

3. Rendering Engine
   As the name suggests, this component is responsible for rendering a specific web page requested by the user on their screen. It interprets HTML and XML documents along with images that are styled or formatted using CSS, and a final layout is generated, which is displayed on the user interface.

4. Networking
   This component is responsible for managing network calls using standard protocols like HTTP or FTP. It also looks after security issues associated with internet communication.

5. JavaScript Interpreter
   As the name suggests, it is responsible for parsing and executing the JavaScript code embedded in a website. Once the interpreted results are generated, they are forwarded to the rendering engine for display on the user interface.

6. UI Backend
   This component uses the user interface methods of the underlying operating system. It is mainly used for drawing basic widgets (windows and combo boxes).

7. Data Storage/Persistence
   It is a persistent layer. A web browser needs to store various types of data locally, for example, cookies. As a result, browsers must be compatible with data storage mechanisms such as WebSQL, IndexedDB, FileSystem, etc.

# Rendering Engine (Refer images/rendering-engine.webp)

Once a user requests a particular document, the rendering engine starts fetching the content of the requested document. This is done via the networking layer. The rendering engine starts receiving the content of that specific document in chunks of 8 KBs from the networking layer. After this, the basic flow of the rendering engine begins.

The four basic steps include:

1. The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.”

2. Simultaneously, the browser also creates a render tree. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.

3. Further, the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.

4. The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer.

# HTML Parsing (Refer images/html-parser.png)

1. After the initial request to the server, the browser receives a response containing the HTML resources of the webpage we are trying to access. Now the job of the browswer will be to start parsing the data.

2. In other words, parsing means taking the code we write as text (HTML, CSS) and transform it into something that the browser can work with. The parsing will be done by the browser engine (not to be confused with the the Javascript engine of the browser).

3. The browser engine is a core component of every major browser and it's main role is to combine structure (HTML) and style (CSS) so it can draw the web page on our screens. It is also responsible to find out which pieces of code are interactive. We should not think about it like a separate piece of software but as being part of a bigger sofware (in our case, the browser).

4. HTML parsing involves two steps: tokenization and tree construction

   1. Tokenization
      It is the lexical analysis and it converts some input into tokens (basic components of source code). Imagine we would take an English text and break it down into words, where the words would be the tokens.

   2. Building the DOM
      After the first token gets created, tree building starts. This is essentially creating a tree like structure (called the Document Object Model) based on the previously parsed tokens.
      The DOM tree describes the content of the HTML document. The <html> element is the first tag and root node of the document tree. The tree reflects the relationships and hierarchies between different tags. We have parent nodes and tags nested within other tags are child nodes. The greater the number of nodes, the longer it will takes to build the DOM tree

# CSS Parsing (Refer images/css-parser.png)

When the browser encounters a CSS stylesheet, be it external or embeded, it needs to parse the text into something it can use for styling the layouts. The data structure that the browser turns the CSS into is called the CSSOM. The DOM and the CSSOM follow similar con cepts, in the sense that they are both trees, but they are different data structures. Just like building the DOM out of our HTML, building the CSSOM out of CSS is considered a render-blocking process.

1. Tokenization & building the CSSOM
   Similar to HTML parsing, CSS parsing starts with tokenization. The CSS parser takes the bytes and converts them into characters, then tokens, then nodes and finally they are linked into the CSSOM. The browser does something called selector machting which means that each set of styles will be matched against all nodes (elements) on the page.

# Javascript Execution

So, after we get the Javascript file from the server, the code is interpreted, compiled, parsed and executed. The computer can't understand Javascript code, only the browser can. The JS code needs to be translated into something the computer can work with and this is the job of the Javascript browser engine (not to be confused with the browser engine). Depending on the browser, JS engines can have different names and work differently.

1. Javascript engines
   A javascript engine (sometimes also called an ECMAScript engine) is a piece of software that executes (runs) Javascript code in the browser, and not only (the V8 engine is a core component of the Node.js environment, for example).

JavaScript engines are typically developed by web browser vendors, and every major browser has one. We said the most used browsers as of today are Chrome, Safari, Edge and Firefox.

2. Compilation
   During compilation, a piece of software called the compiler takes the code written in a high-level language and converts it into machine code, all at once. An intermediate file (called an object file) is created and that file can run on any machine. After these steps are taken, the code can be executed (imediately after, sometimes in the future or never).

3. Interpretation
   During interpretation, the interpreter is going through the Javascript code line by line and executes it imediately. No compilation is taking place so no Object Code is created (the output of the code is created by the interpreter itself, using its internal mechanisms). Older versions of Javascript use this type of code execution.

4. JIT Compilation
   Just in time compilation is a feature of an interpreter for a given language and it tries to take advantage of both compilation and interpretation. Whether during pure compilation, the code is translated before it is executed, in JIT compilation the code is translated while it is being executed (at run time). So we could say that source code is converted to machine code on the fly. Newer versions of Javascript use this type of code execution.

# Tree Generation And Painting

The trees built in the parsing phase (DOM, CSSOM) are combined into something called the render tree. This is used to compute the layout of all visible elements that will be painted to the screen in the end. The purpose of the render tree is to make sure the content of the page will paint the elements in the correct order. It will be serverd as input to the painting process that will display the pixels on the screen.

1. Combining the DOM with CSSOM

The browser will start doing its magic at the root of the DOM tree and traverse every visible node. Some of the nodes, like script or meta tags are not visible, so they are ignored. There are also nodes that will be hidden with the use of CSS (the display: "none" property for example) and they will also be ignored. We are only interested in the visible nodes because only they matter for the input on the screen.For each visible node that's found in the DOM, the coresponding rules will be found in the CSSOM and they will be applied.

2. The Layout (Reflow) stage (Refer images/layout.png)
   The render tree holds information on which nodes are displayed along with their computed styles, but not the dimensions or location of each node.
   What needs to be done next is calculate the exact position of those nodes within the viewport of the device (inside the browser window) and their size. This is the stage called layout (in Chrome, Opera, Safari and Internet Explorer) or reflow (in Firefox) but they mean the same thing. The browser starts this process at the root of the render tree and traverses it.
   The reflow step doesn't happen only once, but every time we change something in the DOM that affects the layout of the page, even partially.

3. The painting (repainting) stage
   screen. This phase it is also known as the rasterization phase, where the browser converts each box calculated in the layout phase to actual pixels on the screen.

   Just like the layout stage, the painting stage doesn't happen just once but every time we change something in the appearance of the elements on the screen.

   Painting means the browser needs to draw every visual part of an element to the screen, including text, colors, borders, shadows, and replaced elements like buttons and images and it needs to do it super quickly. To ensure repainting can be done even faster than the initial paint, the drawing to the screen is generally broken down into several layers. If this occurs, then compositing is necessary
