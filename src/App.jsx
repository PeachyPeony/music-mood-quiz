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
        <form>
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
          <section>
            <h2>
              <span>3</span>
              Pick a song atmosphere.
            </h2>

            <div className="answers">
              <label>
                <input type="radio" name="atmosphere" value="dreamy" />
                ✨ Soft and magical
              </label>

              <label>
                <input type="radio" name="atmosphere" value="feel-good" />
                ☀️ Bright and catchy
              </label>

              <label>
                <input type="radio" name="atmosphere" value="chill" />
                🌿 Calm and mellow
              </label>

              <label>
                <input type="radio" name="atmosphere" value="party" />
                🔥 Energetic and exciting
              </label>
            </div>
          </section>
          <section>
            <h2>
              <span>4</span>
              You're making a playlist. What goes in first?
            </h2>

            <select defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option value="feel-good">🎤 A song I can sing along to</option>
              <option value="moody">💭 Something nostalgic and emotional</option>
              <option value="chill">☕ Something peaceful</option>
              <option value="party">💃 Something I can dance to</option>
            </select>
          </section>
          <section>
            <h2>
              <span>5</span>
              Pick a place to spend an evening.
            </h2>
            <div className="answers">
              <label>
                <input type="radio" name="evening" value="moody" />
                🌃 Walking through a city at night
              </label>

              <label>
                <input type="radio" name="evening" value="chill" />
                🛋️ Somewhere cozy and quiet
              </label>

              <label>
                <input type="radio" name="evening" value="party" />
                🎉 At a lively party
              </label>

              <label>
                <input type="radio" name="evening" value="dreamy" />
                🌅 Somewhere watching the sunset
              </label>
            </div>
          </section>
          <section>
            <h2>
              <span>6</span>
              What's your relationship with sad songs?
            </h2>

            <select defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option value="moody">🖤 I love them — give me all the emotions</option>
              <option value="dreamy">🌙 Sometimes they're exactly what I need</option>
              <option value="chill">🌿 I'll listen occasionally</option>
              <option value="feel-good">☀️ I'd rather keep things happy</option>
            </select>
          </section>
          <section>
            <h2>
              <span>7</span>
              Pick a music-listening situation.
            </h2>

            <div className="answers">
              <label>
                <input type="radio" name="listening" value="moody" />
                🎧 Headphones on, world off
              </label>

              <label>
                <input type="radio" name="listening" value="feel-good" />
                🚗 Singing loudly in the car
              </label>


              <label>
                <input type="radio" name="listening" value="party" />
                🕺 Dancing around my room
              </label>


              <label>
                <input type="radio" name="listening" value="chill" />
                ☕ Music quietly playing in the background
              </label>
            </div>
          </section>
          <section>
            <h2>
              <span>8</span>
              Pick a title for your next playlist.
            </h2>

            <select defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option value="dreamy">✨ Midnight Glow</option>
              <option value="feel-good">☀️ Good Days Only</option>
              <option value="chill">🌿 Slow &amp; Soft</option>
              <option value="party">🪩 Main Character Energy</option>
              <option value="moody">🖤 Songs I Feel</option>
            </select>
          </section>
          <button type="submit">
            Discover My Mood ♡
          </button>
        </form>
      </main>
    </>
  )
}

export default App