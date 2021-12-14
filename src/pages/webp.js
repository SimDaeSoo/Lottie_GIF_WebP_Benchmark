const WebpPage = () => {
  return (
    <>
      {
        new Array(28).fill(true).map((_v, i) => {
          return (
            <img
              key={i}
              alt=''
              src={`/images/sample_${i}.webp`}
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

export default WebpPage;