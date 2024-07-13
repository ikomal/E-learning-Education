import { BiFontSize } from "react-icons/bi";
import "./htmldata.css";
import { NavLink } from "react-router-dom";
export default function Homee() {
  return (
    <div main-content>
      <div className=" block-A">
        <h3 className="block-A-heading">HTML Tutorial</h3>
        <div className="data-content-box1">
          <div className="box1-data">
            <p>HTML is the standard markup language for Web pages.</p>
            <p>With HTML you can create your own Website.</p>
            <p>HTML is easy to learn - You will enjoy it!</p>
            <button className="box1-data-btn">Watch Video Tutorial</button>
          </div>
        </div>
        z
      </div>

      {/* Block B */}
      <div className="block-B">
        <h3 className="block-A-heading">
          Easy Learning with HTML "Try it Yourself"
        </h3>

        <div className=" data-content-box2">
          <p className=" example-tag">Example</p>
          <div className="example-block-B">
          <p>&lt;!DOCTYPE html&gt;<br/>
&lt;html&gt;<br/>
&lt;head&gt;<br/>

&lt;title&gt;Page Title&lt;/title&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>

&lt;h1&gt;This is a Heading&lt;/h1&gt;<br/>
&lt;p&gt;This is a paragraph.;/p&gt;<br/>

&lt;/body&gt;<br/>
&lt;/html&gt;<br/>
</p>
          </div>
        </div>
        
        <NavLink className="box1-data-btn" to='/CodeEditor' >Try it Yourself</NavLink>

      </div>
    </div>
  );
}

function Basic() {
  return (
    <div main-content>
      <div className=" block-A">
        <h3 className="block-A-heading">Basic Tutorial</h3>
        <div className="data-content-box1">
          <div className="box1-data">
            <h1 style={{ fontSize: "1.5rem" }}>What is HTML?</h1>
            <p>HTML stands for Hyper Text Markup Language</p>
            <p>HTML is the standard markup language for creating Web pages</p>
            <p>HTML describes the structure of a Web page!</p>
            <p>HTML elements tell the browser how to display the content</p>
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
          <p>&lt;!DOCTYPE html&gt;<br/>
&lt;html&gt;<br/>
&lt;head&gt;<br/>

&lt;title&gt;Page Title&lt;/title&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>

&lt;h1&gt;This is a Heading&lt;/h1&gt;<br/>
&lt;p&gt;This is a paragraph.;/p&gt;<br/>

&lt;/body&gt;<br/>
&lt;/html&gt;<br/>
</p>
          </div>
        </div>
        <NavLink className="box1-data-btn" to='/CodeEditor' >Try it Yourself</NavLink>

      </div>
    </div>
  );
}

// -----------------------Elements----------------------------
function Elements() {
  // const htmlCode = '<p>This is &lt;h1&gt;My first H1 tag &lt;h1&gt;</p> ';
  return (
    <div main-content>
      <div className=" block-A">
        <h3 className="block-A-heading">HTML Elements</h3>
        <div className="data-content-box1">
          <div className="box1-data">
            <p>
              An HTML element is defined by a start tag, some content, and an
              end tag.
            </p>

            <h1 style={{fontWeight:'bold',fontSize:'1.2rem',marginBottom:'.4rem'}}>Examples of some HTML elements:</h1>
            <p>&lt;h1&gt;My first H1 tag &lt;h1&gt;</p>
            <p>&lt;p&gt;My first Paragraph &lt;p&gt;</p>
           
          <p>Note: Some HTML elements have no content (like the  element). These elements are called empty elements. Empty elements do not have an end tag!</p>
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
            <p>&lt;!DOCTYPE html&gt;<br/>
&lt;html&gt;<br/>
&lt;head&gt;<br/>

&lt;title&gt;Page Title&lt;/title&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>

&lt;h1&gt;This is a Heading&lt;/h1&gt;<br/>
&lt;p&gt;This is a paragraph.;/p&gt;<br/>

&lt;/body&gt;<br/>
&lt;/html&gt;<br/>
</p>
          </div>
        </div>
        <NavLink className="box1-data-btn" to='/CodeEditor' >Try it Yourself</NavLink>

      </div>

    
     
      
    </div>
  );
}
export { Basic, Homee, Elements };
