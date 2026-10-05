import './Quiz.css'

function App() {
  return (
    <>
      <header>
        <p>♫ ✦</p>
        <h1>What's Your Music Mood?</h1>
        <p>Answer a few questions and discover your vibe.</p>
      </header>

      <main>
        <section>
          <h2>
            <span>1</span>
            What's your ideal Saturday?
          </h2>
          <div className="answers">
            <label>
              <input type="radio" name="saturday" value="chill" />
              ☕ A slow morning with coffee
            </label>

            <label>
              <input type="radio" name="saturday" value="feel-good" />
              🌿 A spontaneous adventure
            </label>

            <label>
              <input type="radio" name="saturday" value="party" />
              🪩 A night out with friends
            </label>

            <label>
              <input type="radio" name="saturday" value="moody" />
              🎧 Staying in with music and my thoughts
            </label>
          </div>
        </section>
        <section>
          <h2>
            <span>2</span>
            Where would you rather listen to music?
          </h2>
          <select defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option value="dreamy">🌧️ By the window while it rains</option>
            <option value="feel-good">🚗 On a sunny road trip</option>
            <option value="moody">🌙 Alone at night with my headphones</option>
            <option value="party">🪩 At a party with friends</option>
          </select>
        </section>
      </main>
    </>
  )
}

export default App