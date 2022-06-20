import React, { Component } from "react";
import Youtube from "../../components/Youtube";

class Home extends Component {
  render() {
    return (
      <>
        <Youtube 
          time="5.04" 
          title="React dasar part 1" 
          desc="2x ditonton. 2 hari yang lalu" 
        />
        <Youtube 
          time="35.44" 
          title="React dasar part 2"
          desc="20x ditonton. 3 hari yang lalu"
        />
        <Youtube 
          time="24.24" 
          title="React dasar part 3"
          desc="2k ditonton. 10 hari yang lalu"
        />
        <Youtube 
          time="6.34" 
          title="React dasar part 4"
          desc="11x ditonton. 1 hari yang lalu"
        />
        <Youtube />
      </>
    );
  }
}

export default Home;
