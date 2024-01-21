import MarqueeText from "@/components/home/MarqueeText";

const Home =() => {
  return (
    <main className="h-screen">
      <MarqueeText direction="left"/>
      <MarqueeText direction="right"/>
    </main>
  )
}

export default Home;
