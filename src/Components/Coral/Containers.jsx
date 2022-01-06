const ContentContainer = ({ children }) => {
  return (
    <div className="content-container">
      {children}
    </div>
  )
}

const SegmentContainer = ({ children }) => {
  return (
    <div className="segment-container">
      {children}
    </div>
  )
}

const DemoContainer = ({ children }) => {
  return (
    <div className="demo-container">
      {children}
    </div>
  )
}

export { ContentContainer, SegmentContainer, DemoContainer }
