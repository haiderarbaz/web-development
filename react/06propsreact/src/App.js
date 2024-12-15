import User1Data from "./components/User1Data";
import User2Data from "./components/User2Data";
import User3Data from "./components/User3Data";
import User4Data from "./components/User4Data";

function App() {
  return (
    <>
      <User1Data
        img="https://pbs.twimg.com/profile_images/1743996668666937344/doKU_qI8_400x400.jpg"
        name="Saahil Balaji"
        age={26}
        hobbies={["Reading", "Traveling", "Coding"]}
        location="Gurgaon"
      />

      <User2Data
        img="https://media.licdn.com/dms/image/v2/C4E03AQGlIDM6_jTwrA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1592058498445?e=1740009600&v=beta&t=8j0bloDRl5lFmYZiBivUa9jJZcv09_LeFXNSMEs04Ws"
        name="Arshad Imam"
        age={30}
        hobbies={["Travelling", "Foodie", "Reading"]}
        location="Saudi Arabia"
      />
      <User3Data
        img="https://media.licdn.com/dms/image/v2/C5603AQFaitd1YPD4ug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1613571264908?e=1740009600&v=beta&t=Og7DdLHFd2zHHSqCukaAcO0C-V6-q1PIfDHDNcphR6o"
        name="Anand Murti Anna"
        age={30}
        hobbies={["Travelling", "Foodie", "Coding"]}
        location="Hyderabad"
      />
      <User4Data
        img="https://pbs.twimg.com/profile_images/1842882483211390976/l6kJ6LUv_400x400.jpg"
        name="Arbaz Haider"
        age={27}
        hobbies={["Travelling", "Cooking", "Solo-bike-rides"]}
        location="Bangalore"
      />
    </>
  );
}

export default App;
