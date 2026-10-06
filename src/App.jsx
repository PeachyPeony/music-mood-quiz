import { useState } from 'react'
import './Quiz.css'

function App() {
  const [saturday, setSaturday] = useState('')
  const [location, setLocation] = useState('')
  const [atmosphere, setAtmosphere] = useState('')
  const [playlist, setPlaylist] = useState('')
  const [evening, setEvening] = useState('')
  const [sadSongs, setSadSongs] = useState('')
  const [listening, setListening] = useState('')
  const [playlistTitle, setPlaylistTitle] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const moodResults = {
    'feel-good': {
      icon: '☀️',
      name: 'Feel-Good',
      description: 'Bright, cheerful and always ready for a good time.',
      soundtrack: [
        '☀️ sunny drives',
        '🎤 songs to sing along to',
        '✨ instant mood boosters',
      ],
    },
    dreamy: {
      icon: '🌙',
      name: 'Dreamy',
      description: 'Soft, atmospheric and a little magical.',
      soundtrack: [
        '✨ dreamy playlists',
        '🌧️ rainy afternoons',
        '🌙 late-night listening',
      ],
    },
    chill: {
      icon: '🌿',
      name: 'Chill',
      description: 'Relaxed, cozy and perfectly happy taking it slow.',
      soundtrack: [
        '🌿 slow mornings',
        '☕ cozy evenings',
        '🎧 music in the background',
      ],
    },
    party: {
      icon: '🪩',
      name: 'Party',
      description: 'Energetic, social and always ready to turn it up.',
      soundtrack: [
        '🪩 nights out with friends',
        '💃 songs you can dance to',
        '🔥 high-energy playlists',
      ],
    },
    moody: {
      icon: '🖤',
      name: 'Moody',
      description: 'Emotional, introspective and a little mysterious.',
      soundtrack: [
        '🖤 late-night headphones',
        '🌃 city lights after dark',
        '💭 songs that hit a little deeper',
      ],
    },
  }

  const getResult = () => {
    const scores = {
      'feel-good': 0,
      dreamy: 0,
      chill: 0,
      party: 0,
      moody: 0,
    }

    const answers = [
      saturday,
      location,
      atmosphere,
      playlist,
      evening,
      sadSongs,
      listening,
      playlistTitle
    ]

    answers.forEach((answer) => {
      if (answer) {
        scores[answer] += 1
      }
    })

    const highestScore = Math.max(...Object.values(scores))

    const topMoods = Object.keys(scores).filter(
      (mood) => scores[mood] === highestScore
    )
    if (topMoods.length === 1) {
      return topMoods[0]
    }
    if (topMoods.includes(playlistTitle)) {
      return playlistTitle
    }

    return topMoods[0]
  }
  const result = getResult()
  return (
    <>
      <header>
        <p>♫ ✦</p>
        <h1>What's Your Music Mood?</h1>
        <p>Answer a few questions and discover your vibe.</p>
      </header>

      <main>
        {submitted ? (
          <section className="result-card">
            <p className="result-label">YOUR MUSIC MOOD</p>
            <div className="result-icon">{moodResults[result].icon}</div>
            <h2 className="result-name">{moodResults[result].name}</h2>
            <p className="result-description">{moodResults[result].description}</p>

            <div className="soundtrack">
              <p className="soundtrack-title">Your soundtrack</p>
              <ul>
                {moodResults[result].soundtrack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ) : (
          <form onSubmit={handleSubmit}>
            <section>
              <h2>
                <span>1</span>
                What's your ideal Saturday?
              </h2>
              <div className="answers">
                <label>
                  <input
                    type="radio"
                    name="saturday"
                    value="chill"
                    checked={saturday === 'chill'}
                    onChange={(event) => setSaturday(event.target.value)}
                    required
                  />
                  ☕ A slow morning with coffee
                </label>

                <label>
                  <input type="radio"
                    name="saturday"
                    value="feel-good"
                    checked={saturday === 'feel-good'}
                    onChange={(event) => setSaturday(event.target.value)}
                  />
                  🌿 A spontaneous adventure
                </label>

                <label>
                  <input type="radio"
                    name="saturday"
                    value="party"
                    checked={saturday === 'party'}
                    onChange={(event) => setSaturday(event.target.value)}
                  />
                  🪩 A night out with friends
                </label>

                <label>
                  <input type="radio"
                    name="saturday"
                    value="moody"
                    checked={saturday === 'moody'}
                    onChange={(event) => setSaturday(event.target.value)}
                  />
                  🎧 Staying in with music and my thoughts
                </label>
              </div>
            </section>
            <section>
              <h2>
                <span>2</span>
                Where would you rather listen to music?
              </h2>
              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
              >
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
                  <input
                    type="radio"
                    name="atmosphere"
                    value="dreamy"
                    checked={atmosphere === 'dreamy'}
                    onChange={(event) => setAtmosphere(event.target.value)}
                    required
                  />
                  ✨ Soft and magical
                </label>

                <label>
                  <input
                    type="radio"
                    name="atmosphere"
                    value="feel-good"
                    checked={atmosphere === 'feel-good'}
                    onChange={(event) => setAtmosphere(event.target.value)}
                  />
                  ☀️ Bright and catchy
                </label>

                <label>
                  <input
                    type="radio"
                    name="atmosphere"
                    value="chill"
                    checked={atmosphere === 'chill'}
                    onChange={(event) => setAtmosphere(event.target.value)}
                  />
                  🌿 Calm and mellow
                </label>

                <label>
                  <input
                    type="radio"
                    name="atmosphere"
                    value="party"
                    checked={atmosphere === 'party'}
                    onChange={(event) => setAtmosphere(event.target.value)}
                  />
                  🔥 Energetic and exciting
                </label>
              </div>
            </section>
            <section>
              <h2>
                <span>4</span>
                You're making a playlist. What goes in first?
              </h2>

              <select
                value={playlist}
                onChange={(event) => setPlaylist(event.target.value)}
                required
              >
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
                  <input
                    type="radio"
                    name="evening"
                    value="moody"
                    checked={evening === 'moody'}
                    onChange={(event) => setEvening(event.target.value)}
                    required
                  />
                  🌃 Walking through a city at night
                </label>

                <label>
                  <input
                    type="radio"
                    name="evening"
                    value="chill"
                    checked={evening === 'chill'}
                    onChange={(event) => setEvening(event.target.value)}
                  />
                  🛋️ Somewhere cozy and quiet
                </label>

                <label>
                  <input
                    type="radio"
                    name="evening"
                    value="party"
                    checked={evening === 'party'}
                    onChange={(event) => setEvening(event.target.value)}
                  />
                  🎉 At a lively party
                </label>

                <label>
                  <input
                    type="radio"
                    name="evening"
                    value="dreamy"
                    checked={evening === 'dreamy'}
                    onChange={(event) => setEvening(event.target.value)}
                  />
                  🌅 Somewhere watching the sunset
                </label>
              </div>
            </section>
            <section>
              <h2>
                <span>6</span>
                What's your relationship with sad songs?
              </h2>

              <select
                value={sadSongs}
                onChange={(event) => setSadSongs(event.target.value)}
                required
              >
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
                  <input
                    type="radio"
                    name="listening"
                    value="moody"
                    checked={listening === 'moody'}
                    onChange={(event) => setListening(event.target.value)}
                    required
                  />
                  🎧 Headphones on, world off
                </label>

                <label>
                  <input
                    type="radio"
                    name="listening"
                    value="feel-good"
                    checked={listening === 'feel-good'}
                    onChange={(event) => setListening(event.target.value)}
                  />
                  🚗 Singing loudly in the car
                </label>


                <label>
                  <input
                    type="radio"
                    name="listening"
                    value="party"
                    checked={listening === 'party'}
                    onChange={(event) => setListening(event.target.value)}
                  />
                  🕺 Dancing around my room
                </label>


                <label>
                  <input
                    type="radio"
                    name="listening"
                    value="chill"
                    checked={listening === 'chill'}
                    onChange={(event) => setListening(event.target.value)}
                  />
                  ☕ Music quietly playing in the background
                </label>
              </div>
            </section>
            <section>
              <h2>
                <span>8</span>
                Pick a title for your next playlist.
              </h2>

              <select
                value={playlistTitle}
                onChange={(event) => setPlaylistTitle(event.target.value)}
                required
              >
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
        )}
      </main>
    </>
  )
}

export default App