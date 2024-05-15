import Profile from "./Components/Profile";

export default function App(){



  return (
    <div className="app">
      <Profile
        avatar={"src/assets/a3.webp"}
        name="Murilo Taques"
        bio="Full-stack javascript developer"
        email="murilogillbert@gmail.com"
        phone="+5565993504640"
        githubUrl="https://github.com"
      />

    </div>
  )
}