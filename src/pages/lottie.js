import LottiePlayer from '../components/LottiePlayer';

const LottiePage = () => {
  return (
    <>
      {
        new Array(28).fill(true).map((_v, i) => {
          return (
            <LottiePlayer
              key={i}
              src={"/sample.json"}
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