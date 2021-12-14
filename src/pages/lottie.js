import LottiePlayer from '../components/LottiePlayer';

const LottiePage = () => {
  return (
    <>
      {
        new Array(28).fill(true).map((_v, i) => {
          return (
            <LottiePlayer
              key={i}
              src={"https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"}
              style={{
                width: '200px',
                height: '200px'
              }}
            />
          )
        })
      }
    </>
  );
}

export default LottiePage;