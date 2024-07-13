import "../htmldata.css";
import { NavLink } from "react-router-dom";

export default function Homejs() {
  return (
    <div main-content>
      <div className=" block-A">
        <h3 className="block-A-heading">JavaScript Tutorial</h3>
        <div className="data-content-box1">
          <div className="box1-data">
            <p style={{ marginTop: "-2rem" }}>
              JavaScript is the world's most popular programming language.
              <br />
              JavaScript is the programming language of the Web.
              <br />
              JavaScript is easy to learn. This tutorial will teach you
              JavaScript from basic to advanced.
            </p>

            <h1 style={{ fontSize: "1.6rem", color: "#16cbfc" }}>
              Why Study JavaScript?
            </h1>
            <p>
              JavaScript is one of the 3 languages all web developers must
              learn:
            </p>
            <p>
              {" "}
              1. HTML to define the content of web pages <br />
              2. CSS to specify the layout of web pages <br />
              3. JavaScript to program the behavior of web pages
            </p>

            <button className="box1-data-btn">Watch Video Tutorial</button>
          </div>
        </div>
        z
      </div>

      {/* Block B */}
      <div className="block-B" style={{ marginTop: "3rem" }}>
        <h3 className="block-A-heading">
          Easy Learning with JavaScript  "Try it Yourself"
        </h3>

        <div className=" data-content-box2">
          <p className=" example-tag">Example</p>
          <div className="example-block-B">
            <p>
            function toCelsius(fahrenheit) <br/>&#123;<br/>
  return (5/9) * (fahrenheit-32);<br/>
&#125;<br/>

let value = toCelsius();
            </p>
          </div>
        </div>
        <NavLink className="box1-data-btn" to='/CodeEditor' >Try it Yourself</NavLink>

      </div>
    </div>
  );
}

function Basicjs() {
  return (
    <div main-content>
      <div className=" block-A">
        <h3 className="block-A-heading">JavaScript Where To</h3>
        <div className="data-content-box1">
          <div className="box1-data">

            <h1 style={{fontSize:'1.8rem'}}>The &lt;&gt;script&lt;&gt; Tag</h1>
            <p>In HTML, JavaScript code is inserted between&lt;script&gt; and &lt;/script&gt; tags</p>
            <br />
            <h1 style={{fontSize:'1.8rem'}}>JavaScript &lt;script&gt; or &lt;Body &gt; </h1>
            <p>You can place any number of scripts in an HTML document.
                <br />

Scripts can be placed in the &lt;body &gt;, or in the &lt;head&gt; section of an HTML page, or in both.</p>
            <button className="box1-data-btn">Watch Video Tutorial</button>
          </div>
        </div>
      </div>

      {/* Block B */}
      <div className="block-B">
        <h3 className="block-A-heading">
          Easy Learning with HTML "Try it Yourself"
        </h3>

        <div className=" data-content-box2">
          <p className=" example-tag">Example</p>
          <div className="example-block-B">
          <p>
            function toCelsius(fahrenheit) <br/>&#123;<br/>
  return (5/9) * (fahrenheit-32);<br/>
&#125;<br/>

let value = toCelsius();
            </p>
          </div>
        </div>
        <NavLink className="box1-data-btn" to='/CodeEditor' >Try it Yourself</NavLink>

      </div>
    </div>
  );
}

// -----------------------Elements----------------------------
function Elementsjs() {
  return (
    <div main-content>
      <div className=" block-A">
        <h3 className="block-A-heading">Elements Tutorial</h3>
        <div className="data-content-box1">
          <div className="box1-data">
            <p>HTML is the standard markup language for Web pages.</p>
            <p>With HTML you can create your own Website.</p>
            <p>HTML is easy to learn - You will enjoy it!</p>
            <button className="box1-data-btn">Watch Video Tutorial</button>
          </div>
        </div>
      </div>

      {/* Block B */}
      <div className="block-B">
        <h3 className="block-A-heading">
          Easy Learning with HTML "Try it Yourself"
        </h3>

        <div className=" data-content-box2">
          <p className=" example-tag">Example</p>
          <div className="example-block-B">
          <p>
            function toCelsius(fahrenheit) <br/>&#123;<br/>
  return (5/9) * (fahrenheit-32);<br/>
&#125;<br/>

let value = toCelsius();
            </p>
          </div>
        </div>
        <NavLink className="box1-data-btn" to='/CodeEditor' >Try it Yourself</NavLink>

      </div>
    </div>
  );
}
export { Basicjs, Homejs, Elementsjs };
