// 1.Assignment variable
const fname ="Chinnawat Rattanamun"

//2.Fuction
function Greeting(){
    return (
        <div>
            <h1>Hello ReactJS</h1>
        </div>
    )
}

function Frontend(){
    return(
        <div>
            <h2>Client side Readering</h2>
            <ol type="A">
            <li>ReactJs</li>
            <li>VueJs</li>
            <li>Aunhular</li>
            </ol>
        </div>
    )
}

function Backend(){
    <div>
        <h2>Server side rendering</h2>
        <ol type="I">
            <li>NextJs</li>
            <li>NuxtJs</li>
            <li>NextJs</li>
        </ol>
    </div>
}

function Time() {
    const cTime = new Date().toTimeString();
    return (
      <div>
        <p>The current time is{cTime}</p>
      </div>
    );
  }
  
  function getCurrentTime() {
    return new Date().toTimeString();
  }
  
  function Country(props) {
      return <h2>I am a {props.message.name} { props.message.distric }</h2>
  }
  
  function Province() {
      // const provinceInfo="trat"
      const provinceInfo = {name: "Trat" , distric: "Mueng Trat"}
      return (
        <div>
          <h1>We live in my province?</h1>
          <Country message={provinceInfo} />
        </div>
      )
  }
  
  function Photo() {
      return <img src="https://picsum.photos/200/300" />
  }
  
  function MyApp() {
    return (
      <div>
        <h1 className="text">Welcome to ReactJS!</h1>
        <hr />
        <h1 className="text2">Hello, World! {fname}</h1>
        <hr />
        <Greeting />
        <Frontend />
        <Backend />
        <Time />
        <hr />
        <Country message="Thailand" />  
        <Province />
        <hr />
        <Photo />
        <p>
          The current time is <span className="text3">{getCurrentTime()}</span>
        </p>
      </div>
    );
  }
  
  // const domContainer = document.querySelector('#root');
  const domContainer = document.getElementById("root");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<MyApp />);