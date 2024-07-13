import "../htmldata.css";
import { NavLink } from "react-router-dom";

export default function Homee() {
  return (
    <div main-content>
      <div className=" block-A">
        <h3 className="block-A-heading">Css Tutorial</h3>
        <div className="data-content-box1">
          <div className="box1-data">
            <p>CSS is the standard markup language for Web pages.</p>
            <p>With CSS you can create your own Website.</p>
            <p>CSS is easy to learn - You will enjoy it!</p>
            <button className="box1-data-btn">Watch Video Tutorial</button>
          </div>
        </div>
        z
      </div>

      {/* Block B */}
      <div className="block-B">
        <h3 className="block-A-heading">
          Easy Learning with CSS "Try it Yourself"
        </h3>

        <div className=" data-content-box2">
          <p className=" example-tag">Example</p>
          <div className="example-block-B">
            <p>
              body &#123;
              <br />
              background-color:white; &#125;
              <br />
              <br />
              h1 &#123;
              <br />
              color: white;
              <br />
              text-align: center; &#125;
              <br /> <br />p &#123;
              <br /> font-family: verdana;
              <br /> font-size: 20px; &#125;
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
            <p>CSS is the standard markup language for Web pages.</p>
            <p>With CSS you can create your own Website.</p>
            <p>CSS is easy to learn - You will enjoy it!</p>
            <button className="box1-data-btn">Watch Video Tutorial</button>
          </div>
        </div>
      </div>

      {/* Block B */}
      <div className="block-B">
        <h3 className="block-A-heading">
          Easy Learning with CSS "Try it Yourself"
        </h3>

        <div className=" data-content-box2">
          <p className=" example-tag">Example</p>
          <div className="example-block-B">
          <p>
              body &#123;
              <br />
              background-color:white; &#125;
              <br />
              <br />
              h1 &#123;
              <br />
              color: white;
              <br />
              text-align: center; &#125;
              <br /> <br />p &#123;
              <br /> font-family: verdana;
              <br /> font-size: 20px; &#125;
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
  return (
    <div main-content>
      <div className=" block-A">
        <h3 className="block-A-heading">Elements Tutorial</h3>
        <div className="data-content-box1">
          <div className="box1-data">
            <p>CSS is the standard markup language for Web pages.</p>
            <p>With CSS you can create your own Website.</p>
            <p>CSS is easy to learn - You will enjoy it!</p>
            <button className="box1-data-btn">Watch Video Tutorial</button>
          </div>
        </div>
      </div>

      {/* Block B */}
      <div className="block-B">
        <h3 className="block-A-heading">
          Easy Learning with Css "Try it Yourself"
        </h3>

        <div className=" data-content-box2">
          <p className=" example-tag">Example</p>
          <div className="example-block-B">
          <p>
              body &#123;
              <br />
              background-color:white; &#125;
              <br />
              <br />
              h1 &#123;
              <br />
              color: white;
              <br />
              text-align: center; &#125;
              <br /> <br />p &#123;
              <br /> font-family: verdana;
              <br /> font-size: 20px; &#125;
            </p>
          </div>
        </div>
        <NavLink className="box1-data-btn" to='/CodeEditor' >Try it Yourself</NavLink>

      </div>
    </div>
  );
}
export { Basic, Homee, Elements };
