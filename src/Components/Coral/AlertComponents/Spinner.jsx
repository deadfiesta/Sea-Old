const Spinner = ({ width, spin }) => {
  return (
    <div style={{maxHeight: width}} className={spin ? "spinner-container spinning" : "spinner-container"}>
      <svg className="spinner" width={width} height={width} viewBox="0 0 24 24">
        <circle className="stroke" cx="12" cy="12" r="10.5" />
      </svg>
    </div>
  )
}

export default Spinner

Spinner.defaultProps = {
  width: "20px",
  spin: true
}