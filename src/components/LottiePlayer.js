import { Player } from '@lottiefiles/react-lottie-player';

const LottiePlayer = ({ src, style }) => {
  return (
    <div style={{ ...style, display: 'inline-block' }}>
      <Player
        autoplay
        loop
        src={src}
        style={style}
      >
      </Player>
    </div>
  )
}

export default LottiePlayer;